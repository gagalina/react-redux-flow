import React, { Component } from 'react';

class Job extends Component {
  
  render() {

    return (
      <div className="container">
        {this.props.job.title}
        {this.props.job.city} 
        <button type="button" onClick={() => this.props.deleteJob(this.props.index)}>Delete</button>
        <button type="button" onClick={()=> this.props.openPopup(this.props.index)}>Edit</button>
      </div>
    );
  }
}

export default Job;
