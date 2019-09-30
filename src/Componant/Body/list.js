import React from 'react';

class List extends React.Component{
    render() {
        const rows = (<Rows rows={this.props.rows}/>);
        return (<div className="mainDiv"><ul>{rows}</ul></div>);
    }
}

export default List

function Rows(props){
    return props.rows.map(row=>(<li className="list"><Product product={row}/></li>))
}

function Product(props){
    const nom = (<Name name={props.product.name}/>);
    const proprio = (<Owner owner={props.product.owner}/>);
    const prix = (<Price price={props.product.price}/>);
    return <div>{nom}{proprio}{prix}</div>;
}


function Name(props){
    return (<div className="name">{props.name}</div>)
}
function Owner(props){
    return (<div className="owner">Posted by {props.owner}</div>)
}
function Price(props){
    return (<div className="price">{props.price} €</div>)
}
