/* insert article's toc */
var article = document.querySelector('.article');
var firstH2Title = article.querySelector('h2');
var h2TitleNumber = article.querySelectorAll('h2');

if (firstH2Title && LOPPO.article_toc && h2TitleNumber.length >= 2) {
  var toc_div = document.createElement('div');
  toc_div.setAttribute('class', 'article-toc');
  toc_div.innerHTML = '<h3>Contents</h3>' + LOPPO.article_toc;
  article.insertBefore(toc_div, firstH2Title);
}
