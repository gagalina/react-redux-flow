import React, { Component } from 'react';
import Job from './Job';

class JobList extends Component {
  constructor(props, context) {
    super(props, context);
  }
    
  render() {
    console.log('inner', this.props)
    let jobs = this.props.jobs;
      return (
      <div>
              {jobs.map((item, id) => {
            return <Job deleteJob={this.props.deleteJob} key={id} index={id} job={item} openPopup={this.props.openPopup}/>
              })}
     </div>
    );
  }
}

export default JobList;
