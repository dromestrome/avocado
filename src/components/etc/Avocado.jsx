import React from "react";
import PropTypes from "prop-types";

export default class Avocado extends React.Component {
  render() {
    const { dorito, cape } = this.props;
    let className = "avocado";
    if (dorito) {
      className = `${className} dorito`;
    }
    if (cape) {
      className = `${className} super`;
    }

    return (
      <div className={className}>
        <svg viewBox="0 0 135 178">
          <g
            className="arms"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="4"
          >
            <path d="M 30.971627,77.044969 C 1.8442515,59.644207 10.922912,43 10.922912,43" />
            <path d="M 104.95126,77.044969 C 134.07865,59.644207 125,43 125,43" />
          </g>
          <g
            className="feets"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="4"
          >
            <path d="m 75.973727,140.56989 c 5.91069,24.01215 -1.10825,35.4641 -1.10825,35.4641 h 11.08253" />
            <path d="m 54.886437,140.56989 c -5.91069,24.01215 1.10825,35.4641 1.10825,35.4641 h -11.08253" />
          </g>
          <g className="body">
            <path
              className="d"
              fill="none"
              d="m 129.0419,111.78105 c -3.47383,6.01685 -56.212884,0 -63.160544,0 -6.947659,0 -59.6867121,6.01685 -63.1605421,0 C -0.75301594,105.7642 30.827254,63.099265 34.301084,57.082415 37.774914,51.065566 58.933696,2.3837816 65.881356,2.3837814 c 6.947659,-2e-7 28.10644,48.6817826 31.580269,54.6986326 3.473835,6.01685 35.054105,48.681786 31.580275,54.698636 z"
            />
            <path
              className="outer"
              fill="#2a670c"
              d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5z"
            />
            <path
              className="inner"
              fill="#c1e20c"
              d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z"
            />
          </g>
          <g className="seed">
            <circle cx="66" cy="93" r="20" fill="#452c0c" />
            <path
              fill="#FFF2"
              d="M107-65a15 15 0 0 1-7 13 15 15 0 0 1-15 0 15 15 0 0 1-7-13"
              transform="rotate(90)"
            />
          </g>
          <g className="face">
            <g className="eye izq">
              <circle cx="58" cy="42" r="6" />
              <circle cx="56" cy="41" r="3" fill="#fff" />
            </g>
            <g className="eye der">
              <circle cx="73" cy="42" r="6" />
              <circle cx="72" cy="41" r="3" fill="#fff" />
            </g>
            <path d="M73 53a8 8 0 0 1-4 7 8 8 0 0 1-8 0 8 8 0 0 1-4-7" />
          </g>
        </svg>
      </div>
    );
  }
}

Avocado.propTypes = {
  dorito: PropTypes.bool,
  cape: PropTypes.bool
};
