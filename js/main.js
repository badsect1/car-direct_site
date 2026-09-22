/* ==========================================================================
   Car-Direct.kr - Core Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById('mobileToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggleBtn && mobileNavDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
      const isOpen = mobileNavDrawer.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Consultation Form Handling & Simulation Modal
  const counselForms = document.querySelectorAll('.counsel-form');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  counselForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const agreeCheck = form.querySelector('[name="agree"]');

      if (nameInput && !nameInput.value.trim()) {
        alert('성함을 입력해 주세요.');
        nameInput.focus();
        return;
      }

      if (phoneInput && !phoneInput.value.trim()) {
        alert('연락처를 입력해 주세요.');
        phoneInput.focus();
        return;
      }

      if (agreeCheck && !agreeCheck.checked) {
        alert('개인정보 수집 및 이용 동의에 체크해 주세요.');
        agreeCheck.focus();
        return;
      }

      // Show success modal
      if (successModal) {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        alert('무료 상담 신청이 정상적으로 완료되었습니다. 전문 상담원이 빠르게 연락드리겠습니다.');
      }

      form.reset();
    });
  });

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const parentItem = q.closest('.faq-item');
      if (parentItem) {
        const isOpen = parentItem.classList.contains('open');
        
        // Close all others
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('open');
        });

        // Toggle current
        if (!isOpen) {
          parentItem.classList.add('open');
        }
      }
    });
  });

  // 4. Phone input formatting auto-dash
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^0-9]/g, '');
      if (val.length > 3 && val.length <= 7) {
        val = val.substring(0, 3) + '-' + val.substring(3);
      } else if (val.length > 7) {
        val = val.substring(0, 3) + '-' + val.substring(3, 7) + '-' + val.substring(7, 11);
      }
      e.target.value = val;
    });
  });

  // 5. Chips selection interaction (Single & Multi select)
  const chipContainers = document.querySelectorAll('.chips-container');
  chipContainers.forEach(container => {
    const singleChips = container.querySelectorAll('.chip-select-btn[data-value]');
    singleChips.forEach(btn => {
      btn.addEventListener('click', () => {
        singleChips.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const multiChips = container.querySelectorAll('.chip-select-btn[data-check]');
    multiChips.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
      });
    });
  });

  // 6. Local file:// protocol smooth link resolution
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('a[href^="/posts/"]').forEach(a => {
      a.setAttribute('href', 'posts/index.html');
    });
    document.querySelectorAll('a[href="/"]').forEach(a => {
      a.setAttribute('href', 'index.html');
    });
    document.querySelectorAll('a[href="/counsel.html"]').forEach(a => {
      a.setAttribute('href', 'counsel.html');
    });
    document.querySelectorAll('a[href="/coverage.html"]').forEach(a => {
      a.setAttribute('href', 'coverage.html');
    });
  }
});
