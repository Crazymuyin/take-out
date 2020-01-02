$("textarea[name='xpathCon']").bind('input propertychange',function () {
  verificationMake();
});
export function verificationMake() {
  let str = [];
  let xpathName = '//html/body/div[@class=\'container clearfix pt0\']/main/div[@class=\'article-list\']/div[@class=\'article-item-box csdn-tracking-statistics\']/h4[@class=\'text-truncate\']/a/@href';
  let result = document.evaluate(xpathName, document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  if (result) {
    for (let i = 0; i < result.snapshotLength; i++) {
      let btnVal = result.snapshotItem(i).textContent;
      str.push(btnVal);
    }
  }
}

//判断一个url是否可以访问
export function isLoad(doc){
}
