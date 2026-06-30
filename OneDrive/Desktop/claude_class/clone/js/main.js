/* =====================================================
   맘앤그로우 Clone — main.js (교육용)
   실제 네이버 쇼핑 이미지/상품 사용
   ===================================================== */

/* ── 실제 상품 데이터 (네이버 쇼핑 API 기반) ── */
const PRODUCTS = [
  {
    id: 1,
    name: '넥쿨러 산리오 파스텔 얼음목걸이 넥쿨링 아이스넥밴드',
    cat: ['all', 'sanrio', 'kids'],
    badge: 'new',
    price: 15000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8949533/89495331951.jpg',
    catLabel: '육아용품'
  },
  {
    id: 2,
    name: '산리오 시나모롤 모기퇴치팔찌',
    cat: ['all', 'sanrio', 'kids'],
    badge: 'best',
    price: 20800,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8604803/86048038070.jpg',
    catLabel: '산리오'
  },
  {
    id: 3,
    name: '초등 래쉬가드 유아 아동 여아 퍼플 래쉬가드 수영복 세트',
    cat: ['all', 'kids'],
    badge: 'new',
    price: 53000,
    origin: 65000,
    image: 'https://shopping-phinf.pstatic.net/main_8609957/86099573720.jpg',
    catLabel: '육아용품'
  },
  {
    id: 4,
    name: '[오리온] 촉촉한 황치즈칩 16pc 320g 2박스',
    cat: ['all', 'food'],
    badge: null,
    price: 18000,
    origin: 22000,
    image: 'https://shopping-phinf.pstatic.net/main_9117892/91178928332.jpg',
    catLabel: '식품'
  },
  {
    id: 5,
    name: '포켓몬 연습장 노트 학용품 종합장 피카츄 포케몬',
    cat: ['all', 'pokemon', 'stationery'],
    badge: 'best',
    price: 2600,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8542578/85425786593.jpg',
    catLabel: '문구'
  },
  {
    id: 6,
    name: '산리오 휴대용 양치 칫솔 치약 컵세트 (시나모롤, 쿠로미)',
    cat: ['all', 'sanrio', 'life'],
    badge: 'new',
    price: 18000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8663547/86635470456.jpg',
    catLabel: '생활용품'
  },
  {
    id: 7,
    name: '산리오 마이멜로디 쿠로미 담요 블랑킷',
    cat: ['all', 'sanrio', 'interior'],
    badge: 'best',
    price: 36000,
    origin: 42000,
    image: 'https://shopping-phinf.pstatic.net/main_8640590/86405908856.jpg',
    catLabel: '인테리어'
  },
  {
    id: 8,
    name: '산리오 거울 & 브러시 세트',
    cat: ['all', 'sanrio', 'life'],
    badge: null,
    price: 17000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8638798/86387987353.jpg',
    catLabel: '생활용품'
  },
  {
    id: 9,
    name: '홍콩 밀크티잔 레트로 빈티지컵 블랙앤화이트머그',
    cat: ['all', 'life'],
    badge: 'new',
    price: 21000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_9064520/90645201342.jpg',
    catLabel: '생활용품'
  },
  {
    id: 10,
    name: '산리오 0.5mm 2색볼펜과샤프 올인원 필기도구',
    cat: ['all', 'sanrio', 'stationery'],
    badge: 'best',
    price: 14000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8636113/86361132156.jpg',
    catLabel: '문구'
  },
  {
    id: 11,
    name: '아크릴 투명 캐릭터 연필꽂이',
    cat: ['all', 'stationery'],
    badge: null,
    price: 7000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8628573/86285730186.jpg',
    catLabel: '문구'
  },
  {
    id: 12,
    name: '귀멸의 칼날 무한성편 스프링 노트 탄지로 제니츠',
    cat: ['all', 'anime', 'stationery'],
    badge: 'new',
    price: 12000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8996164/89961646746.jpg',
    catLabel: '애니메이션'
  },
  {
    id: 13,
    name: '스케이터 대형 바스 타월 수영장 샤워 수건 (쿠로미)',
    cat: ['all', 'sanrio', 'life'],
    badge: null,
    price: 30000,
    origin: 35000,
    image: 'https://shopping-phinf.pstatic.net/main_8947880/89478807446.jpg',
    catLabel: '생활용품'
  },
  {
    id: 14,
    name: '산리오 구글타이머 탁상시계 (포차코, 헬로키티, 쿠로미)',
    cat: ['all', 'sanrio', 'interior'],
    badge: 'best',
    price: 50000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8878605/88786056361.jpg',
    catLabel: '인테리어'
  },
  {
    id: 15,
    name: '귀멸의 칼날 무한성편 아크릴 무드등 렌코쿠',
    cat: ['all', 'anime', 'interior'],
    badge: 'new',
    price: 40000,
    origin: 48000,
    image: 'https://shopping-phinf.pstatic.net/main_8996209/89962093690.jpg',
    catLabel: '애니메이션'
  },
  {
    id: 16,
    name: '산리오 캐릭터 소품 케이스 투명파우치 (마이멜로디, 시나모롤)',
    cat: ['all', 'sanrio', 'fashion'],
    badge: null,
    price: 12000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8932391/89323910953.jpg',
    catLabel: '패션잡화'
  },
  {
    id: 17,
    name: '한정판 MY Melody 뽀글이 파우치',
    cat: ['all', 'sanrio', 'fashion'],
    badge: 'new',
    price: 34000,
    origin: 40000,
    image: 'https://shopping-phinf.pstatic.net/main_8966177/89661778596.jpg',
    catLabel: '패션잡화'
  },
  {
    id: 18,
    name: '브레인봇 트랄랄레로 상어 인형 키링 가방고리인형',
    cat: ['all', 'fashion'],
    badge: 'best',
    price: 6000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8952912/89529122061.jpg',
    catLabel: '패션잡화'
  },
  {
    id: 19,
    name: '산리오 장우산 시나모롤 디저트 이중프릴 캐릭터 초등 어린이 우산',
    cat: ['all', 'sanrio', 'fashion'],
    badge: 'new',
    price: 19000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8965878/89658782870.jpg',
    catLabel: '패션잡화'
  },
  {
    id: 20,
    name: '파이롯트 쥬스업 젤 잉크 볼펜 10색세트 0.4mm',
    cat: ['all', 'stationery', 'best'],
    badge: 'best',
    price: 25200,
    origin: 28000,
    image: 'https://shopping-phinf.pstatic.net/main_8542912/85429122808.jpg',
    catLabel: '문구'
  },
  {
    id: 21,
    name: '빼빼로 한정판 케데헌 한국스타일 6개 세트',
    cat: ['all', 'food'],
    badge: 'new',
    price: 13000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_9019741/90197418579.jpg',
    catLabel: '식품'
  },
  {
    id: 22,
    name: '포켓몬 18cm 젓가락 수저 세트 (케이스포함)',
    cat: ['all', 'pokemon', 'life'],
    badge: null,
    price: 23000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8633050/86330506240.jpg',
    catLabel: '포켓몬'
  },
  {
    id: 23,
    name: '알쏭달쏭 캐치티니핑3탄 팬던트 비밀열쇠일기장',
    cat: ['all', 'stationery'],
    badge: 'new',
    price: 9500,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8671709/86717096209.jpg',
    catLabel: '문구'
  },
  {
    id: 24,
    name: 'KC인증 귀여운 캐릭터 LED 모기 퇴치 팔찌 (최소 5개)',
    cat: ['all', 'life', 'kids'],
    badge: null,
    price: 2000,
    origin: 0,
    image: 'https://shopping-phinf.pstatic.net/main_8937360/89373601909.jpg',
    catLabel: '생활용품'
  },
];

/* ── 장바구니 ── */
let cart = JSON.parse(localStorage.getItem('momngrow_cart') || '[]');

function saveCart() { localStorage.setItem('momngrow_cart', JSON.stringify(cart)); }
function cartTotal() { return cart.reduce((s, i) => s + i.price, 0); }
function updateCartCount() {
  const n = cart.length;
  document.getElementById('cartCount').textContent = n;
  document.getElementById('csCount').textContent = n;
}

/* ── 상품 렌더링 ── */
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!list.length) {
    grid.innerHTML = '<p style="color:#ccc;font-size:13px;padding:48px 0;text-align:center">해당 카테고리 상품이 없습니다 😅</p>';
    return;
  }
  grid.innerHTML = list.map(p => {
    const badgeHtml = p.badge
      ? `<span class="prod-badge prod-badge--${p.badge}">${p.badge === 'new' ? 'NEW' : 'BEST'}</span>` : '';
    const isSale = p.origin > 0;
    const originHtml = isSale ? `<span class="prod-origin">₩${p.origin.toLocaleString()}</span>` : '';
    const priceClass = isSale ? 'prod-price prod-price--sale' : 'prod-price';
    return `
      <div class="prod-card" data-id="${p.id}">
        <div class="prod-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy"
               onerror="this.style.display='none';this.parentElement.style.background='#fff0f5';" />
          ${badgeHtml}
          <button class="prod-cart-btn" data-id="${p.id}">🛍️ 장바구니 담기</button>
        </div>
        <div class="prod-info">
          <p class="prod-cat">${p.catLabel}</p>
          <p class="prod-name">${p.name}</p>
          <div class="prod-price-row">
            ${originHtml}
            <span class="${priceClass}">₩${p.price.toLocaleString()}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.prod-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const product = PRODUCTS.find(p => p.id === +btn.dataset.id);
      if (product) addToCart(product);
    });
  });
}

function addToCart(product) {
  cart.push({ ...product });
  saveCart();
  updateCartCount();
  renderCartSidebar();
  showToast(`🎀 "${product.name.slice(0, 18)}..." 담겼어요!`);
}

/* ── 장바구니 사이드바 ── */
function renderCartSidebar() {
  const body = document.getElementById('csBody');
  const foot = document.getElementById('csFoot');
  const total = document.getElementById('csTotal');
  if (!cart.length) {
    body.innerHTML = '<p class="cs-empty">장바구니가 비어있습니다 🧺</p>';
    foot.style.display = 'none';
    return;
  }
  body.innerHTML = cart.map((item, idx) => `
    <div class="cs-item">
      <img class="cs-item-img" src="${item.image}" alt="${item.name}"
           onerror="this.style.background='#fafafa';this.style.display='block';" />
      <div class="cs-item-info">
        <p class="cs-item-name">${item.name.slice(0, 30)}${item.name.length > 30 ? '...' : ''}</p>
        <p class="cs-item-price">₩${item.price.toLocaleString()}</p>
      </div>
      <button class="cs-item-del" data-idx="${idx}">✕</button>
    </div>`).join('');
  foot.style.display = 'block';
  total.textContent = '₩' + cartTotal().toLocaleString();

  body.querySelectorAll('.cs-item-del').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(+btn.dataset.idx, 1);
      saveCart(); updateCartCount(); renderCartSidebar();
    });
  });
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('dim').classList.add('open');
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('dim').classList.remove('open');
}

/* ── 토스트 ── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ── 공지바 ── */
function initNotice() {
  const items = document.querySelectorAll('.notice-item');
  let cur = 0;
  function show(n) {
    items[cur].classList.remove('active');
    cur = (n + items.length) % items.length;
    items[cur].classList.add('active');
  }
  document.getElementById('noticePrev').addEventListener('click', () => show(cur - 1));
  document.getElementById('noticeNext').addEventListener('click', () => show(cur + 1));
  setInterval(() => show(cur + 1), 3800);
}

/* ── 히어로 슬라이더 ── */
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hdot');
  let cur = 0, timer;
  function go(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }
  function autoPlay() { timer = setInterval(() => go(cur + 1), 4500); }
  function stopPlay() { clearInterval(timer); }

  document.getElementById('heroPrev').addEventListener('click', () => { stopPlay(); go(cur - 1); autoPlay(); });
  document.getElementById('heroNext').addEventListener('click', () => { stopPlay(); go(cur + 1); autoPlay(); });
  dots.forEach(d => d.addEventListener('click', () => { stopPlay(); go(+d.dataset.i); autoPlay(); }));
  autoPlay();
}

/* ── 카테고리 ── */
function initCategory() {
  const items = document.querySelectorAll('.cat-item');
  const title = document.getElementById('productsTitle');
  const catLabels = {
    all: '✨ 신상품', best: '🏆 베스트', sanrio: '🎀 산리오',
    pokemon: '⚡ 포켓몬', anime: '🗡️ 애니메이션', stationery: '✏️ 문구',
    fashion: '👜 패션잡화', food: '🍪 식품', life: '🛁 생활용품',
    interior: '🏠 인테리어', kids: '👶 육아용품'
  };
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const cat = item.dataset.cat;
      const filtered = PRODUCTS.filter(p => p.cat.includes(cat));
      title.textContent = catLabels[cat] || cat;
      renderProducts(filtered);
      document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── 검색 ── */
function initSearch() {
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  document.getElementById('searchBtn').addEventListener('click', () => {
    bar.classList.add('open');
    input.focus();
  });
  document.getElementById('searchClose').addEventListener('click', () => bar.classList.remove('open'));
  document.getElementById('searchSubmit').addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

  function doSearch() {
    const q = input.value.trim();
    if (!q) return;
    const result = PRODUCTS.filter(p => p.name.includes(q) || p.catLabel.includes(q));
    document.getElementById('productsTitle').textContent = `🔍 "${q}" 검색 결과 (${result.length}개)`;
    renderProducts(result);
    bar.classList.remove('open');
    input.value = '';
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ── 헤더 스크롤 ── */
function initHeaderScroll() {
  const h = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    h.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(224,86,154,.12)' : '';
  }, { passive: true });
}

/* ── 결제 UI (4단계) ── */
function initCheckout() {
  function goStep(n) {
    // 패널 전환
    document.querySelectorAll('.checkout-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('checkoutStep' + n).classList.add('active');
    // 단계 표시 업데이트
    document.querySelectorAll('.step').forEach(s => {
      const i = +s.dataset.step;
      s.classList.toggle('active', i === n);
      s.classList.toggle('done', i < n);
    });
    document.querySelectorAll('.step-line').forEach((l, i) => {
      l.classList.toggle('done', i < n - 1);
    });
  }

  function fillCheckoutItems() {
    const wrap = document.getElementById('checkoutItems');
    if (!cart.length) { wrap.innerHTML = '<p style="padding:16px;text-align:center;color:#ccc;font-size:12px">장바구니가 비어있습니다</p>'; return; }
    wrap.innerHTML = cart.map(item => `
      <div class="co-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.style.background='#fafafa'" />
        <span class="co-item-name">${item.name.slice(0, 28)}${item.name.length > 28 ? '…' : ''}</span>
        <span class="co-item-price">₩${item.price.toLocaleString()}</span>
      </div>`).join('');

    const goods = cartTotal();
    const ship  = goods >= 20000 ? 0 : 3000;
    const total = goods + ship;
    document.getElementById('summaryGoods').textContent = '₩' + goods.toLocaleString();
    document.getElementById('summaryShip').textContent  = ship === 0 ? '무료' : '₩' + ship.toLocaleString();
    document.getElementById('summaryTotal').textContent = '₩' + total.toLocaleString();
    document.getElementById('finalTotal').textContent   = '₩' + total.toLocaleString();
  }

  // 장바구니 "결제하기" 버튼 클릭 → 결제 모달 열기
  document.querySelector('.cs-checkout').addEventListener('click', e => {
    e.preventDefault();
    if (!cart.length) { showToast('장바구니가 비어있습니다 🧺'); return; }
    closeCart();
    fillCheckoutItems();
    goStep(1);
    openModal('checkoutModal');
  });

  // STEP 1 → 2
  document.getElementById('toStep2').addEventListener('click', () => goStep(2));

  // STEP 2 배송지 폼 제출 → 3
  document.getElementById('shippingForm').addEventListener('submit', e => {
    e.preventDefault();
    goStep(3);
  });

  // STEP 3 결제하기
  document.getElementById('doPay').addEventListener('click', () => {
    if (!document.getElementById('agreeCheck').checked) {
      showToast('결제 동의에 체크해주세요 ☑️'); return;
    }
    const method = document.querySelector('input[name="payMethod"]:checked');
    const methodNames = { card:'신용/체크카드', kakao:'카카오페이', naver:'네이버페이', bank:'무통장 입금' };
    const name   = document.getElementById('shipName').value;
    const phone  = document.getElementById('shipPhone').value;
    const addr   = document.getElementById('shipAddr').value;
    const detail = document.getElementById('shipAddrDetail').value;
    const goods  = cartTotal();
    const ship   = goods >= 20000 ? 0 : 3000;

    // 주문번호 생성
    const orderNo = 'MNG-' + Date.now().toString().slice(-8);
    document.getElementById('orderNo').textContent = orderNo;
    document.getElementById('doneInfo').innerHTML = `
      <div>받는 분: <strong>${name}</strong></div>
      <div>연락처: ${phone}</div>
      <div>배송지: ${addr} ${detail}</div>
      <div>결제수단: ${methodNames[method.value]}</div>
      <div>결제금액: <strong style="color:#e0569a">₩${(goods + ship).toLocaleString()}</strong></div>`;

    // 장바구니 비우기
    cart = [];
    saveCart();
    updateCartCount();
    renderCartSidebar();
    goStep(4);
  });

  // 이전 버튼들
  document.getElementById('backStep1').addEventListener('click', () => goStep(1));
  document.getElementById('backStep2').addEventListener('click', () => goStep(2));

  // 완료 → 모달 닫기
  document.getElementById('doneClose').addEventListener('click', () => closeModal('checkoutModal'));
}

/* ── 모달 ── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  // 열기 버튼
  document.getElementById('loginBtn').addEventListener('click', e => { e.preventDefault(); openModal('loginModal'); });
  document.getElementById('registerBtn').addEventListener('click', e => { e.preventDefault(); openModal('registerModal'); });
  document.getElementById('orderBtn').addEventListener('click', e => { e.preventDefault(); openModal('orderModal'); });

  // 닫기 버튼 (✕)
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.modal));
  });

  // 오버레이 바깥 클릭 시 닫기
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // ESC 키로 닫기
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    }
  });

  // 모달 간 전환
  document.getElementById('goRegister').addEventListener('click', e => {
    e.preventDefault(); closeModal('loginModal'); openModal('registerModal');
  });
  document.getElementById('goLogin').addEventListener('click', e => {
    e.preventDefault(); closeModal('registerModal'); openModal('loginModal');
  });

  // 로그인 폼 제출
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    closeModal('loginModal');
    showToast('🎀 로그인되었습니다! (데모)');
  });

  // 회원가입 폼 제출
  document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input[type="password"]');
    if (inputs[0].value !== inputs[1].value) {
      inputs[1].classList.add('error');
      inputs[1].placeholder = '비밀번호가 일치하지 않습니다';
      return;
    }
    inputs[1].classList.remove('error');
    closeModal('registerModal');
    showToast('✅ 회원가입이 완료되었습니다! (데모)');
  });

  // 주문조회 폼 제출
  document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('orderResult').style.display = 'block';
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  updateCartCount();
  renderCartSidebar();
  initNotice();
  initHero();
  initCategory();
  initSearch();
  initHeaderScroll();

  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('dim').addEventListener('click', closeCart);

  initModals();
  initCheckout();
});
