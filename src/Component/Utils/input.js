import React from 'react';

class Input extends React.Component {

    handleChange = (event) => {
        if (event.target.validity.valid){
            this.props.handleChange(event.target.value);
        }
    };

   render() {
       return(<input className={this.props.name} pattern={this.props.pattern} value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} onChange={this.handleChange}/>);
   }

}

export default Input;

