let navbarMobile = document.getElementById("navbar-mobile");
let navbarMobileButton = document.getElementById("navbar-mobile-button");

function navMobileMenuButton(){
    if (navbarMobile.style.display =='none') {
        navbarMobile.style.display = 'flex';
        navbarMobileButton.textContent = "X";
    }else{
        navbarMobile.style.display = 'none';
        navbarMobileButton.textContent = "+";
    }
}