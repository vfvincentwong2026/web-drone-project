import PropTypes from "prop-types";
import { more } from "../assets";

const More = ({ styles }) => (
  <img
    src={more}
    alt="btn start"
    className={`sm:w-[170px] w-[130px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

More.prototype = {
  styles: PropTypes.string,
};

export default More;
