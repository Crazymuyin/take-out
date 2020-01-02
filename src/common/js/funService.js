export function dataFormat (obj) {
  if (typeof obj !== 'object') {
    alert('输入的参数必须是对象');
    return;
  }
  // 不支持FormData的浏览器的处理
  var arr = [];
  var i = 0;
  for (let attr in obj) {
    arr[i] = encodeURIComponent(attr) + '=' + encodeURIComponent(obj[attr]);
    i++;
  }
  return arr.join('&');
}

export const treeDataReq = (params) => {
  const url = 'http://192.168.10.209:8080/getTwoLabelData';
  this.axios.post(url, dataFormat(params))
    .then(result => {
      if (result.status === 200) {
        result = result.data.data;
        if (typeof result === 'string' && result.constructor === String) {
          result = JSON.parse(result);
        }
        return {
          pageTile: result.name,
          treeDate: result.labelData
        };
      }
    }, error => {
      alert(error);
    });
};
