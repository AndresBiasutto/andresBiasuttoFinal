import { useState } from "react";
import PropTypes from "prop-types";

const ToggleBtn = ({ icon1, icon2, buttonFunction }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <button className="h-6 w-6" onClick={[ buttonFunction]}>
      {toggle ? (
        <img className="h-6 w-6" src={icon1} />
      ) : (
        <img className="h-6 w-6" src={icon2} />
      )}
    </button>
  );
};

ToggleBtn.propTypes = {
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  buttonFunction: PropTypes.func,
};

export default ToggleBtn;
