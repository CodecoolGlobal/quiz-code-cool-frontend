import React, { useEffect, useContext } from "react";

import { RandomQuizContext } from "context/RandomQuizContext";

import { InputItem, InputLabel } from "style/js/CommonStyles";

import { Slider } from "@material-ui/core";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  const {playerNumberState, nameInputsState} = useContext(RandomQuizContext);

  const [playerNumber, setPlayerNumber] = playerNumberState;
  const [names, setNames] = nameInputsState;

  useEffect(() => {
    if (value < playerNumber) {
      setNames(names.slice(0, value))
    }
    setPlayerNumber(value);
  }, [value]);

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
      <InputLabel>Number of players</InputLabel>
      <Slider
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
