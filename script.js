'use strict';
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.dest-nav a').forEach(link => {if(link.getAttribute('href') === page) link.setAttribute('aria-current','page');});
const dialog = document.getElementById('photo-dialog');
if(dialog && typeof dialog.showModal === 'function'){
 document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click',()=>{
  const image=dialog.querySelector('img');image.src=button.dataset.photo;image.alt=button.dataset.alt||'';dialog.showModal();
 }));
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();}});
}
