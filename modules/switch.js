// Method to switch between sections
export default class Switch {
    navLinks = () => {
    // Switching Through Sections
      const sections = document.querySelectorAll('.sections');
      const listCont = document.querySelector('.nav-items');
      listCont.addEventListener('click', (e) => {
        sections.forEach((section) => {
          if (section.classList.contains(e.target.id)) {
            section.classList.add('actives');
          } else {
            section.classList.remove('actives');
          }
        });
      });
    }
}
