<template>
	<div>{{msg}}</div>
</template>

<script>
export default ({
  name: 'failed',
  data () {
    return {
      msg: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let msg = vm.$route.query.msg
      vm.msg = msg ? msg : '保存失败，无错误信息！'
    })
  }
})
</script>

<style lang="scss" scoped>
	div {
		margin: 50px auto;
		font-size: 18px;
		color: red;
	}
</style>
