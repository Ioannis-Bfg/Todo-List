let projectArrayRef;
import { loadRight } from "./domtask";
import { setCurrentProject } from "..";

export function displayProjects(project_array, currentProject){
    projectArrayRef = project_array;
    const project_list=document.querySelector('#project_list')
    project_list.innerHTML=''
    for(let project of project_array){
        let card=document.createElement('button');
        card.classList.add('project-card');

        let project_title_p=document.createElement('p');
        let project_title=project['title'];
        project_title_p.textContent=project_title;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function(event) {
            event.stopPropagation();
            let index = projectArrayRef.indexOf(project);
            removeProject(project);
            currentProject=projectArrayRef[0];
            loadRight(currentProject);
        });

        card.appendChild(project_title_p);
        card.appendChild(removeButton);
        project_list.appendChild(card);
        
        card.addEventListener('click', function() {
            currentProject = project;
            setCurrentProject(currentProject); // Call the callback function to update currentProject outside this function
            loadRight(currentProject);
        });
    }
}

function removeProject(project) {
    let index = projectArrayRef.indexOf(project);
    if (index !== -1) {
        projectArrayRef.splice(index, 1);
        displayProjects(projectArrayRef);
    }
}
