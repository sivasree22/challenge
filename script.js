let menu=document.querySelector('#menu-bar');
let menu=document.querySelector('.nav-bar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrolly>60){
        document.querySelector('#scroll-top').classList.add('active');
    }
       
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
    function loader(){
        document.querySelector('.loader-container').classList.add(fade-out);

    }
    function fadeout(){
        setInterval(loader,3000);

    }
    window.onload=fadeout();
}