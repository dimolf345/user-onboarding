import PropTypes from "prop-types";

import Logo from "../Logo/Logo";
import StepList from "./StepList/StepList";
import Card from "@components/Card/Card";
import "./Sidebar.style.scss";

import { QUOTES } from "@/src/utilities/constants";

function Sidebar({ steps, handleClick, currentStep }) {
  const quote = QUOTES[currentStep];
  return (
    <header className="sidebar">
      <Logo />
      {/* StepList */}
      <StepList handleClick={handleClick} steps={steps} />
      {/* Card */}
      <Card quote={quote} />
    </header>
  );
}
Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isActive: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Sidebar;
