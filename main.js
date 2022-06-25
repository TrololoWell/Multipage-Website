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