import React from "react";
import PropTypes from "prop-types";

const MySelectBox = (props) => {
    return (
        <div className="form-group"> 
            <h3>
                <label>{props.mylabel}</label>
                <select 
                    className="form-control form-control-lg"  
                    name={props.myname} 
                    onChange={props.myonChange}  // ✅ Fixed incorrect prop name
                >
                    {props.myoptions.map((myoption, myindex) => (
                        <option key={myindex} value={myoption}>
                            {myoption}
                        </option>
                    ))}
                </select>
            </h3>
        </div>
    );
};

// ✅ Fixed PropTypes
MySelectBox.propTypes = {
    mylabel: PropTypes.string.isRequired,
    myname: PropTypes.string.isRequired,
    myonChange: PropTypes.func.isRequired,
    myoptions: PropTypes.arrayOf(PropTypes.string).isRequired,  // Fixed type
};

export default MySelectBox;
