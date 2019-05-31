import React from 'react';

const Embeded = (props) => {
    return (
        <div>
            <embed src="https://www.nhlbi.nih.gov/files/docs/public/heart/new_dash.pdf" onClick={props.click}></embed>
        </div>
    );
}

export default Embeded;