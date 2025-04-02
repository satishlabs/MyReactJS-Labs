import React from "react";
import classNames from "classnames";
import propTypes from 'prop-types'

const MyTextInput = (props) => {
    return (
        <div className="container col-md-6">
            <div className="form-group">
                <label htmlFor={props.myname}>{props.mylabel}</label>
                <input  type={props.mytype}
                        name={props.myname}
                        placeholder={props.myplaceholder}
                        value={props.myvalue}
                        onChange={props.myonChange}
                        className={
                            classNames("form-control form-control-lg")
                        }
                />
            </div>
        </div>
    );
};

MyTextInput.propTypes ={
    mylabel: propTypes.string.isRequired,
    myname: propTypes.string.isRequired,
    myvalue: propTypes.string.isRequired,
    myonChange: propTypes.func.isRequired

}

MyTextInput.defaultProps = {
    mytext:'text',
    myerror:'',
}

export default MyTextInput;
