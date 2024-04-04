import _, { add } from 'lodash';
import { createTask } from './assets/factory';
import { createProject } from './assets/factory';
import { addTask } from './assets/factory';
import { removeTask } from './assets/factory';
import './styles/style.css';
import { staticLoad } from './assets/staticLoad';
import './styles/reset.css';
import { displayProjects } from './assets/domproject';
import { loadRight } from './assets/domtask';

//////////////////////////////////
const add_project_btn = document.querySelector('#add_project_button');
const add_task_btn = document.querySelector('#task_submit');
let p_form = document.querySelector('#project_form');
let t_form = document.querySelector('#task_form');
////////////////////////
staticLoad(); // IMPORTANT TO BE FIRST
let project_array = [];

// TESTS /////////////////////////////////////////////
let project1 = createProject('Project1');
project_array.push(project1);

 let task1=createTask('Task1','idk','2/3/4','high');
 addTask(project1,task1);
 let task2=createTask('Task2','idk','2/3/4','high');
 addTask(project1,task2);
let currentProject = project1;
displayProjects(project_array,currentProject,setCurrentProject);
////////////////////////////////////////////////

function handleFormSubmission(event) {
    event.preventDefault();
    var title = document.getElementById('project_title').value;
    let new_project = createProject(title);
    project_array.push(new_project);
    currentProject = new_project
    loadRight(currentProject);
    displayProjects(project_array);
    document.getElementById('project_form').reset();
}

loadRight(currentProject);

document.addEventListener('submit', function (event) {
    if (event.target.id === 'project_form') {
        handleFormSubmission(event);
    } else if (event.target.id === 'task_form') {
        handleTaskForm(event);
    }
});

function handleTaskForm(e) {
    e.preventDefault();
    let title = document.getElementById('task_title').value;
    let desc = document.getElementById('notes').value;
    let date = document.getElementById('due_date').value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    let new_task = createTask(title, desc, date, priority);

    console.log('outside',currentProject);
    addTask(currentProject, new_task);
    loadRight(currentProject);

    document.getElementById('task_form').reset();
    console.log(currentProject["taskList"]);
}

export function setCurrentProject(project) {
    currentProject = project;
}

// Listen for custom event dispatched by project buttons
// window.addEventListener('projectSelected', function(event) {
//     // Update currentProject with selected project's data
//     currentProject = event.detail;
//     console.log(currentProject);
//     loadRight(currentProject);
//     // Perform any other actions needed with the updated currentProject
//     // For example, reload content using loadRight(currentProject)
// });




