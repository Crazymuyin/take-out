<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-content">
        <li v-for="(item, index) in goods" :key="item.name" class="menu-item" :class="{current: index === currentIndex}" @click="selectMenu(index,$event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook" :key="item.name">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food, $event)" v-for="food in item.foods" :key="food.name" class="food-item border-1px">
              <div class="icon">
                <img width="57px" height="57px" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food" @card-add="cartAdd"></cartcontrol>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :select-foods="selectFoods" ref="shopCart" :delivery-price="seller.deliveryPrice"
              :min-price="seller.minPrice"></shopcart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script type="application/ecmascript">
import BScroll from 'better-scroll'
import shopcart from '../shopcart/shopcart'
import cartcontrol from '../cartcontrol/cartcontrol'
import food from '../food/food'
export default {
  name: 'goods',
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    'shopcart': shopcart,
    'cartcontrol': cartcontrol,
    'food': food
  },
  created () {
    this.getRequest()
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    getRequest: function () {
      this.$axios.get('/api/goods').then(result => {
        if (Number(result.data.status === 200)) {
          this.goods = result.data.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
    },
    _initScroll () {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index, event) {
      // console.log(index)
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    selectFood (food, event) {
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      this.$refs.food.show()
    },
    cartAdd (el) {
      this.$nextTick(() => {
        this.$refs['shopCart'].drop(el)
      })
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/css/common";
.goods{
  display: flex;
  position: absolute;
  top: 174px;
  width: 100%;
  bottom: 46px;
  overflow: hidden;
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-content{
      .menu-item{
        padding: 0 12px;
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        &.current{
          position: relative;
          z-index: 10;
          background: #fff;
          font-weight: 700;
          margin-top: -1px;
          .text{
            .border-none;
          }
        }
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: top;
          margin-right: 2px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
        }
        & .decrease{
          .bg-image('../img/goods/decrease_3');
        }
        & .discount{
          .bg-image('../img/goods/discount_3');
        }
        & .guarantee{
          .bg-image('../img/goods/guarantee_3');
        }
        & .invoice{
          .bg-image('../img/goods/invoice_3');
        }
        & .special{
          .bg-image('../img/goods/special_3');
        }
        .text{
          display: table-cell;
          width: 56px;
          font-size: 12px;
          font-weight: 200;
          vertical-align: middle;
          .border-1px(rgba(7,17,27,0.1));
        }
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    .food-list{
      .title{
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147,153,159);
        background: #f3f5f7;
      }
      .food-item{
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        .border-1px(rgba(7,17,27,0.1));
        & :last-child{
          margin-bottom: 0;
          .border-none
        }
        .icon{
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content{
          flex: 1;
          .name{
            font-size: 14px;
            line-height: 14px;
            font-weight: 700;
            margin: 2px 0 8px 0;
            height: 14px;
            color: rgb(7,17,27);
          }
          .desc,.extra{
            line-height: 10px;
            font-size: 10px;
            color: rgb(147,153,159);
          }
          .desc{
            margin-bottom: 8px;
          }
          .extra{
            .count{
              margin-right: 4px;
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
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>
