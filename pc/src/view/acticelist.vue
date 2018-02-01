<template>
<div class="arctice">
  <h1>文章列表<button @click="toAdd">添加文章</button></h1>
  <div><el-row><el-col :span="6"><el-input v-model="title" placeholder="请输入标题"></el-input></el-col>
  <el-col :span="6"><el-button type="primary" @click="submitForm">查询</el-button></el-col></el-row></div>
  <div>
      <p v-for="(item, key) in arctice" :key = "key">{{item.title}}<span>{{item.createTime}}</span></p>
  </div>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>  
</template>


<script>
export default {
  data() {
    return {
      arctice: [],
      title: '',
      pageSize: 5,
      total: 0,
      currentPage: 1
    };
  },
  mounted() {
      this.submitForm();
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.submitForm();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.submitForm();
    },
    toAdd(){
        this.$router.push({name: 'artice'})
    },
    submitForm() {
      var self = this;
      self.$http("http://localhost:3300/arctice/list", {title: self.title, pageSize: self.pageSize, currentPage: self.currentPage})
        .then(function(res) {
          self.arctice = res.data.data;
          self.total = res.data.total;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
.arctice{
    >div{
        p{
            text-align: left;
            span{
                float: right;
            }
        }
    }
}
</style>