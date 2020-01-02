<template>
    <div class="ratings">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{seller.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}</div>
          </div>
          <div class="overview-right"></div>
        </div>
      </div>
    </div>
</template>

<script type="application/ecmascript">
export default {
  name: 'ratings',
  data () {
    return {
      seller: {
        type: Object
      }
    }
  },
  created () {
    this.getRequest()
  },
  methods: {
    getRequest: function () {
      this.$axios.get('/api/seller').then(result => {
        if (Number(result.data.status === 200)) {
          this.seller = result.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.ratings{
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  .overview{
    display: flex;
    padding: 18px 0;
    .overview-left{
      flex: 0 0 137px;
      width: 137px;
      border-right: 1px solid rgba(7,17,27,0.2);
      text-align: center;
      .score{
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: rgb(255,153,0);
      }
      .title{
        line-height: 12px;
        font-size: 12px;
        color: rgb(7,17,27);
        margin-bottom: 8px;
        font-weight: 500;
      }
      .rank{
        padding-bottom: 6px;
        line-height: 10px;
        font-size: 10px;
        color: rgba(147,153,159);
      }
    }
    .overview-right{
      flex: 1;
      padding-left: 24px;
    }
  }
}
</style>
