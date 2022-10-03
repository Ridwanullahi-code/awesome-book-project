// Method to switch between sections
export default class Switch {
    navLinks = () => {
    // Switching Through Sections
      const allSections = document.querySelectorAll('.sections');
      const listCont = document.querySelector('.nav-items');
      listCont.addEventListener('click', (e) => {
        e.preventDefault();
        const { id } = e.target.dataset;
        if (id) {
        // Removing the active section
          allSections.forEach((section) => {
            section.classList.remove('activesec');
          });
          //  Adding the active section
          const targetedSec = document.getElementById(id);
          targetedSec.classList.add('activesec');
        }
      });
    }
}
