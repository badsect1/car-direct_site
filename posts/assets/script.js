// car-direct.kr 자동차보험 정보마당 인터랙션 스크립트

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ 아코디언 토글
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // 다른 아이템 닫기 (원할 경우 선택)
        // faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // 2. 허브 페이지 카테고리 필터링 & 실시간 검색
  const searchInput = document.getElementById('hubSearchInput');
  const catBtns = document.querySelectorAll('.cat-btn');
  const postCards = document.querySelectorAll('.post-card');
  const countEl = document.getElementById('visiblePostCount');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterPosts() {
    let visibleCount = 0;

    postCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchesCat = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = (!searchQuery || text.includes(searchQuery));

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countEl) {
      countEl.textContent = `${visibleCount}개의 칼럼`;
    }
  }

  if (catBtns.length > 0) {
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'all';
        filterPosts();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterPosts();
    });
  }
});
