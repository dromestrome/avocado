import { fromJS } from "immutable";
import { getExperimentsCount, getFilteredExperimentsByDate, 
  getStartDatepickerTimestamp, getEndDatepickerTimestamp 
} from "../../../state/experiments/selectors";

describe("getExperimentsCount test", () => {
  it("should get experiment count", () => {
    let mockedState = fromJS({
      experiments: {
        items: [1, 2, 3, 4]
      }
    });
    expect(getExperimentsCount(mockedState)).toEqual(4);
  });
});

describe("getFilteredExperimentsByDate tests", () => {
  const experiment1 = {
    start_date: Date.parse("2018-08-22"),
    end_date: Date.parse("2019-01-20"),
    name: "test experiment name 1"
  };

  const experiment2 = {
    start_date: Date.parse("2017-08-22"),
    end_date: Date.parse("2019-01-20"),
    name: "test experiment name 2"
  }

  const mockedExperiments = {
    items: [
      experiment1,
      experiment2
    ]
  }
  
  it("should return an immutable List of filtered experiments, where 1 experiment falls between startDate and endDate range", () => {
    const mockedState = fromJS({
      experiments: mockedExperiments, 
      dates: {
        startDate: "2018-07-22",
        endDate: "2019-07-22"
      }
    });

    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([experiment1]));
  });

  it("should return an empty List, where none of the items in experiments fall between the startDate and endDate ranges", () => {
    const mockedState = fromJS({
      experiments: mockedExperiments, 
      dates: {
        startDate: "2019-12-01",
        endDate: "2019-12-31"
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([]));
  });

  it("should return all experiments with start date after startDate", () => {
    const mockedState = fromJS({
      experiments: mockedExperiments, 
      dates: {
        startDate: "2018-08-01",
        endDate: null
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([experiment1]));
  });

  it("should return an empty List because all experiment start dates are before chosen startDates", () => {
    const mockedState = fromJS({
      experiments: mockedExperiments, 
      dates: {
        startDate: "2018-08-23",
        endDate: null
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([]));
  });

  it("should return empty List because experiment start date is null", () => {
    const mockedState = fromJS({
      experiments: {
        items: [
          {
            start_date: null,
            end_date: Date.parse("2019-01-20")
          }
        ]
      }, 
      dates: {
        startDate: "2018-07-22"
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([]));
  });

  it("should return an empty List because all experiment end dates are after chosen endDates", () => {
    const mockedState = fromJS({
      experiments: mockedExperiments, 
      dates: {
        startDate: null,
        endDate: "2016-07-22"
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([]));
  });

  it("should return empty List because experiment end date is null", () => {
    const mockedState = fromJS({
      experiments: {
        items: [
          {
            start_date: Date.parse("2019-01-20"),
            end_date: null
          }
        ]
      }, 
      dates: {
        endDate: "2018-07-22"
      }
    });
    expect(getFilteredExperimentsByDate(mockedState)).toEqual(fromJS([]));
  });
});

describe("timestamp helper functions (getStartDatepickerTimestamp, getEndDatepickerTimestamp) tests", () => {
  it("should return the startDate timestamp when startDate is not null", () => {
    const mockedState = fromJS({
      dates: {
        startDate: "2018-07-22"
      }
    });
    expect(getStartDatepickerTimestamp(mockedState)).toEqual(1532217600000);
  });

  it("should return null when startDate is null", () => {
    const mockedState = fromJS({
      dates: {
        startDate: null
      }
    });
    expect(getStartDatepickerTimestamp(mockedState)).toEqual(null);
  });

  it("should return the endDate timestamp when endDate is not null", () => {
    const mockedState = fromJS({
      dates: {
        endDate: "2018-07-22"
      }
    });
    expect(getEndDatepickerTimestamp(mockedState)).toEqual(1532217600000);
  });

  it("should return null when endDate is null", () => {
    const mockedState = fromJS({
      dates: {
        endDate: null
      }
    });
    expect(getEndDatepickerTimestamp(mockedState)).toEqual(null);
  });
});
