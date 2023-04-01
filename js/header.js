let headerTopik = document.querySelector('.header__topik');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.onclick = ()=>{

    if (menu.classList.contains('menu_collapsed')){
        menu.classList.add('menu_collapsed-closing');   
        menu.onanimationend = (e)=>{
            e.preventDefault();
            menu.classList.remove('menu_collapsed'); 
            menu.classList.remove('menu_collapsed-closing');
            headerTopik.classList.remove('header__topik_collapsed');
        }
    }
    else{
        headerTopik.classList.add('header__topik_collapsed');
        menu.classList.add('menu_collapsed-opening');
        menu.classList.add('menu_collapsed');
        menu.onanimationend  = (e)=>{
            e.preventDefault();
            menu.classList.remove('menu_collapsed-opening');
        }
    }



}



