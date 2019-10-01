import React from "react";
import Input from "../Utils/input";

class AddUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {input : ""};
    }

    onChangeInput = (value) => {
        this.setState({input : value})
    }


    onClick = (event)=>{
        if(this.state.input !== '' && !this.props.users.includes(this.state.input)) {
            this.props.handleClick(this.state.input);
            alert("User " + this.state.input + " added");
        }
    }

    render() {
        const {name} = this.props;
        const input = (<Input name={"addUserInput"} type={"text"} placeholder={"user"} handleChange={this.onChangeInput}/>);
        const button = (<button className={"addButton"} disabled={!(this.state.input !== '' && !this.props.users.includes(this.state.input))} onClick={this.onClick}>+</button>);

        return (<div className={name}>
            {input}
            {button}
        </div>);
    }
}


export default AddUser
