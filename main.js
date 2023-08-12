
/*Login POPUP*/

const modalLogin = document.querySelector('.modal-login');

const openBtn = document.querySelector('.login-btn');

const closeBtn = document.querySelector('.close-modal');


openBtn.addEventListener('click', openLogin);

closeBtn.addEventListener('click', closeLogin);

window.addEventListener('click', outsideClick);


function openLogin(){
    modalLogin.style.display = 'block';
}


function closeLogin(){
    modalLogin.style.display = 'none';
}

function outsideClick(e){          //event
    if(e.target == modalLogin)
    {
        closeLogin();
    } 
}


/* TV Channel POPUP */

const modalTv = document.querySelector('.modal-tv');

const tvOpen = document.querySelector('.open-tv');

const tvClose = document.querySelector('.close-tv');


tvOpen.addEventListener('click', openTv);

tvClose.addEventListener('click', closeTv);

window.addEventListener('click', outsideClickTv);


function openTv(){
    modalTv.style.display = 'block';
}

function closeTv(){
    modalTv.style.display = 'none';
}

function outsideClickTv(e){         //event
    if(e.target == modalTv)
    {
        closeTv();
    } 
}
