import React from 'react';
import './App.css';
import List from './Component/Body/list';
import Head from "./Component/Head/head";
import Footer from "./Component/Footer/footer";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {filter: "All", rows: props.rows, users: props.users};
        const rows = localStorage.getItem('rows');
        const users = localStorage.getItem('users');
        if (rows !== null) {
          this.state.rows = JSON.parse(rows);
        }
        if (users !== null) {
          this.state.users = JSON.parse(users);
        }

    }


    handleChange = (selected) => {
        this.setState({
            filter: selected,
            rows: this.state.rows,
            users: this.state.users
        });
    }

    addRow = (owner, name, price) => {
        this.state.rows.push({"owner": owner, "name": name, "price": parseFloat(price)})
        this.setState({filter: this.state.filter, rows: this.state.rows, users: this.state.users});
        localStorage.setItem('rows', JSON.stringify(this.state.rows))
    }

    addUser = (name) => {
        this.state.users.push(name);
        this.setState({filter: this.state.filter, rows: this.state.rows, users: this.state.users});
        localStorage.setItem('users', JSON.stringify(this.state.users))
    }


    render() {
        const filteredRows = this.state.rows.filter(e => (e.owner === this.state.filter || this.state.filter === "All"));
        const head = (<Head filter={this.state.filter} users={this.state.users} title={this.props.title}
                            handleChange={this.handleChange} addUser={this.addUser}/>);
        const list = (<List rows={filteredRows}/>);
        const footer = (<Footer onAdd={this.addRow} rows={filteredRows} users={this.state.users}/>);
        return (<div className="app">{head}{list}{footer}</div>);
    }
}

export default App;
