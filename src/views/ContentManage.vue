<template>
  <div>
    <el-table ref="multipleTable" :data="tableData"   tooltip-effect="dark"  stripe border fit show-header highlight-current-row current-row-key="id" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column  width="55"> </el-table-column><!--type="selection"-->

      <el-table-column prop="id"  label="id" width="120"></el-table-column>
      <el-table-column label="创建日期" width="120">
        <template slot-scope="scope">{{ scope.row.createTime }}</template>
      </el-table-column>
      <el-table-column label="内容"  :show-overflow-tooltip="true" prop="content"   style="height: 60px" >
      </el-table-column>

      <el-table-column prop=""  label="操作"  align="right" width="270">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" class="aligin" @click="addContent()">添加</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleQuery(scope.$index, scope.row)">预览</el-button>
<!--          <el-button-->
<!--            size="mini"-->
<!--            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    <div style="margin-top: 20px">-->
<!--      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
<!--      <el-button @click="toggleSelection()">取消选择</el-button>-->
<!--    </div>-->
  </div>

</template>

<script>
  import {
    queryContentNet,delContentNet,getRes1
  } from '../network/apis'
  import { userLogout } from '../network/apis'
  import axios from 'axios'

  export default {

    // component:{
    //   qs
    // },
    data() {
      return {
        tableData: [],
        multipleSelection: []
      }
    },

    mounted () {
      this.queryContent();
      // this.getRes1();

    },

    methods: {
      //改变被选中状态
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //当选择项发生变化时会触发该事件
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      // 处理操作编辑按钮
      handleQuery(index, row) {
        this.$router.replace({
           path : "/content-preview",
           query : {
             content : row.content
           }
          },
        )
      },
      // 处理操作编辑按钮
      handleEdit(index, row) {
      },
      // 处理操作删除按钮
      handleDelete(index, row) {
        this.delContent(row.id)
      },

      //添加content 按钮点击事件
      addContent() {
        // this.$emit('routeAddContent',null)
        this.$router.replace("/content-add")
        // getRes1()
        // .then(res => {
        //   this.$message.info("获取到资源" + res)
        // }).catch(error => {
        //
        // })
      },



      delContent: function (id) {
        var _this = this;
        delContentNet(id).
        then(function (response) {
            _this.$message({
              message: '删除成功',
              type: 'success'
            });
            _this.queryContent()
        }).catch(function (error) {
          console.log(error)
        })
      },

      updateContent(id){
        request({
          url: '/api/content-manage/content/update',
          method : 'post',
          data:{

          }
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      },

      queryContent(){
        var _this = this;
        queryContentNet()
        .then(function (response) {
          //注意这里的this指向
          _this.tableData = response;
        }).catch(function (error) {
          console.log(error);
        });
      },
      test(){
        var _this = this;
        test()
          .then(function (response) {
            //注意这里的this指向
            _this.tableData = response;
          }).catch(function (error) {
          console.log(error);
        });
      }

    }
  }
</script>

<style scoped lang="less">


</style>
