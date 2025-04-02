import React from "react";
import PropTypes from "prop-types";

const MyRadioButton = (props) => {
    return (
        <span>
            <h3>
                <input
                    type={props.mytype}
                    name={props.myname}
                    checked={props.mychecked} // ✅ Corrected checked logic
                    value={props.myvalue}
                    onChange={props.myOnChange} // ✅ Corrected prop name
                />
                &nbsp; <label>{props.mylabel}</label> {/* ✅ Fixed typo from "mylable" */}
            </h3>
        </span>
    );
};

// ✅ Fixed PropTypes
MyRadioButton.propTypes = {
    mylabel: PropTypes.string.isRequired,  // ✅ Fixed typo
    myname: PropTypes.string.isRequired,
    myvalue: PropTypes.string.isRequired,
    myOnChange: PropTypes.func.isRequired,
    mychecked: PropTypes.bool.isRequired, // ✅ Should be `bool`, not `func`
};

// ✅ Set Default Props
MyRadioButton.defaultProps = {
    mytype: "radio",
};

export default MyRadioButton;
