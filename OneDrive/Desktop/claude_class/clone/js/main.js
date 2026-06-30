/* ════════════ 전체메뉴 패널 토글 ════════════ */
const menuBtn   = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuClose = document.getElementById('menuClose');

menuBtn?.addEventListener('click', () => menuPanel.classList.add('open'));
menuClose?.addEventListener('click', () => menuPanel.classList.remove('open'));
menuPanel?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menuPanel.classList.remove('open'))
);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') menuPanel.classList.remove('open');
});

/* ════════════ HERO 슬라이더 ════════════ */
(function heroSlider() {
  const slides = document.querySelectorAll('#heroSlider .slide');
  const dotsWrap = document.getElementById('heroDots');
  if (!slides.length) return;

  let idx = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `슬라이드 ${i + 1}`);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  function go(i) { idx = (i + slides.length) % slides.length; render(); restart(); }
  function next() { go(idx + 1); }
  function prev() { go(idx - 1); }
  function restart() { clearInterval(timer); timer = setInterval(next, 5000); }

  document.getElementById('heroNext')?.addEventListener('click', next);
  document.getElementById('heroPrev')?.addEventListener('click', prev);

  render();
  timer = setInterval(next, 5000);
})();

/* ════════════ 스크롤 진입 페이드인 옵저버 ════════════ */
/* 화면에 들어온 .fade-in 요소를 노출 (IntersectionObserver 미동작 환경에서도 안전) */
function checkReveal() {
  const trigger = window.innerHeight * 0.9;
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < trigger && r.bottom > 0) el.classList.add('visible');
  });
}

/* ════════════ 공간 둘러보기 카드 생성 ════════════ */
(function renderRooms() {
  const grid = document.getElementById('roomGrid');
  if (!grid) return;

  const HOST = 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQzNjcwMDU3MDEzNTQwMDc3Ng==/original/';
  const MISO = 'https://a0.muscache.com/im/pictures/miso/Hosting-1436700570135400776/original/';

  const rooms = [
    { name: '침실 1',     type: '퀸 침대 1개 · 요와 이불 · 화장대 · 에어컨', img: MISO + '43251ef5-0f06-4469-bd7d-e5559a7b45e2.jpeg' },
    { name: '침실 2',     type: '퀸 침대 1개 · 벽거울 · 미니 화장대 · 에어컨', img: HOST + '74ee62fd-d12c-4681-b182-3264588b5acf.jpeg' },
    { name: '거실 & 주방', type: '냉장고 · 인덕션 · 전자레인지 · 4인 식탁', img: MISO + '9e900f12-08e4-4157-b42a-3bf856688911.jpeg' },
    { name: '욕실',       type: '강한 수압 · 온수 · 어메니티 일체', img: MISO + 'fe8427cb-b18d-4189-954d-2e78be0bfe14.jpeg' },
    { name: '마당',       type: '브런치 & 휴식 공간 · 초록 정원', img: HOST + '75420401-a524-4548-b12a-46e27639f4ab.png' },
    { name: '한옥 감성 거실', type: '한국적인 소품과 따뜻한 분위기', img: HOST + '893fa69d-a1b9-4634-ac7c-0afdf320f3b9.jpeg' },
  ];

  grid.innerHTML = rooms.map(r => `
    <a class="room-card fade-in" href="https://www.airbnb.co.kr/rooms/1436700570135400776" target="_blank" rel="noopener">
      <div class="thumb"><img src="${r.img}?im_w=720" alt="${r.name}" /></div>
      <div class="body">
        <p class="name">${r.name}</p>
        <p class="type">${r.type}</p>
        <p class="go">→ 자세히 보기</p>
      </div>
    </a>
  `).join('');

  // 새로 만든 카드도 즉시 노출 검사
  checkReveal();
})();

/* 스크롤/리사이즈/로드 시 노출 검사 + 안전장치 */
window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('resize', checkReveal);
window.addEventListener('load', checkReveal);
checkReveal();
// IntersectionObserver/스크롤 이벤트가 동작하지 않는 환경 대비: 2초 후 전부 노출
setTimeout(() => document.querySelectorAll('.fade-in:not(.visible)').forEach(el => el.classList.add('visible')), 2000);
