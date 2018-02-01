<template>
<div class="login">
  <h1>登陆</h1>
  <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名字">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="ruleForm2.userpwd" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">登陆</el-button>
      <el-button type="primary" @click="register">注册</el-button>
    </el-form-item>
  </el-form>
</div>  
</template>


<script>
export default {
  data() {
    return {
      ruleForm2: {
        username: "",
        userpwd: ""
      }
    };
  },
  methods: {
    register() {
      this.$router.push({name: 'register'})
    },
    submitForm() {
      var self = this;
      self.$http("http://localhost:3300/login", self.ruleForm2)
        .then(function(res) {
          if(res.success){
            self.$router.push({name: 'acticelist'});
          };
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
