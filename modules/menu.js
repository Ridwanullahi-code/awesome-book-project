export default class Menu{
    menu = document.querySelector('.hamburger');
    main = document.querySelector('main');
    menuItems = document.querySelector('.nav-items');
    // toggling function
    menuButton() {
        this.menu.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.menuItems.classList.toggle('show');
        })
    }
    backDrop() {
        this.main.addEventListener('click', () => {
            this.menuItems.classList.remove('show');
            this.menu.classList.remove('active');
        });
    }
}
