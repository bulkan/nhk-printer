import nhkeasy from 'nhkeasy';

const separator = '\n\n';

function scrapeArticle(body) {
  return new Promise((resolve, reject) => {
    nhkeasy({ separator }, body, (err, d) => {
      if (err) {
        return reject(err);
      }
      return resolve(d);
    });
  });
}

export default function scraper(articleId) {
  return fetch(`https://www3.nhk.or.jp/news/easy/${articleId}/${articleId}.html`)
    .then(res => res.text())
    .then(scrapeArticle);
}