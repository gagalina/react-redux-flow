import React, {Component} from 'react';

class Form extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      city: ''
    }
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleChangeTitle = this
      .handleChangeTitle
      .bind(this);
    this.handleChangeCity = this
      .handleChangeCity
      .bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleChangeCity(event) {
    this.setState({city: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addJob(this.state);
    this.setState({
      title: '',
      city: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Type here"
          value={this.state.title}
          onChange={this.handleChangeTitle}/>
        <input
          type="text"
          placeholder="Type here"
          value={this.state.city}
          onChange={this.handleChangeCity}/>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
