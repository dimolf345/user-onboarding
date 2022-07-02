import PropTypes from "prop-types";
import React from "react";
import SrOnly from "../../SrOnly/SrOnly";
import "./StepListItem.style.scss";
import LinesSvg from "./LinesSvg/LinesSvg";

function StepListItem({ isLast, step, handleClick }) {
  const makeClass = (step) => {
    if (step.isActive || step.isCompleted)
      return "steplist__item steplist__item--white";
    return "steplist__item";
  };

  const labelName = step.name.toLowerCase().replace(" ", "-");

  return (
    <>
      <li className={makeClass(step)}>
        <label htmlFor={labelName}>
          <input
            tabIndex="-1"
            readOnly
            type="checkbox"
            checked={step.isCompleted}
            name={labelName}
            id={labelName}
          />
          <SrOnly text={`Step ${labelName} completed`} />
        </label>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          href=""
        >
          {step.name}
        </a>
        {!isLast && <LinesSvg />}
      </li>
    </>
  );
}

StepListItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  step: PropTypes.shape({
    name: PropTypes.string,
    isActive: PropTypes.bool,
    isCompleted: PropTypes.bool,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default StepListItem;
