<template>
  <div class="chart">
    <div id="stack" style="min-width:400px;height:400px"></div>
    <div id="pancake" style="width:400px;height:400px"></div>
    <div id="columnar" style="width:400px;height:400px"></div>
  </div>
</template>
<script>
var Highcharts = require('highcharts')
export default {
  data () {
    return {}
  },
  mounted () {
    this.stackArea()
    this.pancake()
    this.column()
  },
  methods: {
    stackArea () {
      Highcharts.chart('stack', {
        chart: {
          type: 'area'
        },
        title: {
          text: '全球各大洲人口增长历史及预测'
        },
        subtitle: {
          text: '数据来源: Wikipedia.org'
        },
        xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            text: '十亿'
          },
          labels: {
            formatter: function () {
              return this.value / 1000
            }
          }
        },
        tooltip: {
          split: true,
          valueSuffix: ' 百万'
        },
        credits: {
          // 禁用版权信息
          enabled: false
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        series: [{
          name: '亚洲',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
        },
        {
          name: '非洲',
          data: [106, 107, 111, 133, 221, 767, 1766]
        },
        {
          name: '欧洲',
          data: [163, 203, 276, 408, 547, 729, 628]
        },
        {
          name: '美洲',
          data: [18, 31, 54, 156, 339, 818, 1201]
        },
        {
          name: '大洋洲',
          data: [2, 2, 2, 6, 13, 30, 46]
        }]
      })
    },
    pancake () {
      Highcharts.chart('pancake', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '2018年1月浏览器市场份额'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
          // 禁用版权信息
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 40,
            sliced: true,
            selected: true
          },
          {
            name: 'Sogou Explorer',
            y: 30
          },
          {
            name: 'Opera',
            y: 10
          },
          {
            name: 'QQ',
            y: 20
          }]
        }]
      })
    },
    column () {
      Highcharts.chart('columnar', {
        chart: {
          type: 'column'
        },
        title: {
          text: '月平均降雨量'
        },
        subtitle: {
          text: '数据来源: WorldClimate.com'
        },
        xAxis: {
          categories: [
            '一月', '三月', '五月', '七月', '九月', '十一月'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: '降雨量 (mm)'
          }
        },
        credits: {
          // 禁用版权信息
          enabled: false
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [{
          name: '东京',
          data: [49.9, 106.4, 144.0, 135.6, 216.4, 95.6]
        }]
      })
    }
  }
}
</script>
<style lang="scss">
.chart {
  background: rgba(0, 0, 0, 0);
  #pancake {
    float: left;
    .highcharts-root {
      width: 400px;
      .highcharts-data-labels {
        .highcharts-labels {
          font-size: 14px;
        }
      }
    }
  }
  #columnar {
    float: left;
    margin-left: 100px;
  }
}
</style>
