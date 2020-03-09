<template>
	<div>
		<div class="formWrap">
			<mt-cell title="请输入身份确认信息" class="formTitle"></mt-cell>
			<mt-field label="身份证号" placeholder="请输入身份证号" v-model="IDNumber"></mt-field>
			<div>
				<mt-button type="primary" plain @click.native="handleSubmit" class="submitBtn">开始填写</mt-button>
			</div>
		</div>
		<mt-popup
		  	v-model="warningVisible"
		  	position="top">
		  	请正确输入18位身份证号！
		</mt-popup>
	</div>
</template>

<script>
	export default({
		name: 'login',
		data () {
			return {
				IDNumber: '',
				warningVisible: false,
				t: null
			}
		},
		methods: {
			handleSubmit () {
				let id = this.IDNumber.trim()
				if (!/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(id)) {
					if (!this.t) {
						this.warningVisible = true
						this.t = setTimeout(() => {
							this.warningVisible = false
							this.t = null
						}, 2000)
					}
					return
				}
				this.$router.push({
					path: '/home',
					query: {
						IDNumber: id
					}
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	.formWrap {
		margin-top: 1rem;
		.formTitle {
			font-weight: bold;
		}
		.submitBtn {
			width: 95%;
			margin-top: 1rem;
		}
	}
	/deep/ .v-modal {
		height: 50px;
	}
	/deep/ .mint-popup {
		background: transparent;
		font-size: .4rem;
		color: white;
		line-height: 50px;
	}
</style>
