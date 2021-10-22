// MENU SHOW 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    var visibility = nav.style.display;
    console.log(visibility)
    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');     
        })
    }
}

showMenu("nav_toggle","nav_menu");


// REMOVE MENU
const navLink = document.querySelectorAll('.nav_link'),
 nav_menu = document.getElementById('nav_menu')

function linkAction(){
    nav_menu.style.display = 'none';
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// show mix list

const showList = function () {
    const showBtn = document.getElementById('mix_list');
    const musicList = document.querySelector('.mix_list1');
    const mixPlayerContent = document.querySelector('.mix_player_content');
    const player = document.querySelector('.player')
    showBtn.addEventListener('click', () => {
        musicList.classList.toggle('mix_list1_show')
                
    })
}

showList();

