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

(function(){
  var targets=document.querySelectorAll('.section,.card,.feature,.news,.gallery img,.page-hero,.cta');
  targets.forEach(function(t){t.classList.add('reveal')});
  var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.08});
  targets.forEach(function(t){io.observe(t)});
})();

(function(){
  var gallery=document.querySelector('.gallery');
  if(!gallery)return;
  var candidates=['assets/media/videos/sekolah.mp4','assets/media/videos/video.mp4'];
  function tryAppend(i){if(i>=candidates.length)return;fetch(candidates[i]).then(function(r){if(r.ok){var v=document.createElement('video');v.src=candidates[i];v.controls=true;v.style.borderRadius='12px';v.style.width='100%';v.style.height='220px';v.style.objectFit='cover';gallery.appendChild(v)}else{tryAppend(i+1)}}).catch(function(){tryAppend(i+1)})}
  tryAppend(0);
})();
