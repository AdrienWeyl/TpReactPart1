import React from 'react';

class DropDown extends React.Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value);
    }

    render() {
        let all = "";
        if(this.props.addAll){
           all = (<option value="All">All</option>)
        }
        const users = this.props.users.map(user => (<Option user={user}/>))
        return (<select className={this.props.class} value={this.props.filter} onChange={this.handleChange}>
            {all}
            {users}
        </select>)
    }


}


function Option(props) {
    return (<option value={props.user}>{props.user}</option>)
}


export default DropDown;
