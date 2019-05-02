<template>
	<div class="list">
    <product-list  :listData="listData"></product-list>
	</div>
</template>
<script>
import { getGoods } from '../api/api'
import productList from './product-list';
export default{
	name:"list",
	data(){
		return{
      curPage: 1, // 页码
      top_category: '', // 商品种类
      listData: [],
      pricemin: '', //价格最低
      pricemax: '', //价格最高
      ordering: '-add_time',
      pageType:'',
		}
	},
  components:{
	  'product-list': productList,
  },
  methods:{

      getListData() {
                if(this.pageType=='search'){
                  getGoods({
                    search: this.searchWord, //搜索关键词
                  }).then((response)=> {
                    this.listData = response.data.results;
                    this.proNum = response.data.count;
                  }).catch(function (error) {
                    console.log(error);
                  });
                }else {
                  getGoods({
                    page: this.curPage, //当前页码
                    top_category: this.$route.params.id, //商品类型
                    ordering: this.ordering, //排序类型
                    pricemin: this.pricemin, //价格最低 默认为‘’ 即为不选价格区间
                    pricemax: this.pricemax // 价格最高 默认为‘’
                  }).then((response)=> {

                    this.listData = response.data.results;
                    this.proNum = response.data.count;
                    console.log(this.listData)
                  }).catch(function (error) {
                    console.log(error);
                  });
                }

      },
  },
  created() {
      this.getListData()//获取菜单
  },
  watch: {
    "$route": "getListData"
  },
}

</script>
<style scoped>

</style>
