export function systemManageMenu () {
  return [
    {
      id: 1,
      pId: 0,
      name: '个人中心',
      status: false,
      children: [
        {
          id: 2,
          pId: 1,
          name: '班级管理',
          status: false,
          children: []
        },
        {
          id: 3,
          pId: 1,
          name: '账号管理',
          status: false,
          children: []
        },
        {
          id: 4,
          pId: 1,
          name: '文件管理',
          status: false,
          children: []
        }
      ]
    },
    {
      id: 5,
      pId: 0,
      name: '帮助中心',
      status: false,
      children: []
    },
    {
      id: 6,
      pId: 0,
      name: '退出登录',
      status: false,
      children: []
    }
  ];
}
export function analysisMenu () {
  return [
    {name: '舆情趋势分析', link: '/analysis/trend'},
    {name: '舆情传播分析', link: '/analysis/spread'},
    {name: '舆情分布分析', link: '/analysis/distribution'},
    {name: '舆情格局分析', link: '/analysis/pattern'},
    {name: '舆情平台分析', link: '/analysis/platform'},
    {name: '舆情轨迹分析', link: '/analysis/trajectory'},
    {name: '舆情关系分析', link: '/analysis/relationship'}
  ];
}

export function terraceList () {
  return [
      {name: '全部', alias: 'all', status: true},
      {name: '新闻', alias: 'new', status: false},
      {name: '论坛', alias: 'bbs', status: false},
      // {name: '平煤', alias: 'media', status: false},
      // {name: '微信', alias: 'weChat', status: false},
      {name: '贴吧', alias: 'postBar', status: false},
      // {name: '留言板', alias: 'message', status: false},
      // {name: '中正云搜', alias: 'search', status: false},
      {name: '新浪微博', alias: 'weiBo', status: false}
    ];
}

export function dimensionList () {
  return [
    {name: '数量维度', alias: 'amount', son: [{name: '总量', alias: 'total', type: 'radio', stack: 'amount', status: true}, {name: '增量', alias: 'increment', type: 'radio', stack: 'amount', status: false}]},
    {name: '情感维度', alias: 'emotion', son: [{name: '正面', alias: 'just', type: 'checkbox', stack: 'emotion', status: false}, {name: '中性', alias: 'well', type: 'checkbox', stack: 'emotion', status: false}, {name: '负面', alias: 'loss', type: 'checkbox', stack: 'emotion', status: false}]},
    {name: '词汇维度', alias: 'keywords', son: []}
  ];
}

export function spreadDimensionList () {
  return [
    {name: '情感维度', alias: 'emotion', son: [{name: '正面', alias: 'just', type: 'checkbox', stack: 'emotion', status: true}, {name: '中性', alias: 'well', type: 'checkbox', stack: 'emotion', status: false}, {name: '负面', alias: 'loss', type: 'checkbox', stack: 'emotion', status: false}]},
    {name: '载体维度', alias: 'carrier', son: [{name: '正面', alias: 'just', type: 'checkbox', stack: 'emotion', status: false}, {name: '中性', alias: 'well', type: 'checkbox', stack: 'emotion', status: false}, {name: '负面', alias: 'loss', type: 'checkbox', stack: 'emotion', status: false}]},
    {name: '词汇维度', alias: 'keyWords', son: [{name: '正面', alias: 'just', type: 'checkbox', stack: 'emotion', status: false}, {name: '中性', alias: 'well', type: 'checkbox', stack: 'emotion', status: false}, {name: '负面', alias: 'loss', type: 'checkbox', stack: 'emotion', status: false}]}
  ];
}

export function emotionList () {
  return [
    {name: '全部', alias: 'all'},
    {name: '正面', alias: 'just'},
    {name: '中性', alias: 'well'},
    {name: '负面', alias: 'loss'}
  ];
}

export function dateTimeList () {
  return [
    {name: '全部', alias: 'all'},
    {name: '一天', alias: 'today'},
    {name: '一周', alias: 'week'},
    {name: '一月', alias: 'month'}
  ];
}

export function totalDimension () {
  return [
    {name: '总量', alias: 'dateTime'},
    {name: '增量', alias: 'number'}
  ];
}

export function spikeDimension () {
  return [
    {name: '按天计算', alias: 'day'}
  ];
}

export function chartName () {
  return [
    {name: '折线图', alias: 'line', fun: 'lineService', son: [{name: '默认', alias: 'line', type: 'default', fun: 'lineService'}, {name: '圆滑线图', alias: 'line', type: 'smooth', fun: 'lineService'}, {name: '阶梯线图', alias: 'line', type: 'step', fun: 'lineService'}]},
    {name: '柱状图', alias: 'bar', fun: 'barService', son: [{name: '默认', alias: 'bar', type: 'default', fun: 'barService'}]}, /* , {name: '堆叠条形图', alias: 'bar', type: 'stack', fun: 'barService'}, {name: '阶梯瀑布图', alias: 'bar', type: 'waterfall', fun: 'barService'}, {name: '极坐标系', alias: 'bar', type: 'polar', fun: 'barService'}]}, */
    // {name: '饼状图', alias: 'pie', fun: 'pieService', son: [{name: '默认', alias: 'pie', type: 'default', fun: 'pieService'}, {name: '环形图', alias: 'pie', type: 'hollow', fun: 'pieService'}, {name: '南丁格尔玫瑰图', alias: 'pie', type: 'rose', fun: 'pieService'}, {name: '环形南丁格尔玫瑰图', alias: 'pie', type: 'roseHollow', fun: 'pieService'}]},
    {name: '散点图', alias: 'scatter', fun: 'scatterService', son: [{name: '默认', alias: 'scatter', type: 'default', fun: 'scatterService'}, {name: '气泡图', alias: 'scatter', type: 'bubble', fun: 'scatterService'}]}
    // {name: '热力图', alias: 'heatMap', fun: 'heatMapService', son: [{name: '默认', alias: 'heatMap', type: 'default', fun: 'heatMapService'}]}
  ];
}

export function spreadChartName () {
  return [
    {name: '平台传播', alias: 'tree', fun: 'treeService', son: [{name: '默认', alias: 'tree', type: 'default', fun: 'treeService'}]},
    {name: '路径传播', alias: 'tree', fun: 'treeService', son: [{name: '默认', alias: 'tree', type: 'default', fun: 'treeService'}]},
    {name: '热区传播', alias: 'map', fun: 'mapService', son: [{name: '默认', alias: 'map', type: 'default', fun: 'mapService'}]}
  ];
}
