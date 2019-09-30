import NewExpense from "./newExpense";
import React from "react";

function Footer(props){
    const addRows =  (<NewExpense onAdd = {props.onAdd} users={props.users}/>)
    const sum = (<Sum rows={props.rows}/>)

    return (<div className={"footer"}>{addRows}{sum}</div>)
}


export default Footer




function Sum(props){
    const sum = props.rows.reduce((s,e) =>s + e.price, 0);
    return (
        <div className={"sumZone"}>
            <div className={"innerFooter"}>
                <div className={"sumText"}>Total Expenses :</div>
                <div className={"sum"}>{sum}€</div>
            </div>
        </div>)
}




