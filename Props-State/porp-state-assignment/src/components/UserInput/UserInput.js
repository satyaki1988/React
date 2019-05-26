import React from 'react';

const UserInput = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <input type="text" onChange={props.nameChange} value={props.name}/>
                </div>
            </div>
        </div>
    );
}

export default UserInput;