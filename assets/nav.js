const burgerBtn = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-mobile-final")[0];

burgerBtn.addEventListener('click', function(){
	nav.classList.toggle("mobile-toggle");
});


function resizeSubMenu(menuId) {
    // get the width of the browser window
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    //get the subMenu 
    const subMenu = document.getElementById(menuId);

    //set the submenu width equals to the window width
    subMenu.style.width = viewportWidth+'px';

    //get the LI element parent of the submenu
    const parentMenu = subMenu.parentElement;

    //set the submenu width equals to the absolute left position of the parent LI
    subMenu.style.left = -parentMenu.offsetLeft+'px';

    //get the UL child of the submenu
    const subMenuList = subMenu.children[0];

    //compute the absolute width of the parent LI width
    const parentMenuWidth = getComputedStyle(parentMenu).width.replace('px', '');

    //center the UL child related to the parent LI
    subMenuList.style.marginLeft = ((parentMenu.offsetLeft + (parentMenuWidth/2)) - (450 / 2))+'px'
}

function resizeSubMenus() {
    resizeSubMenu('submenu1');
    resizeSubMenu('submenu2');
}

if (document.readyState != 'loading'){
    resizeSubMenus();
    window.addEventListener('resize', resizeSubMenus);

  } else {
    document.addEventListener('DOMContentLoaded', resizeSubMenus);
    window.addEventListener('resize', resizeSubMenus);
  }