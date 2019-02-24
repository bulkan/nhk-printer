import nhkeasy from 'nhkeasy';

const separator = '\n\n&nbsp;\n\n';

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

fetch('http://www3.nhk.or.jp/news/easy/k10011823971000/k10011823971000.html')
  .then(res => res.text())
  .then(scrapeArticle)
  .then(d => console.log(d));