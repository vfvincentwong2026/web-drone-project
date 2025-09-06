import PropTypes from "prop-types";

const ButtonSee = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white border rounded-[10px] ${styles}`}
  >
    See Details
  </button>
);

ButtonSee.prototype = {
  styles: PropTypes.string,
};

export default ButtonSee;
