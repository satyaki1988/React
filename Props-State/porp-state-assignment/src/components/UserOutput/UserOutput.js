import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p onClick={props.clickName}>Hi, {props.name}, your username is {props.userName} !!!</p>
                    <p onClick={props.clickRole}>{props.children}</p>
                </div>
            </div>
        </div>
    );
}

export default UserOutput;