import React from "react";
import PropTypes from "prop-types";

const MyButton = (props) =>{
    return(
        <div className="container">
            <div className="form-group">
                <input type={props.mytype}
                    value={props.myvalue}
                    className="btn btn-primary btn-lg"/>
            </div>
        </div>
    )
}

MyButton.propTypes = {
    myvalue: PropTypes.string.isRequired,
};

MyButton.defaultProps = {
    mytype: 'submit',
};

export default MyButton;