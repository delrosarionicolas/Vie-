function scrollUp(pxScreen) {
    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        let scrollUp = document.getElementById('scroll-up') 
        
        if (scroll > pxScreen) {
            scrollUp.style.opacity = 0.8;
            scrollUp.style.transform = 'scale(1)';
        } else {
            scrollUp.style.opacity = 0;
            scrollUp.style.transform = 'scale(0)';
        }
    })
}

scrollUp(350);
