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
        <legend>Priority:</legend>
        <input type="radio" id="low" name="priority" value="low" checked>
        <label for="low">Low</label>
        
        <input type="radio" id="medium" name="priority" value="medium">
        <label for="medium">Medium</label>
        
        <input type="radio" id="high" name="priority" value="high">
        <label for="high">High</label>
        
    </section>
    <label for="due_date">Due date:</label>
    <input type="date" name="due_date" id="due_date">
    <button type="submit" id="task_submit">
    Submit
    </button>
  </form>
    `

}