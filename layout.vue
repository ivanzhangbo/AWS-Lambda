<template>
  <div class="container">
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

              <el-submenu v-for="item in allMenuLabel" :key="item.id" :data="item"  :index="item.name">
                <template slot="title"><span><router-link :to="'/list/'+item.id">{{item.id}}-{{ item.name }}</router-link></span></template>
                <el-submenu v-for="list in item.sub_cat" :key="list.id" :data="list"  :index="list.name" >
                    <span slot="title">{{list.id}}-{{list.name}}</span>

                      <el-menu-item v-for="sublist in list.sub_cat" :key="sublist.id" :data="sublist"  :index="sublist.name">
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
      <div class="bread"><!--面包屑-->
        <div class="bread-left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>组织</el-breadcrumb-item>
  </el-breadcrumb>
        </div>

      </div>
      <list></list>
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
        search: '',
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
  .container{
    margin: 10px;
  }

  .index-left,.index-right{
    position: relative;
    float: left;
  }

  .index-left{

  }

  .index-right{
    padding-left: 60px;
    padding-top: 22px;
    padding-bottom: 40px;
    width: 85%;
  }

  .bread{
    margin-bottom: 20px;
  }

</style>
