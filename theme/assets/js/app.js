/* set content's min-height */
(function () {
  var content = document.querySelector('.content');
  var navbarHeight =
    window.getComputedStyle(document.querySelector('.navbar'))
    .getPropertyValue('height');
  var footHeight =
    window.getComputedStyle(document.querySelector('.foot'))
    .getPropertyValue('height');
  var minHeight = document.documentElement.clientHeight
    - parseInt(navbarHeight)
    - parseInt(footHeight);
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


/* content font size */
(function () {
  var content = document.querySelector('.content');
  var sizeArr = ['is-medium', null, 'is-large'];
  var currentSize = 2;
  var switcher = document.querySelector('.article-bar .level-item .link-item-size');
  switcher.onclick = function (e) {
    content.classList.remove(sizeArr[currentSize]);
    currentSize += 1;
    if (currentSize > 2) currentSize -= 3;
    content.classList.add(sizeArr[currentSize]);
  };
})();


/* toggle book toc */
(function () {
  var toc = document.querySelector('.book-toc');
  var switcher = document.querySelector('.article-bar .level-item .link-item-toc');
  switcher.onclick = function (e) {
    toc.classList.toggle('is-hidden');
  };
  var closeButton = toc.querySelector('.title-close');
  closeButton.onclick = function (e) {
    toc.classList.toggle('is-hidden');
  };
})();

