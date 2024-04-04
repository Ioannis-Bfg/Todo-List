export function displayProjects(project_array){
    const project_list=document.querySelector('#project_list')
    project_list.innerHTML=''
    for(let project in project_array){
        let card=document.createElement('button');


        let project_title_p=document.createElement('p');
        let project_title=project_array[project]['title'];
        project_title_p.textContent=project_title;
        
        card.appendChild(project_title_p);
        project_list.appendChild(card);
    }
}

