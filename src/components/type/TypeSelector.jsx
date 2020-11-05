import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { setType } from "avocado/state/type/actions";
import PropTypes from "prop-types";

export class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(options) {
    let types;
    if (options) {
      types = options.map((option) => {
        return option.value;
      });
    }
    this.props.dispatch(setType(types));
  }

  render() {
    const typeOptions = [
      { value: "addon", label: "Add-on" },
      { value: "pref", label: "Pref" },
      { value: "message", label: "Message Router" },
      { value: "rollout", label: "Rollout" },
    ];
    return (
      <div className="card shadow border-left-orange">
        <div className="card-body">
          <h4 className="card-title">Type</h4>
          <Select
            onChange={this.onChange}
            options={typeOptions}
            id="typeSelector"
            isMulti
            isClearable
          />
        </div>
      </div>
    );
  }
}

TypeSelector.propTypes = {
  value: PropTypes.string,
  setType: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: state.value,
});

export default connect(mapStateToProps)(TypeSelector);
