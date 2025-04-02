import React from "react";
import PropTypes from "prop-types";


const MyCheckBox = (props) =>{
    return(
        <span>
            <h3>
                <input
                    type={props.mytype}
                    value={props.myvalue}
                    onChange={props.myOnChange}
                    checked={props.mychecked}
                    className="from-check-input"
                />
                &nbsp; <label>{props.mylabel}</label>
            </h3>
        </span>
    )
}

// ✅ Fixed PropTypes
MyCheckBox.propTypes = {
    mylabel: PropTypes.string.isRequired,  // ✅ Fixed typo
    myvalue: PropTypes.string.isRequired,
    myOnChange: PropTypes.func.isRequired,
    mychecked: PropTypes.bool.isRequired, // ✅ Should be `bool`, not `func`
};

// ✅ Set Default Props
MyCheckBox.defaultProps = {
    mytype: "checkbox",
};

export default MyCheckBox;