// let section = document.querySelector('section');
// let navlinks=document.querySelectorAll('header  nav a');

// window.scroll=()=>{
//     section.forEach((section)=>{
//         let top=window.scrollY;
//         let height=section.offsetHeight;
//         let offset=section.offsetTop-150;
//         let id=section.getAttribute('id');
        
//         if(top>=offset && top<offset+height){
//             navlinks.forEach((links)=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active');
//             })
//         }
//     })
// }

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const currentPos = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
        const href = navLink.getAttribute('href');
        if (href === `#${sectionId}`) {
          navLink.classList.add('active');
        }
      });
    }
  });

  let header=document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY>100);
});

