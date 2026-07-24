const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const modal=document.querySelector('.modal');
document.querySelectorAll('[data-modal]').forEach(button=>button.addEventListener('click',()=>modal?.classList.add('open')));
document.querySelector('.modal-close')?.addEventListener('click',()=>modal?.classList.remove('open'));
modal?.addEventListener('click',event=>{if(event.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')modal?.classList.remove('open')});

const toast=document.querySelector('.toast');
function showToast(message){
  if(!toast)return;
  toast.textContent=message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2600);
}
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',event=>{
  event.preventDefault();
  showToast(button.dataset.demo||'Acción disponible en la versión final');
}));
document.querySelectorAll('.subscribe').forEach(form=>form.addEventListener('submit',event=>{
  event.preventDefault();
  const input=form.querySelector('input');
  if(!input?.value.trim()){showToast('Ingresa tu correo electrónico');return}
  showToast('Gracias por sumarte a esta conversación');
  form.reset();
}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
