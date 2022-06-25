import PropTypes from "prop-types";

import StepListItem from "../StepListItem/StepListItem";
import "./StepList.style.scss";

function StepList({ handleClick, steps }) {
  return (
    <nav className="steplist">
      <ul aria-label="form steps">
        {steps &&
          steps.map((step, index) => (
            <StepListItem
              handleClick={() => handleClick(step.name)}
              key={step.name}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
      </ul>
    </nav>
  );
}

StepList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isActive: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
};

export default StepList;
