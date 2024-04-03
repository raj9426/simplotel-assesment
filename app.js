const navSlide = () => {
    const burger = document.querySelector(".ham-burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelector(".nav-links li");


    burger.addEventListener('click', ()=> {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if(links.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}`;
            }
        });
    });
}

navSlide();


