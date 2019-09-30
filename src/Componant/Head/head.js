import React from 'react';
import FilterZone from "./filterZone";
import AddUser from "./addUser";

function Head(props){
    const dropDown = (<FilterZone users={props.users} handleChange={props.handleChange} class={"custom-select"}/>)
    const title = (<div className="titleDiv"><Title title={props.title}/></div>);
    const addUser = (<AddUser name={"addUser"} handleClick={props.addUser} users={props.users}/>);
    return (<div className="head">
        {title}
        {dropDown}
        {addUser}
    </div>)
}


function Title(props){
    return (<h1 className="title">{props.title}</h1>)
}

export default Head
