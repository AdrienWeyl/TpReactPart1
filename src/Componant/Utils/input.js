import React from 'react';

class Input extends React.Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value);
    }

   render() {
       return(<input className={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={this.handleChange}/>);
   }

}

export default Input;

