//nav

window.addEventListener('scroll',() => (
   document.querySelector('nav').classList.toggle
   ('window-scroll', window.scrollY > 0)
))

//show/hide faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
      faq.classList.toggle('open');

   //   const icon = querySelector('.faq_icon svg');
   //   if(icon.className === 'plus'){
   //    icon.className = 'minus'
   //   } else{
   //    icon.className = 'plus';
   //   }
   })
})

// Burger

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
   menu.style.display = "flex";
   menuBtn.style.display = "none";
   closeBtn.style.display = "inline-block";
})

const closeNav = () =>{
   menu.style.display = "none";
   menuBtn.style.display = "inline-block";
   closeBtn.style.display = "none";   
}

closeBtn.addEventListener('click', closeNav)