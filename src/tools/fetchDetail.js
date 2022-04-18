  const https = require('https');
  const cheerio = require('cheerio');
const options = {
  hostname: 'support.ptc.com',
  path: '/help/creo/creo_pma/usascii/detail/detail_options.html',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  var body = [];
  res.on('data', (chunk) => {
    body.push(chunk);
  });

  res.on('end', function () {
    body = Buffer.concat(body).toString();
    const $ = cheerio.load(body);
    const titles = $(
      ".Section_Title"
    );

    var t = [];
    titles.each(function (idx, el) {
      t.push($(el).text());
    });


    var fs = require('fs');
    fs.writeFile('./src/data/detail.json', JSON.stringify(t), 'utf8',function(err) {
      if (err) throw err;
      console.log('complete');
      });
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
