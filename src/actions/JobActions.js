export function addJob(job) {
    return { type:'ADD_JOB', job: job}
}
export function deleteJob(index) {
    return { type: 'DELETE_JOB', index: index}
}
export function applyEdit(index, newJob) {
    return { type: 'APPLY_EDIT', index: index, newJob: newJob}
}

export function openPopup(index) {
    return { type: 'OPEN_POPUP', index: index}
}

export function closePopup() {
    return { type: 'CLOSE_POPUP' }
}
