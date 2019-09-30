import Input from "../Utils/input";
import DropDown from "../Utils/dropDown";
import React from 'react';

class NewExpense extends React.Component{


    constructor(props){
        super(props);
        this.state = {product : "", owner : this.props.users[0], price : null};
    }



    changeOwner = (selected) => {
        this.setState({ owner : selected , product: this.state.product, price : this.state.price});
    }

    changePrice = (selected) => {
        this.setState({ owner : this.state.owner , product: this.state.product, price : selected});
    }

    changeProduct = (selected) =>{
        this.setState({owner : this.state.owner , product: selected, price : this.state.price})
    }

    onClick = () =>{
        if(this.state.product !== "" && this.state.price ){
            this.props.onAdd( this.state.owner,this.state.product, this.state.price)
        }
    }



    render() {
        return <div className={"form"}>
            <Input name={"formProduct"} type={"text"} placeholder={"product"} handleChange={this.changeProduct}/>
            <DropDown users={this.props.users} class={"formSelect"} handleChange={this.changeOwner} dropDownClass={"dropDownForm"}/>
            <Input name={"formPrice"} type={"integer"} placeholder={"€€€"} handleChange={this.changePrice} />
            <button className={"formButton"} onClick={this.onClick}>+</button>
        </div>
    }
}

export  default NewExpense