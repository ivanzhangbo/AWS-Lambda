<template>
  <div>
    <div class="index-left">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 15px;">
        <el-radio-button :label="false">+</el-radio-button>
        <el-radio-button :label="true">-</el-radio-button>
      </el-radio-group>

      <el-menu
        class="el-menu-vertical-demo"
        uniqueOpened
        @open="handleOpen"
        @close="handleClose"
        background-color="#ffffff"
        text-color="#303133"
        :collapse="isCollapse" >

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">组织</span>
            </template>

              <el-submenu v-for="(item,index) in allMenuLabel" :key="item.id" :data="item"  :index="item.id">
                <template slot="title"><span><router-link :to="'/list/'+item.id">{{item.id}}-{{ item.name }}</router-link></span></template>
                <el-submenu v-for="(list,index) in item.sub_cat" :key="list.id" :data="list"  :index="list.id" >
                    <span slot="title">{{list.id}}-{{list.name}}</span>

                      <el-menu-item v-for="(sublist,index) in list.sub_cat" :key="sublist.id" :data="sublist"  :index="sublist.id">
                        <span slot="title">{{sublist.id}}-{{sublist.name}}</span>
                      </el-menu-item>
                </el-submenu>
              </el-submenu>
          </el-submenu>

        <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span slot="title">客户</span>
            </template>
         </el-submenu>

        <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">员工</span>
            </template>
         </el-submenu>

        <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">图表</span>
            </template>
         </el-submenu>

        <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span slot="title">现场</span>
            </template>
         </el-submenu>

        <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-document-copy"></i>
              <span slot="title">简历</span>
            </template>
         </el-submenu>

        <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span slot="title">求人</span>
      </template>
   </el-submenu>

        <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-star-on"></i>
        <span slot="title">收藏</span>
      </template>
   </el-submenu>
      </el-menu>

    </div>

    <div class="index-right">
      <list></list>

        <!--<el-table-->
          <!--:data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.address.toLowerCase().includes(search.toLowerCase()))"-->
          <!--style="width: 100%">-->
          <!--<el-table-column-->
            <!--label="姓名"-->
            <!--prop="name">-->
            <!--<template slot-scope="scope">&lt;!&ndash;点击弹出样式&ndash;&gt;-->
              <!--<el-popover trigger="hover" placement="top">-->
                <!--<p>姓名: {{ scope.row.name }}</p>-->
                <!--<p>住址: {{ scope.row.address }}</p>-->
                <!--<div slot="reference" class="name-wrapper">-->
                  <!--<el-tag size="medium">{{ scope.row.name }}</el-tag>-->
                <!--</div>-->
              <!--</el-popover>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--label="地址"-->
            <!--prop="address">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--label="日期"-->
            <!--sortable-->
            <!--prop="date"-->
      <!--column-key="date"-->
      <!--:filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"-->
      <!--:filter-method="filterHandler"-->
    <!--&gt;-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--align="right">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<el-input-->
                <!--v-model="search"-->
                <!--size="mini"-->
                <!--placeholder="输入关键字搜索"/>-->
            <!--</template>-->
          <!--</el-table-column>-->
        <!--</el-table>-->
    </div>

  </div>
</template>

<script>
  import { getCategory } from '../api/api'
  import list from "../components/list"

  export default {
    data() {
      return {
        isCollapse: true,
        allMenuLabel:[],

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '张小虎',
          address: '千葉県市川市'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getMenu(){//获取菜单
      getCategory({
        params:{}
      }).then((response)=> {
                console.log(response)
                this.allMenuLabel = response.data
            })
            .catch(function (error) {
              console.log(error);
            });
        },

    },
    created() {
      this.getMenu()//获取菜单
    },
    components:{
      list
    }
  }
</script>

<style>
  .index-left{
    float: left;
    padding: 20px;
  }

  .index-right{
    position: absolute;
    left: 150px;
    top: 150px;
    width: 80%;
  }

</style>
