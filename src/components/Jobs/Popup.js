import React, { Component } from 'react';

class Popup extends Component {
  constructor(props, context) {
    super(props, context);
    let currentTitle = '';
    let currentCity = '';

    this.props.jobs.jobs.map((job, index) => {
      if (this.props.currentIndex == index) {
        currentTitle = job.title;
        currentCity = job.city;
      }
    });
    this.state = {
      title: currentTitle,
      city: currentCity,

    }
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <p>Edit job</p>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitle} />
          <input type="text" placeholder="city" value={this.state.city} onChange={this.handleCity} />
          <button type="button" onClick={() => { this.props.applyEdit(this.props.currentIndex, this.state) }}>Apply</button>
          <button type="button" className = "button" onClick={this.props.closePopup}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default Popup;
