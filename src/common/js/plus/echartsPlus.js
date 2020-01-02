export function lineService (type, data) {
  if (type === 'default') {
    return linePublic(false, false, data);
  }
  if (type === 'smooth') {
    return linePublic(false, true, data);
  }
  if (type === 'step') {
    return linePublic(true, false, data);
  }
}

function linePublic (step, smooth, data) {
  let itemColor = [{start: '#01e2e2', end: '#eb693e'}, {start: '#eb693e', end: '#1fae36'}, {start: '#1fae36', end: '#01e2e2'}];
  return {
    title: {
      show: false,
      text: '',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#F1F1F3'
      },
      left: '6%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: data.legend,
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#F1F1F3'
      }
    },
    grid: {
      top: '3%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#05D9EF'
        },
        symbol: ['none', 'arrow']
      },
      axisLabel: {
        color: '#fff'
      },
      data: data.dateTime
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#05D9EF'
        },
        symbol: ['none', 'arrow']
      },
      axisLabel: {
        color: '#fff'
      }
    }],
    series: (function () {
      let list = [];
      for (let i in data.data) {
        let item = {
          name: data.legend[i],
          type: 'line',
          step: step,
          smooth: smooth,
          lineStyle: {
            width: 1,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: itemColor[i].start
              }, {
                offset: 0.8,
                color: itemColor[i].end
              }],
              globalCoord: false
            },
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: itemColor[i].start
              }, {
                offset: 0.8,
                color: itemColor[i].end
              }],
              globalCoord: false
            },
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
          data: data.data[i]
        };
        list.push(item);
      }
      return list;
    })()
  };
}

export function barService (type, data) {
  if (type === 'default') {
    let itemColor = [{start: '#01e2e2', end: '#eb693e'}, {start: '#eb693e', end: '#1fae36'}, {start: '#1fae36', end: '#01e2e2'}];
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            opacity: 0
          }
        }
      },
      legend: {
        show: true,
        textStyle: {
          color: '#fff'
        },
        data: data.legend
      },
      grid: {
        top: '3%',
        bottom: '3%',
        left: '3%',
        right: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        gridIndex: 0,
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        data: data.dateTime
      },
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
          }
        }
      }],
      series: (function () {
        let list = [];
        for (let i in data.data) {
          let item = {
            name: data.legend[i],
            data: data.data[i],
            type: 'bar',
            barGap: 0.5,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: itemColor[i].start
                  }, {
                    offset: 1, color: itemColor[i].end
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          };
          list.push(item);
        }
        return list;
      })()
    };
  }
  if (type === 'stack') {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['新闻', '论坛', '平媒', '微信', '贴吧', '留言版', '中正云搜', '新浪微博', '正面', '中性', '负面']
      },
      grid: {
        top: '3%',
        bottom: '3%',
        left: '3%',
        right: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '新闻',
          type: 'bar',
          stack: '平台',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '论坛',
          type: 'bar',
          stack: '平台',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '平媒',
          type: 'bar',
          stack: '平台',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '微信',
          type: 'bar',
          stack: '平台',
          data: [862, 1018, 964, 1026, 1679, 1600, 1570]
        },
        {
          name: '贴吧',
          type: 'bar',
          stack: '平台',
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: '留言版',
          type: 'bar',
          stack: '平台',
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: '中正云搜',
          type: 'bar',
          stack: '平台',
          data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
          name: '新浪微博',
          type: 'bar',
          stack: '平台',
          data: [62, 82, 91, 84, 109, 110, 120]
        },
        {
          name: '正面',
          type: 'bar',
          stack: '情感',
          data: [62, 82, 91, 84, 109, 110, 120]
        },
        {
          name: '中性',
          type: 'bar',
          stack: '情感',
          data: [62, 82, 91, 84, 109, 110, 120]
        },
        {
          name: '负面',
          type: 'bar',
          stack: '情感',
          data: [62, 82, 91, 84, 109, 110, 120]
        }
      ]
    };
  }
  if (type === 'waterfall') {
    return {
      title: {
        text: '阶梯瀑布图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          let tar;
          if (params[1].value !== '-') {
            tar = params[1];
          } else {
            tar = params[0];
          }
          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
      },
      legend: {
        data: ['支出', '收入']
      },
      grid: {
        top: '3%',
        bottom: '3%',
        left: '3%',
        right: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', '11月11日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '辅助',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
          name: '收入',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
          name: '支出',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'bottom'
            }
          },
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
      ]
    };
  }
  if (type === 'polar') {
    return {
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };
  }
}

export function pieService (type, data) {
  if (type === 'default') {
    return {
      title: {
        text: data.title,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        bottom: '5%',
        data: data.legend
      },
      series: [
        {
          name: data.name,
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: data.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
  if (type === 'hollow') {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ]
        }
      ]
    };
  }
  if (type === 'rose') {
    return {
      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 274, name: '联盟广告'},
            {value: 235, name: '视频广告'},
            {value: 400, name: '搜索引擎'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
  }
  if (type === 'roseHollow') {
    return {
      title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {
            show: true,
            type: ['pie', 'funnel']
          },
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      series: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 110],
          center: ['25%', '50%'],
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {value: 10, name: 'rose1'},
            {value: 5, name: 'rose2'},
            {value: 15, name: 'rose3'},
            {value: 25, name: 'rose4'},
            {value: 20, name: 'rose5'},
            {value: 35, name: 'rose6'},
            {value: 30, name: 'rose7'},
            {value: 40, name: 'rose8'}
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [30, 110],
          center: ['75%', '50%'],
          roseType: 'area',
          data: [
            {value: 10, name: 'rose1'},
            {value: 5, name: 'rose2'},
            {value: 15, name: 'rose3'},
            {value: 25, name: 'rose4'},
            {value: 20, name: 'rose5'},
            {value: 35, name: 'rose6'},
            {value: 30, name: 'rose7'},
            {value: 40, name: 'rose8'}
          ]
        }
      ]
    };
  }
}

export function scatterService (type, data) {
  if (type === 'default') {
    let colorList = ['#01e2e2', '#eb693e', '#1fae36'];
    return {
      legend: {
        right: '50%',
        textStyle: {
          color: '#fff'
        },
        data: data.legend
      },
      grid: {
        top: '3%',
        bottom: '3%',
        left: '3%',
        right: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        data: data.dateTime
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        scale: false
      },
      series: (function () {
        let itemList = [];
        for (let i in data.legend) {
          let item = {
            name: data.legend[i],
            data: data.data[i],
            type: 'scatter',
            symbolSize: 10,
            label: {
              emphasis: {
                show: true,
                formatter: function (data) {
                  return data[i];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                // shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
              //   color: {
              //     type: 'linear',
              //     x: 0,
              //     y: 0,
              //     x2: 0,
              //     y2: 1,
              //     colorStops: [{
              //       offset: 0, color: colorList[i][0]
              //     }, {
              //       offset: 1, color: colorList[i][1]
              //     }],
              //     globalCoord: false // 缺省为 false
              //   }
                color: colorList[i]
              }
            }
          };
          itemList.push(item);
        }
        return itemList;
      })()
    };
  }
  if (type === 'bubble') {
    let bubbleColorList = ['#01e2e2', '#eb693e', '#1fae36'];
    return {
      legend: {
        right: '50%',
        textStyle: {
          color: '#fff'
        },
        data: data.legend
      },
      grid: {
        top: '3%',
        bottom: '3%',
        left: '3%',
        right: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        data: data.dateTime
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        scale: false
      },
      series: (function () {
        let itemList = [];
        for (let i in data.legend) {
          let item = {
            name: data.legend[i],
            data: data.data[i],
            type: 'scatter',
            symbolSize: function () {
              return randomNum(10, 40);
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (data) {
                  return data[i];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                // shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                // color: {
                //   type: 'linear',
                //   x: 0,
                //   y: 0,
                //   x2: 0,
                //   y2: 1,
                //   colorStops: [{
                //     offset: 0, color: bubbleColorList[i][0]
                //   }, {
                //     offset: 1, color: bubbleColorList[i][1]
                //   }],
                //   globalCoord: false // 缺省为 false
                // }
                color: bubbleColorList[i]
              }
            }
          };
          itemList.push(item);
        }
        return itemList;
      })()
    };
  }
}

function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 10);
}

export function heatMapService (type, data) {
  if (type === 'default') {
    let xAxisData = data.xList;
    let yAxisData = data.yList;
    data.data.forEach(function (item) {
      item[0] = xAxisData.indexOf(item[0]);
      item[1] = yAxisData.indexOf(item[1]);
    });
    let seriesData = data.data.map(function (item) {
      return [item[0], item[1], item[2] || '-'];
    });
    return {
      animation: false,
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        data: xAxisData
      },
      yAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#05D9EF'
          },
          symbol: ['none', 'arrow']
        },
        axisLabel: {
          color: '#fff'
        },
        data: yAxisData
      },
      visualMap: {
        show: true,
        min: 1,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '1%'
      },
      series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: seriesData,
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }
}

export function treeService (data) {
  let chartName = data.chartName;
  let seriesData = data.data;
  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [{
      type: 'tree',
      name: chartName,
      data: seriesData,
      left: '20%',
      right: '25%',
      layout: 'orthogonal',
      symbol: 'emptyCircle',
      symbolSize: 12,
      initialTreeDepth: 5,
      itemStyle: {
        color: 'transparent'
      },
      lineStyle: {
        color: '#207BB2'
      },
      label: {
        normal: {
          color: '#fff',
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },
      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }]
  };
}

export function mapService (data) {
  let seriesData = data.data;
  return {
    tooltip: {
      show: true,
      formatter: function(params) {
        return params.tooltip;
      }
    },
    visualMap: {
      type: 'continuous',
      text: ['', ''],
      show: false,
      showLabel: true,
      seriesIndex: [0],
      min: 0,
      max: 7,
      inRange: {
        color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
      },
      textStyle: {
        color: '#000'
      },
      bottom: 30,
      left: 'left'
    },
    geo: {
      roam: true,
      map: 'china',
      layoutSize: '100%',
      label: {
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          areaColor: '#fff464'
        }
      },
      regions: [{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false
            }
          }
        }
      }]
    },
    series: [{
      name: 'mapSer',
      type: 'map',
      roam: false,
      geoIndex: 0,
      label: {
        show: false
      },
      data: (function () {
        let list = [];
        for (let i in seriesData) {
          let item = {
            name: seriesData[i].place,
            value: seriesData[i].total,
            tooltip: seriesData[i].tooltip
          };
          list.push(item);
        }
        return list;
      }())
    }]
  };
}

export function fullScreenLine (type, data) {
  let themeColor = {view: '#333', full: '#fff'};
  let colorList = [{name: '支持正方', start: '#01e2e2', end: '#1990e1'}, {name: '支持反方', start: '#eb693e', end: '#ecef95'}, {name: '保持中立', start: '#1fae36', end: '#96f8e2'}];
  return {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: type === 'view' ? themeColor.view : themeColor.full,
        fontSize: 14
      },
      data: data.legend
    },
    grid: {
      left: '5%',
      right: '8%',
      top: '22%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      name: '时间',
      type: 'category',
      boundaryGap: false,
      data: data.dateTime,
      axisLine: {
        symbol: ['none', 'arrow'],
        lineStyle: {
          color: type === 'view' ? themeColor.view : themeColor.full
        }
      }
    },
    yAxis: {
      name: '数量/条',
      type: 'value',
      splitLine: {show: false},
      axisLine: {
        symbol: ['none', 'arrow'],
        lineStyle: {
          color: type === 'view' ? themeColor.view : themeColor.full
        }
      }
    },
    series: (function () {
      let list = [];
      for (let i = 0; i < data.dataList.length; i++) {
        let item = {
          name: data.legend[i],
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: colorList[i].start // 0% 处的颜色
                }, {
                  offset: 1, color: colorList[i].end // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              opacity: 0.9
            }
          },
          data: data.dataList[i]
        };
        list.push(item);
      }
      return list;
    }())
  };
}

export function fullScreePie (data) {
  return {
    tooltip: {
      show: true,
      formatter: function(params) {
        return params.data.toolTip;
      }
    },
    calculable: true,
    series: {
      type: 'pie',
      radius: [30, 80],
      roseType: 'area',
      data: (function () {
        let dataItem = [];
        for (let i in data.dataList) {
          let item = {};
          let name = data.dataList[i].name;
          switch (name) {
            case name = '新闻':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#d06290'
                  }
                }
              };
              break;
            case name = '论坛':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#5bb185'
                  }
                }
              };
              break;
            case name = '博客':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              };
              break;
            case name = '新浪微博':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '微博':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '微信':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '平媒':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '留言板':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '贴吧':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#bccc67'
                  }
                }
              };
              break;
            case name = '中正云搜':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '搜索引擎':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '微视频':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            case name = '移动媒体':
              item = {
                name: data.dataList[i].name,
                value: data.dataList[i].value,
                tooltip: data.dataList[i].toolTip,
                itemStyle: {
                  normal: {
                    color: '#2ea8f0'
                  }
                }
              };
              break;
            default:
              break;
          }
          dataItem.push(item);
        }
        return dataItem;
      }())
    }
  };
}
