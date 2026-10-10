const cards=document.querySelectorAll('.card');
cards.forEach(c=>c.addEventListener('click',()=>{
  cards.forEach(x=>x.classList.remove('selected'));
  c.classList.add('selected');
}));