import PropTypes from "prop-types";

import Logo from "../Logo/Logo";
import StepList from "./StepList/StepList";
import "./Sidebar.style.scss";

function Sidebar({ steps, handleClick }) {
  return (
    <header className="sidebar">
      <Logo />
      {/* StepList */}
      <StepList handleClick={handleClick} steps={steps} />
      {/* Card */}
    </header>
  );
}

Sidebar.defaultProps = {};

Sidebar.propTypes = {};

export default Sidebar;
