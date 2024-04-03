import _, { add } from 'lodash';
import { createTask } from './assets/factory';
import { createProject } from './assets/factory';
import { addTask } from './assets/factory';
import { removeTask } from './assets/factory';
import './styles/style.css';
import { staticLoad } from './assets/staticLoad';
import './styles/reset.css';


// let project1=createProject('fgwegf','ewag');

// let task1=createTask('Task1','idk','2/3/4','high');

// addTask(project1,task1);

// console.log(project1);

staticLoad();