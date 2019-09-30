import React from 'react';
import DropDown from "../Utils/dropDown";

class FilterZone extends React.Component{
    render() {
        return (
            <div className={"dropDown"}>
                Filter :
                <DropDown users={this.props.users} handleChange={this.props.handleChange} filter={this.props.filter} class={this.props.class} addAll={true}/>
            </div>)
    }
}






export default FilterZone
