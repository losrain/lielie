<template>
<div class="login">
  <h1>注册</h1>
  <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名字">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="ruleForm2.userpwd" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model.number="ruleForm2.userage"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</div>  
</template>


<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      ruleForm2: {
        username: "",
        userpwd: "",
        userage: ""
      }
    };
  },
  mounted() {
    this.setPageClass('user_register');
  },
  methods: {
    ...mapActions([
      'setPageClass'
    ]),
    submitForm() {
      var self = this;
      this.$http("http://localhost:3300/signin", self.ruleForm2)
        .then(function(response) {
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
