<template>
	<div class="app-foot">
    <el-table
          :data="listData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.goods_brief.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="名称"
            prop="name">
            <template slot-scope="scope"><!--点击弹出样式-->
              <el-popover trigger="hover" placement="top">
                <p>名称: {{ scope.row.name }}</p>
                <p>描述: {{ scope.row.desc }}</p>
                <p>详细: {{ scope.row.goods_brief }}</p>
                <p>图片: </p><img :src="scope.row.goods_front_image" style="width: 30px;height:30px">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="详细"
            prop="goods_brief">
          </el-table-column>
          <el-table-column
            label="日期"
            sortable
            prop="add_time"
      column-key="add_time"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
          </el-table-column>
        </el-table>
	</div>
</template>
<script>

export default{
	name:"list-parent",
	data(){
		return{
      search: '',
		}
	},
  props: {
            listData: {
                type: Array,
                default: function() {
                    return [];
                }
            }

        },
  methods:{
      resetDateFilter() {//日期过滤器
        this.$refs.filterTable.clearFilter('date');
  },
      clearFilter() {//清楚过滤器
        this.$refs.filterTable.clearFilter();
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

  }
}

</script>
<style scoped>

</style>
