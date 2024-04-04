import { removeTask } from "./factory";

export function loadRight(project){
    const project_header=document.querySelector('#project_header');
    const content=document.querySelector('#content');

    project_header.textContent='';
    project_header.textContent=project["title"];

    content.innerHTML='';
    content.innerHTML=`
    <form id="task_form">
    <section>
        <input
        type="text"
        id="task_title"
        placeholder="New Task"
        required
      />
      <input type="text" id="notes" placeholder="Your Notes">
    </section>

    <section>
        
        <section id="prio_date">
          <label for="due_date">Due date:</label>
          <input type="date" name="due_date" id="due_date">
          <div id="priority">
            <legend>Priority:</legend>
            <input type="radio" id="low" name="priority" value="low" checked>
            <label for="low">Low</label>
            
            <input type="radio" id="medium" name="priority" value="medium">
            <label for="medium">Medium</label>
            
            <input type="radio" id="high" name="priority" value="high">
            <label for="high">High</label>
          </div>
          <button type="submit" id="task_submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>plus</title>
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
          </button>
        </section>
        

  </form>
  <div id="cards">

  </div>
    `

    const task_list = document.querySelector('#cards');
    const taskList = project["taskList"];
    
    for (let i = taskList.length - 1; i >= 0; i--) {
        const task = taskList[i];
    
        const card = document.createElement('div');
        card.classList.add('task_card');
        const card_text = document.createElement('p');
    
        const titlePara = document.createElement('p');
        titlePara.textContent = task.title;
    
        const descPara = document.createElement('p');
        descPara.textContent = task.desc;
    
        const datePara = document.createElement('p');
        datePara.textContent = task.dueDate;
    
        const priorityPara = document.createElement('p');
        priorityPara.textContent = task.priority;

        const check_button=document.createElement('button');
        check_button.textContent='delete';
        check_button.id=`${i}`;

        check_button.addEventListener('click', function() {
          const taskIndex = parseInt(this.id);
          removeTask(project, taskIndex);
          loadRight(project);
        });
    
        card_text.appendChild(check_button);
        card_text.appendChild(titlePara);
        card_text.appendChild(descPara);
        card_text.appendChild(datePara);
        card_text.appendChild(priorityPara);
    
        card.appendChild(card_text);
        task_list.appendChild(card);
    }
}