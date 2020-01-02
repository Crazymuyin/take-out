export function setCookie(cName, value, expire) {
  let date = new Date();
  date.setTime(date.getTime() + expire);
  window.document.cookie = cName + '=' + value + ';path=/;expires=' + date.toGMTString();
}

export function setLocalStorage(cName, value) {
  localStorage.setItem(cName, value);
}

export function getCookie(cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=');
    if (cStart !== -1) {
      let obj = {};
      let cookieList = document.cookie.split(';');
      for (let i in cookieList) {
        let index = cookieList[i].indexOf('=');
        obj[cookieList[i].substring(0, index).replace(/\s/g, '')] = cookieList[i].substring(index + 1, cookieList[i].length);
      }
      return obj[cName];
    }
  }
  return '';
}

export function getLocalStorage(cName) {
  if (localStorage.getItem(cName).length > 0) {
    return localStorage.getItem(cName);
  }
  return '';
}

export function delCookie(cName) {
  setCookie(cName, '', -1);
}

export function delLocalStorage (cName) {
   if (localStorage.getItem(cName).length > 0) {
     localStorage.removeItem(cName);
   }
}
export function dataFormat (obj) {
  if (typeof obj !== 'object') {
    alert('输入的参数必须是对象');
    return;
  }
  let arr = [];
  let i = 0;
  for (let attr in obj) {
    arr[i] = encodeURIComponent(attr) + '=' + encodeURIComponent(obj[attr]);
    i++;
  }
  return arr.join('&');
}

export function initFun () {
  if (getCookie('auth')) {
    return true;
  } else {
    return false;
  }
}

export function readCookie () {
  if (document.cookie) {
    let list = [];
    let obj = {};
    let cookieList = document.cookie.split(';');
    for (let i in cookieList) {
      let index = cookieList[i].indexOf('=');
      obj[cookieList[i].substring(0, index).replace(/\s/g, '')] = cookieList[i].substring(index + 1, cookieList[i].length);
      list.push({key: cookieList[i].substring(0, index).replace(/\s/g, ''), value: cookieList[i].substring(index + 1, cookieList[i].length)});
    }
    return {
      list: list,
      map: obj
    };
  }
}
