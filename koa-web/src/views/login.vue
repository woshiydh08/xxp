<template>
  <div>
    <h2>我是login</h2>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="Activity name">
        <a-input v-model="form.username" />
        <a-input-password placeholder="input password" v-model="form.password" />
        <a-button type="primary" @click="toSignIn">Sign in</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods:{
    toSignIn(){
      this.api.login(this.form).then(res =>{
        console.log(res, '成功了~~')
      },error=>{
        console.error(error, '失败了~~')

      })
    }
  }
}
</script>

<style>
</style>