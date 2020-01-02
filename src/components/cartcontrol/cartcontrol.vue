<template>
  <div class="cartcontrol">
    <transition>
      <div class="cart-decrease"
          @click="decreaseCart" v-show="food.count>0">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">
      {{ food.count }}
    </div>
    <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>

<script type="application/ecmascript">
import Vue from 'vue'
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart: function (event) {
      // console.log('click')
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('card-add', event.target)
    },
    decreaseCart: function (event) {
      // console.log('click')
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../common/css/icon";
.cartcontrol {
  .cart-decrease{
    display: inline-block;
    padding: 6px;
    transition: all 0.4s linear;
    /*&.v-enter-active, &.v-leave-active{*/
      /*transition: all 1s;*/
    /*}*/
    &.v-transition{
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    &.v-enter, &.v-leave-to{
      opacity: 0;
      transform: translate3d(24px, 0, 0);
      .inner{
        transform: rotate(180deg);
      }
    }
    .inner{
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      transition: all 0.4s linear;
      transform: rotate(0);
    }
  }
  .cart-count{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147,153,159);
  }
  .cart-add{
    display: inline-block;
    padding: 6px;
  }
  .icon-add_circle {
    line-height: 24px;
    font-size: 24px;
  }
}
</style>
