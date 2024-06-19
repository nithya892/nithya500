let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}
const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
})
sr.reveal('.myimageabout',{ delay:350, origin:'left' })
sr.reveal('.About-text-content',{ delay:350, origin:'right' })
sr.reveal('.Home-image',{ delay:350,origin:'left' })
sr.reveal('.Home-text-content',{ delay:350, origin:'right' })
sr.reveal('.quality-content',{ delay:350, origin:'left' })
sr.reveal('.quality-image',{ delay:350, origin:'right' })
sr.reveal('.Gallery-image',{ delay:350,origin:'top' })
sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
sr.reveal('.menu-food-text',{ delay:350,origin:'bottom' })