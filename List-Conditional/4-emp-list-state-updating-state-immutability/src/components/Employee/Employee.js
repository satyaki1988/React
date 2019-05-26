import React from 'react';

const Employee = (props) => {
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