let nav_anchorTag = document.getElementsByClassName('nav_anchorTag')[2];
let intro = document.getElementsByClassName('intro');

nav_anchorTag.addEventListener('click', () => {
  
    intro[1].classList.add("border_animation");
    const remove  = () => {
        intro[1].classList.remove("border_animation");
    }
    setTimeout(remove,5000);
    
    
})