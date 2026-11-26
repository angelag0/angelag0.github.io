mainMenu({
  sticky: true, // 是否置頂
  mega: false, // 是否megaMenu
  needLink: true, // 如果同時需要連結和下層功能時(手機版選單)
});
// -----  基本功能開關   ---------------------------------------------------

// 側邊選單
sideNav({
  target: '.sideNav',
  needLink: false, // 如果同時需要連結和下層功能時
  float: true, // 切換手機版由左側展開或是下方展開
  showDefault: true, // 是否預設顯示
});

// tabFunction({
// target: '.target1', // 執行目標，多組需要另外設定
// modeSwitch: false, // 自動切換，尺寸以上tab功能，尺寸以下手風琴功能
// openContent: false, // 展開所有內容，僅開啟模式切換時才可使用
// openIndex: 0, // 開啟第幾個
// windowWidth: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
// autoClose: true, // 自動關閉其他開啟內容
// openSwitch: true, // 是否可開合/切換
// });
// tab功能
tabFunction({
  target: '.tabFunction1',
  modeSwitch: true,
});
// mp2 新書展示
tabFunction({
  target: '.tabFunction2',
});
// mp2 最新消息
tabFunction({
  target: '.tabFunction3',
  modeSwitch: true, // 自動切換，尺寸以上tab功能，尺寸以下手風琴功能<br />
});

// 手風琴功能
accordionFunction({
  target: '.accordion',
  openContent: false, // 預設先展開所有內容
  openDefault: true, // 是否有預設開啟
  openIndex: 0, // 預設開啟第幾個
  autoClose: true, // 自動關閉其他開啟內容
  openSwitch: true, // 是否可開合/切換
});

window.addEventListener('DOMContentLoaded', () => {
  _toggleDropdown('header .subNavList .language > button', 'header .subNavList .language ul'); //語系開關切換
  _toggleDropdown('header .navList .language > button', 'header .navList .language ul'); //語系開關切換
  _toggleDropdown('#mobileMenu .language > button', '#mobileMenu .language ul'); //語系開關切換手機版
  _toggleDropdown('header .fontSize > button', 'header .fontSize ul'); //文字大小展開開關切換
  _toggleDropdown('.shareBox .share', '.shareBox .shareBoxList'); //分享開關切換
  _toggleDropdown('.contentSearchBtn', '.contentSearchBox', false); //LP 內容搜尋
  _toggleDropdown('.floatNav .floatSwitchBtn', '.floatNav .typeA'); //LP 內容

  // -----  MP2 多筆swiper輪播   ---------------------------------------------------
  const multipleSlider = document.querySelectorAll('.blockTypeG .multipleSlider');

  multipleSlider.forEach((item, index) => {
    let multipleSwiper = new Swiper(item.querySelector('.swiper'), {
      slideToClickedSlide: true,
      slidesPerView: 4,
      watchSlidesProgress: true,
      navigation: {
        nextEl: item.querySelector('.swiperNext'),
        prevEl: item.querySelector('.swiperPrev'),
        disabledClass: 'swiperArrow-disabled', //不可點選樣式
      },
      autoplay: {
        delay: 5000,
      },
      on: {
        init: function (swiper) {
          swiperA11Fn(swiper);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });

  // -----  MP 輪播   ---------------------------------------------------
  const mpSlider = new Swiper('.mpSlider .swiper', {
    // 切換點
    pagination: {
      el: '.mpSlider .swiperPagination',
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .swiperNext', //自行設定樣式
      prevEl: '.mpSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    autoplay: {
      delay: 5000,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });

  // -----  CP 輪播   ---------------------------------------------------
  const lightBoxSlider = new Swiper('.lightBoxSlider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    loop: false,
    // 切換箭頭
    navigation: {
      nextEl: '.lightBoxSlider .swiperNext', //自行設定樣式
      prevEl: '.lightBoxSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 5000,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });

  // -----  跑馬燈   ---------------------------------------------------
  const marqueeSlider = new Swiper('.marqueeSlider .swiper', {
    direction: 'vertical',
    // 切換箭頭
    navigation: {
      nextEl: '.marqueeSlider .swiperNext', //自行設定樣式
      prevEl: '.marqueeSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    freeMode: true,
    autoplay: {
      delay: 5000,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });

  // -----  cp_album   ---------------------------------------------------
  const sliderFor = new Swiper('.thumbsAlbum .sliderFor .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.sliderFor .swiperPagination',
      type: 'fraction',
    },
    autoplay: {
      delay: 5000,
    },
    lazy: true,
    thumbs: {
      swiper: {
        el: '.thumbsAlbum .navSlider .swiper',
        spaceBetween: 20,
        slideToClickedSlide: true,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        navigation: {
          nextEl: '.navSlider .swiperNext',
          prevEl: '.navSlider .swiperPrev',
          disabledClass: 'swiperArrow-disabled', //不可點選樣式
        },
        breakpoints: {
          100: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        },
      },
      autoScrollOffset: 1,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });
  swiperNavKeyDownFn(sliderFor.thumbs.swiper, sliderFor);

  // -----  mp/mp2 link 輪播   ---------------------------------------------------
  const linkSlider = new Swiper('.linkSlider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    loop: false,
    // 切換箭頭
    navigation: {
      nextEl: '.linkSlider .swiperNext', //自行設定樣式
      prevEl: '.linkSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 6000,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });
});

// -----  mp/activitySlider 輪播   ---------------------------------------------------
const activitySlider = new Swiper('.activitySlider .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  slideToClickedSlide: true,
  loop: false,
  // 切換點
  pagination: {
    el: '.activitySlider .swiperPagination',
  },
  // 切換箭頭
  navigation: {
    nextEl: '.activitySlider .swiperNext', //自行設定樣式
    prevEl: '.activitySlider .swiperPrev', //自行設定樣式
    disabledClass: 'swiperArrow-disabled', //不可點選樣式
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 5000,
  },
  on: {
    init: function (swiper) {
      swiperA11Fn(swiper);
    },
  },
});

// -----  mp/branchSlider 輪播   ---------------------------------------------------
const branchSlider = new Swiper('.branchSlider .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  slideToClickedSlide: true,
  loop: false,
  // 切換點
  pagination: {
    el: '.branchSlider .swiperPagination',
  },
  // 切換箭頭
  navigation: {
    nextEl: '.branchSlider .swiperNext', //自行設定樣式
    prevEl: '.branchSlider .swiperPrev', //自行設定樣式
    disabledClass: 'swiperArrow-disabled', //不可點選樣式
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 5000,
  },
  on: {
    init: function (swiper) {
      swiperA11Fn(swiper);
    },
  },
});

// 便民服務

document.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('serviceWidget');
  const toggleBtn = document.getElementById('serviceToggle');

  const isMobile = window.innerWidth <= 991;
  if (isMobile) {
    widget.classList.add('is-hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', '展開便民服務');
  }

  toggleBtn.addEventListener('click', () => {
    const isHidden = widget.classList.toggle('is-hidden');
    toggleBtn.setAttribute('aria-expanded', !isHidden);

    if (isHidden) {
      toggleBtn.setAttribute('aria-label', '展開便民服務');
    } else {
      toggleBtn.setAttribute('aria-label', '收合便民服務');
    }
  });

  widget.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !widget.classList.contains('is-hidden')) {
      widget.classList.add('is-hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', '展開便民服務');
      toggleBtn.focus();
    }
  });
});

document.body.addEventListener('mousedown', function () {
  document.body.classList.add('using-mouse');
});

document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Tab') {
    document.body.classList.remove('using-mouse');
  }
});

// ----- 收合按鈕  ---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 尋找所有具備收合功能的按鈕
  const toggleButtons = document.querySelectorAll('.actTableBox.has-collapse .toggle-btn');

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const wrapper = this.closest('.actTableBox.has-collapse');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const textSpan = this.querySelector('.btn-text');

      // 取得目標表格 (利用 id 對應)
      const targetTable = document.getElementById(this.getAttribute('aria-controls'));

      if (isExpanded) {
        // === 執行收合 ===
        this.setAttribute('aria-expanded', 'false');
        wrapper.classList.add('is-collapsed');
        if (textSpan) textSpan.textContent = '展開';

        // 將整個表格隱藏
        if (targetTable) targetTable.style.display = 'none';
      } else {
        // === 執行展開 ===
        this.setAttribute('aria-expanded', 'true');
        wrapper.classList.remove('is-collapsed');
        if (textSpan) textSpan.textContent = '收合';

        // 恢復表格顯示
        if (targetTable) targetTable.style.display = 'table';
      }
    });
  });
});

// ----- 客制select  ---------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const multiSelects = document.querySelectorAll('.customMultiSelect');

  multiSelects.forEach((select) => {
    const triggerBtn = select.querySelector('.selectTrigger');
    const dropdown = select.querySelector('.selectDropdown');
    const checkboxes = select.querySelectorAll('.customCheckbox');

    // 1. 切換下拉選單開關
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');

      // 開啟前先關閉畫面上其他的下拉選單 (確保體驗乾淨)
      closeAllDropdowns();

      if (!isOpen) {
        dropdown.classList.add('is-open');
        triggerBtn.classList.add('is-active');
        triggerBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // 2. 監聽 Checkbox 變更，更新按鈕文字
    checkboxes.forEach((cb) => {
      cb.addEventListener('change', () => {
        updateTriggerText(select);
      });
    });

    // 畫面載入時先執行一次文字更新
    updateTriggerText(select);
  });

  // 3. 點擊畫面其他地方自動關閉選單
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.customMultiSelect')) {
      closeAllDropdowns();
    }
  });

  // 關閉所有選單的共用函式
  function closeAllDropdowns() {
    document.querySelectorAll('.customMultiSelect').forEach((select) => {
      const triggerBtn = select.querySelector('.selectTrigger');
      const dropdown = select.querySelector('.selectDropdown');
      dropdown.classList.remove('is-open');
      triggerBtn.classList.remove('is-active');
      triggerBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // 更新按鈕顯示文字的邏輯
  function updateTriggerText(selectElement) {
    const checkedBoxes = Array.from(selectElement.querySelectorAll('.customCheckbox:checked'));
    const triggerText = selectElement.querySelector('.selectTriggerText');

    if (checkedBoxes.length === 0) {
      triggerText.textContent = '請選擇活動場次';
    } else if (checkedBoxes.length === 1) {
      // 若只選 1 個，直接顯示該選項的名稱
      const text = checkedBoxes[0].closest('.optionItem').querySelector('.optionText').textContent;
      triggerText.textContent = text;
    } else {
      // 若選多個，顯示總計數量
      triggerText.textContent = `已選擇 ${checkedBoxes.length} 個活動場次`;
    }
  }
});
