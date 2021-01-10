import React, { Component } from 'react';
import './App-header.css';


class AppHeader extends Component {

  state = { dateTime: new Date() }

  componentDidMount() {
    this.timerId = setInterval(
      ()=> this.setState({ dateTime: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { toDo, done } = this.props;

    return (
      <div>
      <h1 className="title-app">Список задач</h1>
      <div className="app-header d-flex">
          <h3> { `На данный момент ${this.state.dateTime.toLocaleString()} -----> ` } </h3>
          <h4>{toDo} ещё надо сделать, {done} сдалано</h4>
      </div>
    </div>
    );
  }
}


export default AppHeader;