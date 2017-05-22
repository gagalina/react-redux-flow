import { combineReducers } from 'redux';
import jobs from './jobReducer';

const rootReducer = combineReducers({
    jobs: jobs
})

export default rootReducer;