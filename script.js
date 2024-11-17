window.addEventListener('scroll', function() {
    var  navbar=document.querySelector('.main nav');
    if(window.scrollY>50){
        navbar.classList.add('scrolled');
    }

    else{
        navbar.classList.remove('scrolled');
    }
});