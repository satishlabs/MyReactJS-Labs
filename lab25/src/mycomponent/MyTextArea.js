import React from "react";
import PropTypes from "prop-types";

const MyTextArea = ({ mylabel, myvalue, myonChange, myplaceholder, myrows, mycols }) => {
    return (
        <div className="form-group">
            <h3>
                <label>{mylabel}</label>
            </h3>
            <textarea
                value={myvalue}
                onChange={myonChange} // ✅ Fixed Prop Name
                placeholder={myplaceholder}
                rows={myrows}
                cols={mycols}
                className="form-control form-control-lg"
            />
        </div>
    );
};

MyTextArea.propTypes = {
    mylabel: PropTypes.string.isRequired,
    myvalue: PropTypes.string.isRequired,
    myonChange: PropTypes.func.isRequired, // ✅ Fixed typo (from myOnChange)
    myplaceholder: PropTypes.string,
    myrows: PropTypes.number,
    mycols: PropTypes.number,
};

MyTextArea.defaultProps = {
    myplaceholder: "",
    myrows: 5,
    mycols: 25,
};

export default MyTextArea;
