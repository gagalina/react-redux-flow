const initialState = {
    popup: false,
    jobs: [],
    currentIndex: ''
}


export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_JOB':
            let jobs = [...state.jobs, Object.assign({}, action.job)];

            return Object.assign({}, state, { jobs: jobs })
            
        case 'DELETE_JOB':
            let allJobs = [...state.jobs];
            allJobs.splice(action.index, 1);
            return Object.assign({}, state, { jobs: allJobs });

        case 'APPLY_EDIT':
            let currentJobs = [...state.jobs];
            currentJobs.splice(action.index, 1, action.newJob);
            return Object.assign({}, state, { jobs: currentJobs, popup: false });
        
        case 'OPEN_POPUP':
            return Object.assign({}, state, { popup: true, currentIndex: action.index });
            
        case 'CLOSE_POPUP':
            return Object.assign({}, state, { popup: false });    
            
        default:
            return state;    
    }
}


