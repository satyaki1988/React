import React from 'react';

const Person = (props) => {
    // This is not possible, because we are not able to change the value of properties ---- props.name = 'Suman';
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h5>Hello my name is {props.name}, I am a {props.designation} at {props.organization}</h5>
                </div>
            </div>
        </div>
    );
}

export default Person;