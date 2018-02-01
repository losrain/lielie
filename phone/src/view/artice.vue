<template>
<div class="login">
  <h1>创建文章</h1>
  <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="标题">
      <el-input type="text" v-model="ruleForm2.title" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input type="textarea" v-model="ruleForm2.content" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</div>  
</template>


<script>
export default {
  data() {
    return {
      ruleForm2: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    submitForm() {
      var self = this;
      self.$http("http://localhost:3300/arctice/add", self.ruleForm2)
        .then(function(res) {
            if(res.success){
                self.$router.push({name: 'acticelist'})  
            }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
  .login{
    h1{
      text-align: center;
    }
    width: 500px;
    margin: auto;
  }
</style>