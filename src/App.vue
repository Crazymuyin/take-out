<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item" v-for="list in listItem" :key="list.name">
        <router-link :to="list.path">{{ list.name }}</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="application/ecmascript">
import Header from './components/header/header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  },
  data () {
    return {
      listItem: [
        { 'name': '商品', 'path': 'Goods' },
        { 'name': '评论', 'path': 'Ratings' },
        { 'name': '商家', 'path': 'Seller' }
      ],
      seller: {
        description: '',
        deliveryTime: ''
      }
    }
  },
  created () {
    this.getRequest()
  },
  methods: {
    getRequest: function () {
      // let _self = this
      // this.$axios.get('/api/seller').then(function (result) {
      //     if (Number(result.data.status === 200)) {
      //       console.log(result.data.data)
      //       _self.seller = result.data.data
      //     }
      // })
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
@import "../static/css/reset.css";
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
      line-height: 40px;
      & a {
        text-decoration: none;
        color: rgb(77,85,93);
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
      }
      & a.router-link-exact-active {
        color: rgb(240,20,20);
      }
    }
  }
}
</style>
