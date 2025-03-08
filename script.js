let accordion=document.querySelector('.accordion')
let accordionitem =document.querySelectorAll('.accordion__item')

// при клике на accordion
accordion.addEventListener('click',(event)=>{
    
    let elementTarget =event.target
    console.log(elementTarget)
    for(let item of accordionitem){
        
item.classList.remove('active')
    }
    // медот closest  возращает родителя с указанным
elementTarget.closest('.accordion__item').classList.add('active')
})

 