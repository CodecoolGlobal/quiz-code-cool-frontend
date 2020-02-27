import React, { useEffect, useContext } from "react";
import { RandomStarterFormContext } from "../../context/RandomStarterFormContext";

import PropTypes from "prop-types";

import { InputItem, InputLabel } from "../../style/MyStyle";

import { Slider } from "@material-ui/core";

import Tooltip from "@material-ui/core/Tooltip";

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  const setPlayerNumber = useContext(RandomStarterFormContext).playerNumber[1];

  useEffect(() => {
    setPlayerNumber(value);
  }, [setPlayerNumber, value]);

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

export const StepSlider = () => {
  return (
    <InputItem>
      <InputLabel>Player number</InputLabel>
      <Slider
        style={{ color: "#35a79c" }}
        min={1}
        max={6}
        ValueLabelComponent={ValueLabelComponent}
        aria-label='custom thumb label'
        defaultValue={2}
      />
    </InputItem>
  );
};

export default StepSlider;
