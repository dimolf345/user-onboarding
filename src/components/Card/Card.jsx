import PropTypes from "prop-types";
import "./Card.style.scss";

function Card({ quote }) {
  return <div className=""></div>;
}

Card.propTypes = {
  quote: PropTypes.shape({
    author: PropTypes.string,
    role: PropTypes.string,
    quote: PropTypes.string,
  }).isRequired,
};

export default Card;
