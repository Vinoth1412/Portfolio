const menuIcon=document.getElementById('menu-icon');
const navbar=document.getElementById('navbar');
const header=document.querySelector('.site-header');
const navLinks=navbar.querySelectorAll('a');
const sections=document.querySelectorAll('section[id]');

menuIcon.addEventListener('click',()=>{
  const open=navbar.classList.toggle('active');
  menuIcon.setAttribute('aria-expanded',String(open));
});
navLinks.forEach(a=>a.addEventListener('click',()=>{
  navbar.classList.remove('active');
  menuIcon.setAttribute('aria-expanded','false');
}));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));
    }
  });
},{rootMargin:`-${header.offsetHeight+10}px 0px -62% 0px`,threshold:0});
sections.forEach(s=>observer.observe(s));

const form=document.getElementById('contact-form');
const status=document.getElementById('form-status');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const subject=document.getElementById('subject').value.trim();
  const message=document.getElementById('message').value.trim();
  if(!name||!email||!subject||!message){status.textContent='Please complete all fields.';return;}
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:vinothlee4444@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  status.textContent='Opening your email app…';
});