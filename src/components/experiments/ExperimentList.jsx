import React from "react";
import { connect } from "react-redux";
import { fetchExperiments } from "../../state/experiments/actions";
import {
  getExperimentsCount,
  getFilteredExperimentsByDate
} from "../../state/experiments/selectors";
import { getStartDate, getEndDate } from "../../state/dates/selectors";
import PropTypes from "prop-types";
import { List } from 'immutable';

export class ExperimentList extends React.Component {
  componentDidMount() {
    this.props.fetchExperiments();
  }

  renderTitle() {
    let title = "experiments";
    if (this.props.startDate) {
      title += ` after ${this.props.startDate}`;
    }
    if (this.props.endDate) {
      title += ` before ${this.props.endDate}`;
    }

    return title;
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.filteredExperiments.size} / {this.props.experimentCount}{" "}
          {this.renderTitle()}
        </h1>
        <h6>
          <table>
            <tbody>
              {this.props.filteredExperiments.map(function(item, key) {
                return (
                  <tr key = {key + 1}>
                    <td>{new Date(item.get("start_date")).toGMTString() }</td>
                    <td>{item.get("name")}</td>
                  </tr>
                  )
              })}
            </tbody>
          </table>
        </h6>
      </div>
    );
  }
}

ExperimentList.propTypes = {
  experimentCount: PropTypes.number,
  fetchExperiments: PropTypes.func,
  filteredExperiments: PropTypes.instanceOf(List),
  startDate: PropTypes.string,
  endDate: PropTypes.string
};
const mapStateToProps = state => ({
  experimentCount: getExperimentsCount(state),
  filteredExperiments: getFilteredExperimentsByDate(state),
  startDate: getStartDate(state),
  endDate: getEndDate(state)
});

const mapDispatchToProps = dispatch => ({
  fetchExperiments: () => dispatch(fetchExperiments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperimentList);
