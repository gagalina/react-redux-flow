import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addJob, deleteJob,applyEdit, openPopup, closePopup } from '../../actions/JobActions';
//import '../styles/about-page.css';
import Popup from './Popup';
import Form from './Form';
import JobList from './JobList';
import Job from './Job'


class JobPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    

    this.closePopup = this.closePopup.bind(this);
   
  }



    closePopup() {
    this.setState({
      popup: false
    });  
  }


 
 
  render() {
    return (
      <div className="App">
         <h2 className="alt-header">About</h2>
        {this.props.jobs.popup &&
          <Popup currentIndex={this.props.jobs.currentIndex} jobs={this.props.jobs} applyEdit={this.props.applyEdit} closePopup={this.props.closePopup}/>
        }
        <Form addJob={this.props.addJob}/>
        <JobList jobs={this.props.jobs.jobs} deleteJob={this.props.deleteJob} openPopup={this.props.openPopup}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    jobs: state.jobs
    }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addJob:addJob, deleteJob:deleteJob, applyEdit:applyEdit, openPopup: openPopup, closePopup: closePopup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);