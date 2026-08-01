const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menu.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>nav?.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
