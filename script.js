document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.site-header').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const email='swifttravelandtoursafg@gmail.com'; // Replace with the official Chatak Safar email.
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const destination=document.getElementById('destination').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('Chatak Safar Travel Inquiry');
  const body=encodeURIComponent(`Name: ${name}\nPhone/WhatsApp: ${phone}\nDestination: ${destination}\n\nMessage:\n${message}`);
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});
