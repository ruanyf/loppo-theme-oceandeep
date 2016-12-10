/* set content's min-height */
(function () {
  var content = document.querySelector('.content');
  var navbarHeight =
    window.getComputedStyle(document.querySelector('.navbar'))
    .getPropertyValue('height');
  var footHeight =
    window.getComputedStyle(document.querySelector('.foot'))
    .getPropertyValue('height');
  var showNavigationHeight =
    window.getComputedStyle(document.querySelector('.show-navigation'))
    .getPropertyValue('height');
  var minHeight = document.documentElement.clientHeight
    - parseInt(navbarHeight)
    - parseInt(footHeight)
    - (parseInt(showNavigationHeight) ? parseInt(showNavigationHeight) : 0);
  content.style.minHeight = minHeight + 'px';
})();

/* insert article's toc */
(function () {
  var article = document.querySelector('.article');
  var firstH2Title = article.querySelector('h2');
  var h2TitleNumber = article.querySelectorAll('h2');

  if (firstH2Title && LOPPO.article_toc && h2TitleNumber.length >= 2) {
    var toc_div = document.createElement('div');
    toc_div.setAttribute('class', 'article-toc');
    toc_div.innerHTML = '<h3>Contents</h3>' + LOPPO.article_toc;
    article.insertBefore(toc_div, firstH2Title);
  }
})();

/* show_navigation */
(function () {
  var show_navigation_button = document.querySelector('.show-navigation .button');
  if (show_navigation_button) {
    show_navigation_button.onclick = function (e) {
      if (show_navigation_button.textContent === 'Show Navigation') {
        show_navigation_button.textContent = 'Hide Navigation';
      } else {
        show_navigation_button.textContent = 'Show Navigation';
      }
      var book_toc = document.querySelector('.book-toc');
      book_toc.style.borderBottom = '1px solid #dbdbdb';
      var classList = book_toc.classList;
      classList.toggle('is-hidden-touch');
    }
  }
})();

