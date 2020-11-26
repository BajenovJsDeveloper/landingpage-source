function parseUrl(url) {
  const GROUP_4 = 4;
  const GROUP_5 = 5;
  const GROUP_6 = 6;
  const GROUP_0 = 0;
  const GROUP_7 = 7;
  const GROUP_2 = 2;

  const obj = {
    hash: "",
    hostname: "",
    pathname: "",
    protocol: "",
  };

  const regexp = /((https?):\/\/(www\.)?(.+?\..+?\b))|(\.[a-zA-Z0-9-.]+)?(\/[a-zA-Z0-9-.]+)|(#.+?\b)+/gi;
  const matches = [...url.matchAll(regexp)];
  console.log(matches);
  matches.forEach((search) => {
    if (search[GROUP_2]) obj.protocol = search[GROUP_2];
    if (search[GROUP_4]) obj.hostname = search[GROUP_4];
    if (search[GROUP_5]) {
      obj.pathname = search[GROUP_5].replace(".", "/");
    }
    if (search[GROUP_6]) obj.pathname += search[GROUP_6];
    if (search[GROUP_7]) obj.hash = search[GROUP_0];
  });
  return obj;
}

//----------------------------------------------------------------
//---- For test this function, you need to uncommmit next lines bellow
//----------------------------------------------------------------

// let urls = [
// 'https://ffwagency.com.do/any.php?a=1#foo',
// 'https://ffwagency.com.do/any.php?a=1#foo#fksjd#ljkdlk#sdsdd',
// 'https://webdelphi.ru/razrabotchiku/',
// 'https://ravesli.com/problema-8-parsing-url-ov-regexp/',
// 'https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript',
// 'https://yandex.ru/search/?text=hostname&lr=10313/#mamamia',
// 'http://ffwagency.com.do/aaa/vvv/hh/tyty/sdfsf/any.php?a=1#foo#comon',
// 'https://www.linkedin.com/search/results/all/?keywords=%23birds&origin=GLOBAL_SEARCH_HEADER',
// ];
//  urls.forEach(i => {
//  	console.log(parseUrl(i))
//  })
