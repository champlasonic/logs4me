// Language toggle functionality
(function() {
  // Get current language from localStorage or default to 'ja'
  let currentLang = localStorage.getItem('preferredLanguage') || 'ja';

  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const postContent = document.querySelector('.post-content');

    if (!langButtons.length || !postContent) return;

    // Set active button
    langButtons.forEach(btn => {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Get translations from page data
    const pageData = document.getElementById('page-translations');
    if (!pageData) return;

    const translations = JSON.parse(pageData.textContent);

    // Apply current language
    applyLanguage(currentLang, translations, postContent);

    // Add click listeners
    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);

        // Update active state
        langButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Apply translation
        applyLanguage(lang, translations, postContent);
      });
    });
  });

  function applyLanguage(lang, translations, contentElement) {
    if (lang === 'ja') {
      // Show original Japanese content
      contentElement.innerHTML = translations.ja;
    } else if (translations[lang]) {
      // Show translated content
      contentElement.innerHTML = translations[lang];
    } else {
      // Translation not available, show message
      const originalContent = translations.ja;
      const message = lang === 'en'
        ? '<p><em>English translation is not available yet.</em></p>'
        : '<p><em>中文翻译尚未提供。</em></p>';
      contentElement.innerHTML = message + originalContent;
    }
  }
})();
