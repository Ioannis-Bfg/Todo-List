export function createTask(title,desc,dueDate,priority){
    return{
        title:title,
        desc:desc,
        dueDate:dueDate,
        priority:priority,
    };
}

export function createProject(title){
    return{
        title:title,
        taskList: []
    }
}

export function addTask(project, newTodo) {
    project.taskList.unshift(newTodo);
}

export function removeTask(project, index) {
    project.taskList.splice(index, 1);
}

// function editProject(project, newTitle, newDescription) {
//     project.title = newTitle;
//     project.description = newDescription;
// }
