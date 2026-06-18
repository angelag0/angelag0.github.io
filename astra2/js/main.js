// 主選單
(function () {
  let sideMenu = document.querySelector('.sideMenu');
  let sideBtn = document.querySelectorAll('.sideBtn');
  sideBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      sideMenu.classList.toggle('active');
    });
  });
  document.body.addEventListener('click', (e) => {
    if (e.target.nodeName === 'MAIN') {
      sideMenu.classList.remove('active');
    }
  });

  const filterBtn = document.querySelector('.filterBox .filterTitle');
  const filterContent = document.querySelector('.filterBox .filterListBox');
  filterBtn?.addEventListener('click', () => filterContent.classList.toggle('active'));

  const matchBox = document.querySelectorAll('.matchBox');
  matchBox.forEach((box) => {
    const matchBtn = box.querySelector('.matchBtn');
    matchBtn.addEventListener('click', () => {
      matchBox.forEach((other) => other.classList.remove('active'));
      box.classList.toggle('active');
    });
  });

  window.addEventListener('resize', () => {
    matchBox.forEach((box) => box.classList.remove('active'));
    if (window.innerWidth < 991) {
      sideMenu.classList.remove('active');
    }
  });
})();

// textarea 高度限制 10行以上增加卷軸，以下增加高度
(function () {
  const setupAutoResize = (textarea) => {
    if (!textarea) return;

    const style = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(style.lineHeight);
    const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const maxHeight = lineHeight * 10 + padding; // 10 行 + 上下 padding

    const adjustHeight = () => {
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = maxHeight + 'px';
      } else {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    };

    textarea.addEventListener('input', adjustHeight);

    document.addEventListener('DOMContentLoaded', adjustHeight);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const allTextareas = document.querySelectorAll('.autoResizeHeight > *');
    allTextareas.forEach(setupAutoResize);
  });
})();

// input 寬度自動調整
(function () {
  const setupAutoResize = (inputElement) => {
    const widthTester = document.createElement('span');
    widthTester.classList.add('inputWidthTester');
    inputElement.insertAdjacentElement('beforebegin', widthTester);

    const adjustWidth = () => {
      widthTester.textContent = inputElement.value || inputElement.placeholder;
      const newWidth = widthTester.getBoundingClientRect().width;
      inputElement.style.width = `${newWidth + 2}px`;
    };

    adjustWidth();

    inputElement.addEventListener('input', adjustWidth);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const allAutoResizeInputs = document.querySelectorAll('.autoResizeInput input');
    allAutoResizeInputs.forEach(setupAutoResize);
  });
})();

// textarea 空白判斷
(function () {
  const allTextareas = document.querySelectorAll('.autoResizeHeight > *');
  const controlBoxSubmit = document.querySelector('.controlBox [type="submit"');
  const setupCheckContent = (content) => {
    const checkContent = () => {
      const hasInput = content.querySelectorAll('.autoResizeInput');
      hasInput.forEach((input) => {
        if (input.querySelector('input') === null) {
          input.remove();
        }
      });

      if (content.textContent !== '' || (content.nodeName === 'TEXTAREA' && content.value !== '')) {
        controlBoxSubmit.removeAttribute('disabled');
      } else {
        controlBoxSubmit?.setAttribute('disabled', 'disabled');
      }
    };
    checkContent();
    content.addEventListener('input', checkContent);
  };

  document.addEventListener('DOMContentLoaded', () => {
    allTextareas.forEach(setupCheckContent);
  });
})();
