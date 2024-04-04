export function staticLoad() {
    const cont = document.querySelector('#container');

    cont.innerHTML = `        
    <div id="left">
    <p>Taskify</p>
    <div id="projects">
        <form id="project_form">
            <input type="text" id="project_title" placeholder="Your Project" required>
            <button type="submit" id="add_project_btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>
        </form>
        <div id='project_list'>
        </div>
    </div>
</div>
<div id="right">
    <header id="header">
        <div id="project_header">

        </div>
    </header>
    <div id="content">
        
    </div>
</div>
`
}