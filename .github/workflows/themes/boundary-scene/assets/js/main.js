// 深色模式持久化
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
if(localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)){
  html.classList.add('dark');
}
if(toggleBtn){
  toggleBtn.addEventListener('click',()=>{
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  })
}

//移动端菜单
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(mobileBtn && mobileMenu){
  mobileBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden');
  })
  mobileMenu.querySelectorAll('a').forEach(link=>{
    link.onclick = ()=> mobileMenu.classList.add('hidden');
  })
}
