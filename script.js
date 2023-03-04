function bringLogin() {
    let form = document.getElementById('form');
    let top = document.getElementById('top');
    let loginDiv = document.getElementById('loginDiv');
    let navItem1 = document.getElementById('nav-item1');
    let navItem2 = document.getElementById('loginText');
    let back = document.getElementById('backBtn');

    form.style.display = 'none';
    top.style.display = 'none';
    loginDiv.style.display = 'flex';
    navItem1.style.display = 'none';
    navItem2.style.display = 'none';
    back.style.display = 'flex'
}

function bring2Norm() {
    let navItem1 = document.getElementById('nav-item1');
    let navItem2 = document.getElementById('loginText');
    let form = document.getElementById('form');
    let top = document.getElementById('top');
    let loginDiv = document.getElementById('loginDiv');
    let back = document.getElementById('backBtn');

    form.style.display = 'flex';
    top.style.display = 'flex';
    loginDiv.style.display = 'none';
    navItem1.style.display = 'flex';
    navItem2.style.display = 'flex';
    back.style.display = 'none';
}