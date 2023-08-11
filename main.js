const accordion = document.querySelectorAll('.section');
let accordionCopy = [...accordion];

function handleOtherSections(index){
    accordionCopy.splice(index, 1);
    
    // for(let i = 0; i < accordionCopy.length; i++){
    //     const elTitle = accordionCopy[i].querySelector('.title');
    //     const elPanel = accordionCopy[i].querySelector('.panel');
    //     elTitle.classList.remove('active');
    //     elPanel.style.maxHeight = null;
    // }

    accordionCopy.forEach((acc) => {
        const elTitle = acc.querySelector('.title');
        const elPanel = acc.querySelector('.panel');
        elTitle.classList.remove('active');
        elPanel.style.maxHeight = null;
    })

    accordionCopy = [...accordion];
}

function handleClick(event, i){
    const titleEl = event.currentTarget.querySelector('.title');
    const panel = event.currentTarget.querySelector('.panel');
    titleEl.classList.toggle('active');
    if(panel.style.maxHeight){
                panel.style.maxHeight = null;
    } else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    handleOtherSections(i);
}

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', (e) => handleClick(e, i));
}

