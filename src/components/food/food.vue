<template>
  <transition>
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="img-header">
          <img :src="food.image"/>
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst($event)">加入购物车</div>
      </div>
    </div>
  </transition>
</template>

<script type="application/ecmascript">
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol'
import Vue from 'vue'
export default {
  name: 'food',
  components: {
    cartcontrol: cartcontrol
  },
  data () {
    return {
      showFlag: false
    }
  },
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    show: function () {
      this.showFlag = true
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    hide: function () {
      this.showFlag = false
    },
    addFirst: function (event) {
      if (!event._constructed) {
        return
      }
      this.$emit('card-add', event.target)
      Vue.set(this.food, 'count', 1)
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/css/icon";
.food{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  background: #fff;
  &.v-enter-active, &.v-leave-active{
    transition: all 0.2s linear;
    transform: translate3d(0, 0, 0);
  }
  &.v-enter, &.v-leave-to{
    transform: translate3d(100%, 0, 0);
  }
  .img-header{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    & img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .back{
      position: absolute;
      top: 10px;
      left: 0;
      .icon-arrow_lift{
        display: block;
        color: #fff;
        padding-left: 10px;
        font-size: 20px;
      }
    }
  }
  .content{
    padding: 18px;
    .title{
      line-height: 14px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }
    .detail{
      margin-bottom: 18px;
      line-height: 10px;
      height: 10px;
      font-size: 0;
      .sell-count, .rating{
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
      .sell-count{
        margin-right: 12px;
      }
    }
    .price{
      font-weight: 700;
      line-height: 24px;
      .now{
        margin-right: 18px;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        color: rgb(240,20,20);
      }
      .old{
        text-decoration: line-through;
        font-size: 10px;
        color: rgb(147,153,159);
      }
    }
  }
  .cartcontrol-wrapper{
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
  .buy{
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 10;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    background: rgb(0, 160, 220);
  }
}
</style>
