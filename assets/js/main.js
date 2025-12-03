const toggle=document.getElementById('navToggle');
const menu=document.getElementById('navMenu');
if(toggle&&menu){toggle.addEventListener('click',function(){menu.classList.toggle('show')})}
const links=menu?menu.querySelectorAll('a'):[];
links.forEach(function(l){if(location.pathname.endsWith(l.getAttribute('href')))l.classList.add('active')});
document.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();alert('Terima kasih, data telah dikirim (demo).')})});

(function(){
  var root=document.documentElement;
  var current=localStorage.getItem('theme')||(
    window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'
  );
  root.setAttribute('data-theme',current);
  var head=document.head;
  var themeMeta=document.querySelector('meta[name="theme-color"]');
  if(!themeMeta){themeMeta=document.createElement('meta');themeMeta.setAttribute('name','theme-color');head.appendChild(themeMeta)}
  function applyThemeColor(){
    var bg=getComputedStyle(root).getPropertyValue('--bg').trim();
    themeMeta.setAttribute('content',bg||'#ffffff');
  }
  applyThemeColor();
  var navInner=document.querySelector('.nav-inner');
  if(navInner){
    var btn=document.createElement('button');
    btn.id='themeToggle';
    btn.className='theme-toggle';
    btn.type='button';
    btn.textContent=current==='dark'?'Mode Terang':'Mode Gelap';
    navInner.insertBefore(btn,menu);
    btn.addEventListener('click',function(){
      current=current==='dark'?'light':'dark';
      root.setAttribute('data-theme',current);
      localStorage.setItem('theme',current);
      btn.textContent=current==='dark'?'Mode Terang':'Mode Gelap';
      applyThemeColor();
    });
  }
})();