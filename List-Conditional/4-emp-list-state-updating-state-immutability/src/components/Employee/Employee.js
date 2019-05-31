import React from 'react';

const Employee = (props) => {
    const random = Math.random();
    if (random > 0.7) {
        throw new Error('An error occur');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p onClick={props.onRemove}> My name is {props.name} and my role is {props.role}</p>
                    <input type="text" onChange={props.onNameChange} value={props.name}/>
                </div>
            </div>
        </div>
    );
}

export default Employee;