import Input from "../Utils/input";
import DropDown from "../Utils/dropDown";
import React from 'react';

class NewExpense extends React.Component{


    constructor(props){
        super(props);
        this.state = {product : "", owner : this.props.users[0], price : null};
        this.priceValue = "";
        this.productValue = "";
    }



    changeOwner = (selected) => {
        this.setState({ owner : selected , product: this.state.product, price : this.state.price});
    };

    changePrice = (selected) => {
        this.setState({ owner : this.state.owner , product: this.state.product, price : selected});
        this.priceValue = selected;
    };

    changeProduct = (selected) =>{
        this.setState({owner : this.state.owner , product: selected, price : this.state.price});
        this.productValue = selected;
    };

    onClick = () =>{
        if(this.state.product !== "" && this.state.price ){
            this.props.onAdd( this.state.owner,this.state.product, this.state.price)
            this.setState({product :"", price : undefined})
            this.productValue = "";
            this.priceValue="";
            alert(this.state.owner +" just adds :"+this.state.product+ " witch cost: " + this.state.price  +"€ ");
        }
    };



    render() {
        return <div className={"form"}>
            <Input name={"formProduct"} value={this.productValue} type={"text"} placeholder={"product"} handleChange={this.changeProduct}/>
            <DropDown users={this.props.users} class={"formSelect"} handleChange={this.changeOwner} dropDownClass={"dropDownForm"}/>
            <Input name={"formPrice"} value={this.priceValue} type={"text"} pattern={"[0-9]*"} placeholder={"€€€"} handleChange={this.changePrice} />
            <button disabled={!(this.state.product !== "" && this.state.price)}   className={"formButton"} onClick={this.onClick}>+</button>
        </div>
    }
}

export  default NewExpense
