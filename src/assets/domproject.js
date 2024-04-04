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
        project_title_p.id='project_title_p'

        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function(event) {
            event.stopPropagation();
            let index = projectArrayRef.indexOf(project);
            removeProject(project);
            currentProject=projectArrayRef[0];
            loadRight(currentProject);
        });
        
        const card_div=document.createElement('div');
        card_div.id='project_card_div';

        card_div.appendChild(project_title_p);
        card_div.appendChild(removeButton);

        card.appendChild(card_div);
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
