import React from 'react';

const ValidationComponent = (props) => {
    let textCriteria = '';
    
    {
        let {textLength} = props;

        if (textLength > 0) {
            textCriteria = textLength < 5 ? 
            <p>Text too short</p> :
            textLength > 15 ? 
            <p>Text long enough</p> : null
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {textCriteria}
                </div>
            </div>
        </div>
    );
}

export default ValidationComponent;