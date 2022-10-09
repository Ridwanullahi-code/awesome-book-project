// Method to switch between sections
export default class Switch {
    navLinks = () => {
    // Switching Through Sections
      const allSections = document.querySelectorAll('.sections');
      const listCont = document.querySelector('.nav-items');
      listCont.addEventListener('click', (e) => {
        if (e.target.dataset) {
          allSections.forEach(section => {
            section.classList.remove();
          })
        }
        const target = document.getElementById(e.target.dataset);
        target.classList.add();
      });
    }
} 
