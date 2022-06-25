import PropTypes from "prop-types";

import UPLogo from "../../assets/logo.png";
import "./Logo.style.scss";

function Logo(props) {
  return (
    <a href="#">
      <img src={UPLogo} alt="United properties logo" />
    </a>
  );
}

Logo.defaultProps = {};

Logo.propTypes = {};

export default Logo;
