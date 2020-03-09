<template>
	<div class="formWrap">
		<mt-field label="员工编号" placeholder="请输入员工编号" v-model="form.employeeID" class="required"></mt-field>
		<mt-field label="员工姓名" placeholder="请输入员工姓名" v-model="form.name" class="required"></mt-field>
		<mt-field label="身份证号" placeholder="请输入身份证号" v-model="form.IDNumber" class="required" readonly disableClear></mt-field>
		<mt-radio title="性别" v-model="form.sex" :options="sexOptions" class="required"></mt-radio>
		<mt-field label="联系方式" placeholder="请输入联系方式" v-model="form.phone" class="required"></mt-field>
		<mt-field label="所属部门" placeholder="请选择部门" disableClear v-model="form.department" readonly
		    @click.native="handleClickDepartment" class="required">
		</mt-field>
		<mt-popup v-model="departmentVisible" position="bottom">
		  	<mt-picker :slots="departmentSlots" :visibleItemCount="7" @change="handleDepartmentChange" valueKey="department"></mt-picker>
		</mt-popup>
		<mt-field label="入职日期" placeholder="请选择入职日期" disableClear v-model="form.entryDate" readonly
		    @click.native="handleClickEntryDate" class="required">
		</mt-field>
		<mt-datetime-picker
			ref="entryDatePicker"
			v-model="entryDate"
		  	type="date"
		  	:startDate="new Date('1979-01-01')"
		  	:endDate="new Date()"
		  	year-format="{value} 年"
		  	month-format="{value} 月"
		  	date-format="{value} 日"
		  	@confirm="handleEntryDateConfirm">
		</mt-datetime-picker>
		<mt-field label="出生日期" placeholder="请选择出生日期" disableClear v-model="form.birthDate" readonly
		    @click.native="handleClickBirthDate" class="required">
		</mt-field>
		<mt-datetime-picker
			ref="birthDatePicker"
			v-model="birthDate"
		  	type="date"
		  	:startDate="new Date('1950-01-01')"
		  	:endDate="new Date()"
		  	year-format="{value} 年"
		  	month-format="{value} 月"
		  	date-format="{value} 日"
		  	@confirm="handleBirthDateConfirm">
		</mt-datetime-picker>
		<mt-field label="学历" placeholder="请选择学历" disableClear v-model="form.education" readonly @click.native="handleClickEducation"></mt-field>
		<mt-popup v-model="educationVisible" position="bottom">
		  	<mt-picker :slots="educationSlots" :visibleItemCount="7" @change="handleEducationChange"></mt-picker>
		</mt-popup>
		<mt-radio title="婚否" v-model="form.marriage" :options="yesNoOptions"></mt-radio>
		<mt-field label="年龄(岁)" placeholder="根据出生日期自动获取" v-model="form.age" readonly disableClear class="required"></mt-field>
		<mt-field label="工龄(年)" placeholder="根据入职日期自动获取" v-model="form.workingYears" readonly disableClear class="required"></mt-field>
		<mt-radio title="是否双职工" v-model="form.workingCouple" :options="yesNoOptions"></mt-radio>
		<mt-field label="职务" placeholder="请输入职务" v-model="form.job"></mt-field>
		<mt-field label="居住宿舍区" placeholder="请选择宿舍" disableClear v-model="form.dormitory" readonly @click.native="handleClickDormitory" class="required"></mt-field>
		<mt-popup v-model="dormitoryVisible" position="bottom">
		  	<mt-picker :slots="dormitorySlots" :visibleItemCount="7" @change="handleDormitoryChange" valueKey="name"></mt-picker>
		</mt-popup>
		<mt-field label="楼栋" placeholder="请选择楼栋" disableClear v-model="form.building" readonly @click.native="handleClickBuilding" class="required"></mt-field>
		<mt-popup v-model="buildingVisible" position="bottom">
		  	<mt-picker :slots="buildingSlots" :visibleItemCount="7" @change="handleBuildingChange" valueKey="name"></mt-picker>
		</mt-popup>
		<mt-field label="单元" placeholder="请选择单元" disableClear v-model="form.unit" readonly @click.native="handleClickUnit" class="required"></mt-field>
		<mt-popup v-model="unitVisible" position="bottom">
		  	<mt-picker :slots="unitSlots" :visibleItemCount="7" @change="handleUnitChange" valueKey="name"></mt-picker>
		</mt-popup>
		<mt-field label="楼层" placeholder="请选择楼层" disableClear v-model="form.floor" readonly @click.native="handleClickFloor" class="required"></mt-field>
		<mt-popup v-model="floorVisible" position="bottom">
		  	<mt-picker :slots="floorSlots" :visibleItemCount="7" @change="handleFloorChange" valueKey="name"></mt-picker>
		</mt-popup>
		<mt-field label="房间" placeholder="请选择房间" disableClear v-model="form.house" readonly @click.native="handleClickHouse" class="required"></mt-field>
		<mt-popup v-model="houseVisible" position="bottom">
		  	<mt-picker :slots="houseSlots" :visibleItemCount="7" @change="handleHouseChange" valueKey="name"></mt-picker>
		</mt-popup>
		<mt-field label="入住时间" placeholder="请选择入住时间" disableClear v-model="form.moveInDate" readonly @click.native="handleClickMoveInDate" class="required"></mt-field>
		<mt-datetime-picker
			ref="moveInDatePicker"
			v-model="moveInDate"
		  	type="date"
		  	:startDate="new Date('1979-01-01')"
		  	:endDate="new Date()"
		  	year-format="{value} 年"
		  	month-format="{value} 月"
		  	date-format="{value} 日"
		  	@confirm="handleMoveInDateConfirm">
		</mt-datetime-picker>
		<mt-field label="退宿时间" placeholder="请选择退宿时间" disableClear v-model="form.moveOutDate" readonly @click.native="handleClickMoveOutDate"></mt-field>
		<mt-datetime-picker
			ref="moveOutDatePicker"
			v-model="moveOutDate"
		  	type="date"
		  	:startDate="new Date('1979-01-01')"
		  	year-format="{value} 年"
		  	month-format="{value} 月"
		  	date-format="{value} 日"
		  	@confirm="handleMoveOutDateConfirm">
		</mt-datetime-picker>
		<div class="btnWrap"><mt-button type="primary" @click.native="handleSubmit">提交</mt-button></div>
	</div>
</template>

<script>
	import {getUserInfo, postUserInfo, getDepartment, getArea} from '@/api/api.js'
	import { MessageBox } from 'mint-ui';
	export default ({
		name: 'home',
		data () {
			return {
				form: {
					employeeID: '',
					name: '',
					IDNumber: '',
					sex: '',
					phone: '',
					department: '',
					entryDate: '',
					birthDate: '',
					education: '',
					marriage: '',
					age: '',
					workingYears: '',
					workingCouple: '',
					job: '',
					dormitory: '',
					building: '',
					unit: '',
					floor: '',
					house: '',
					moveInDate: '',
					moveOutDate: ''
				},
				sexOptions: [{
					label: '男',
					value: '1'
				}, {
					label: '女',
					value: '0'
				}],
				departmentSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [''],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        departmentVisible: false,
				educationSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: ['', '博士', '硕士', '本科', '大专', '中专', '中技', '高中', '初中及以下'],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        educationVisible: false,
		        entryDate: '',
		        birthDate: '',
				moveInDate: '',
				moveOutDate: '',
		        yesNoOptions: [{
		        	label: '是',
		        	value: '1'
		        }, {
		        	label: '否',
		        	value: '0'
		        }],
				dormitorySlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        dormitoryVisible: false,
				buildingSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        buildingVisible: false,
				unitSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        unitVisible: false,
				floorSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        floorVisible: false,
				houseSlots: [{
		          flex: 1,
		          defaultIndex: 0,
		          values: [],
		          className: 'slot1',
		          textAlign: 'center'
		        }],
		        houseVisible: false
			}
		},
		beforeRouteEnter (to, from, next) {
			next((vm) => {
				let id = vm.$route.query.IDNumber
				if (!id) {
					vm.$router.push('/login')
					return
				}
				getUserInfo({cardId: id}).then(res => {
					if (res.statusCode) {
						let msg = res.msg
						if (msg !== '新员工录入') {
							let info = JSON.parse(msg)
							// 部门
							vm.getDepartmentOptions().then((departmentsArr) => {
								var code = info.department
								departmentsArr.some((item, index) => {
									if (item.code === code) {
										vm.form.department = item.department
										vm.departmentSlots[0].defaultIndex = index
										return true
									} else {
										return false
									}
								})
							})
							// 学历
							vm.educationSlots[0].values.some((item, index) => {
								if (item === info.education) {
									vm.educationSlots[0].defaultIndex = index
									return true
								} else {
									return false
								}
							})
							 Promise.resolve().then(function(){
							 // 宿舍区
               						return	vm.getArea(0).then(res => {
               							console.log('宿舍区')
               								vm.dormitorySlots[0].values = res
               								let code = info.dormitory
               								res.some((item, index) => {
               									if (item.code === code) {
               										vm.form.dormitory = item.name
               										vm.dormitorySlots[0].defaultIndex = index
               										return true
               									} else {
               										return false
               									}
               								})

               							})
                  })
                  .then(function(a){
                       // 楼栋
                       							return	vm.getArea(info.dormitory).then(res => {
                       								console.log('楼栋')
                       									vm.buildingSlots[0].values = res
                       									let code = info.building
                       									res.some((item, index) => {
                       										if (item.code === code) {
                       											vm.form.building = item.name
                       											vm.buildingSlots[0].defaultIndex = index
                       											return true
                       										} else {
                       											return false
                       										}
                       									})

                       								})
                  })
                  .then(function(){
                      // 单元
                      							return	vm.getArea(info.building).then(res => {
                      								console.log('单元')
                      									vm.unitSlots[0].values = res
                      									let code = info.unit
                      									res.some((item, index) => {
                      										if (item.code === code) {
                      											vm.form.unit = item.name
                      											vm.unitSlots[0].defaultIndex = index
                      											return true
                      										} else {
                      											return false
                      										}
                      									})

                      								})
                  })
                  .then(function(){
                    // 楼层
                    							return	vm.getArea(info.unit).then(res => {
                    								console.log('楼层')
                    									vm.floorSlots[0].values = res
                    									let code = info.floor
                    									res.some((item, index) => {
                    										if (item.code === code) {
                    											vm.form.floor = item.name
                    											vm.floorSlots[0].defaultIndex = index
                    											return true
                    										} else {
                    											return false
                    										}
                    									})

                    								})
                   }).then(function(){
                     // 房间号
                      							return	vm.getArea(info.floor).then(res => {
                      								console.log('房间号')
                      									vm.houseSlots[0].values = res
                      									let code = info.room
                      									res.some((item, index) => {
                      										if (item.code === code) {
                      											vm.form.house = item.name
                      											vm.houseSlots[0].defaultIndex = index
                      											return true
                      										} else {
                      											return false
                      										}
                      									})

                      								})
                   })


							vm.form.age = info.age
							vm.form.birthDate = info.birthdate
							vm.birthDate = info.birthdate
							vm.form.IDNumber = info.cardId
							vm.form.moveInDate = info.checkDate
							vm.moveInDate = info.checkDate
							vm.form.education = info.education
							vm.form.name = info.employeeName
							vm.form.employeeID = info.employeeNumber
							vm.form.sex = info.gender.toString()
							vm.form.entryDate = info.hiredate
							vm.entryDate = info.hiredate
							vm.form.marriage = info.marriage ? info.marriage.toString() : ''
							vm.form.phone = info.phoneNumber
							vm.form.job = info.post
							let retireTime = info.retirementTime
							vm.form.moveOutDate = retireTime || ''
							vm.moveOutDate = retireTime || ''
							vm.form.workingCouple = info.workingCouple ? info.workingCouple.toString() : ''
							vm.form.workingYears = info.workingYears
							vm.form.dormitory = info.dormitory
//							vm.$nextTick(() => {
//								vm.form.building = info.building
//							vm.form.unit = info.unit
//							vm.form.floor = info.floor
//							vm.form.house = info.room
//							})
						} else {
							vm.form.IDNumber = id
							vm.getDepartmentOptions()

							vm.getArea(0).then((res) => {
								vm.dormitorySlots[0].values = res
								console.log('getarea',vm.dormitorySlots[0].values)
							})
						}
					} else {
						this.$router.push({
						  path: '/failed',
						  query: {
						    msg: res.msg
						  }
						})
					}
				})
			})
		},
		created () {
			let _this = this
		},
		methods: {
			getArea (code) {
				let params = {
					code: code
				}
				return new Promise((resolve, reject)=> {
					getArea(params).then(res => {
						if (res.statusCode) {
							let msg = JSON.parse(res.msg)
							let arr = ['', ...msg]
							resolve(arr)
						} else {
							reject()
							alert('error!')
						}
					})
				})
			},
			getDepartmentOptions () {
				return new Promise((resolve, reject) => {
					getDepartment().then(res => {
						if (res.statusCode) {
							let departments = JSON.parse(res.msg)
							this.departmentSlots[0].values = ['', ...departments]
							resolve(this.departmentSlots[0].values)
						} else {
							reject()
							alert('error!')
						}
					})
				})
			},
			handleSubmit () {
			  if (!this.form.employeeID || !this.form.name || this.form.sex === undefined || !this.form.phone
			   || !this.form.department || !this.form.entryDate || !this.form.birthDate
			    || !this.form.dormitory || !this.form.building || !this.form.unit || !this.form.floor || !this.form.house || !this.form.moveInDate) {
          MessageBox({
            title: '错误',
            message: res.msg
          })
			    return
			   }
				// 部门
				let departmentCode = ''
				this.departmentSlots[0].values.some((item, index) => {
					if (item.department === this.form.department) {
						departmentCode = item.code
						return true
					} else {
						return false
					}
				})
				// 宿舍区
				let dormitoryCode = ''
				this.dormitorySlots[0].values.some((item, index) => {
					if (item.name === this.form.dormitory) {
						dormitoryCode = item.code
						return true
					} else {
						return false
					}
				})
				// 楼栋
				let buildingCode = ''
				this.buildingSlots[0].values.some((item, index) => {
					if (item.name === this.form.building) {
						buildingCode = item.code
						return true
					} else {
						return false
					}
				})
				// 单元
				let unitCode = ''
				this.unitSlots[0].values.some((item, index) => {
					if (item.name === this.form.unit) {
						unitCode = item.code
						return true
					} else {
						return false
					}
				})
				// 楼层
				let floorCode = ''
				this.floorSlots[0].values.some((item, index) => {
					if (item.name === this.form.floor) {
						floorCode = item.code
						return true
					} else {
						return false
					}
				})
				// 房间
				let houseCode = ''
				this.houseSlots[0].values.some((item, index) => {
					if (item.name === this.form.house) {
						houseCode = item.code
						return true
					} else {
						return false
					}
				})
				let params = {
					age: this.form.age,
					birthdate: this.form.birthDate,
					building: buildingCode,
					cardId: this.form.IDNumber,
					checkDate: this.form.moveInDate,
					department: departmentCode,
					dormitory: dormitoryCode,
					education: this.form.education,
					employeeName: this.form.name,
					employeeNumber: this.form.employeeID,
					floor: floorCode,
					gender: this.form.sex,
					hiredate: this.form.entryDate,
					id: '',
					marriage: this.form.marriage,
					phoneNumber: this.form.phone,
					post: this.form.job,
					retirementTime: this.form.moveOutDate,
					room: houseCode,
					unit: unitCode,
					workingCouple: this.form.workingCouple,
					workingYears: this.form.workingYears
				}
				postUserInfo(params).then(res => {
					console.log(res)
					if (res.statusCode) {
					  this.$router.push('/success')
					} else {
						MessageBox({
              title: '错误',
              message: res.msg
            })
					}
				})
			},
			handleClickDepartment () {
				this.departmentVisible = true
			},
			handleDepartmentChange (picker, values) {
				this.form.department = values[0].department
			},
			handleClickEntryDate () {
				this.$refs.entryDatePicker.open();
			},
			handleEntryDateConfirm (val) {
				this.form.entryDate = this.dateFactor(val)
				let now = (new Date()).getTime()
				let workingDate = val.getTime()
				this.form.workingYears = ((now - workingDate) / (1000 * 3600 * 24 * 365.25)).toFixed(1)
			},
			handleClickBirthDate () {
				this.$refs.birthDatePicker.open();
			},
			handleBirthDateConfirm (val) {
				this.form.birthDate = this.dateFactor(val)
				let now = (new Date()).getTime()
				let birth = val.getTime()
				this.form.age = parseInt((now - birth) / (1000 * 3600 * 24 * 365.25))
			},
			dateFactor (val) {
			  let transformDate = new Date(val)
				let month = transformDate.getMonth() + 1
				let day = transformDate.getDate()
				let date = `${transformDate.getFullYear()}-${month > 9 ? month : ('0' + month)}-${day > 9 ? day : ('0' + day)}`
				return date
			},
			handleClickEducation () {
				this.educationVisible = true
			},
			handleEducationChange (picker, values) {
				this.form.education = values[0]
			},
			handleClickDormitory () {
				this.dormitoryVisible = true
			},
			handleDormitoryChange (picker, values) {
				if (values[0]) {
					this.form.dormitory = values[0].name
          this.form.building = ''
          this.form.unit = ''
          this.form.floor = ''
          this.form.house = ''
          this.buildingSlots[0].defaultIndex = 0
          this.unitSlots[0].defaultIndex = 0
          this.floorSlots[0].defaultIndex = 0
          this.houseSlots[0].defaultIndex = 0
					// 获取楼栋，清空后续信息
					this.getArea(values[0].code).then(res => {
						this.buildingSlots[0].values = res
					})
				}
			},
			handleClickBuilding () {
				this.buildingVisible = true
			},
			handleBuildingChange (picker, values) {
				if (values[0]) {
					this.form.building = values[0].name
          this.form.unit = ''
          this.form.floor = ''
          this.form.house = ''
          this.unitSlots[0].defaultIndex = 0
          this.floorSlots[0].defaultIndex = 0
          this.houseSlots[0].defaultIndex = 0
					// 单元
					this.getArea(values[0].code).then(res => {
						this.unitSlots[0].values = res
					})
				}
			},
			handleClickUnit () {
				this.unitVisible = true
			},
			handleUnitChange (picker, values) {
				if (values[0]) {
					this.form.unit = values[0].name
          this.form.floor = ''
          this.floorSlots[0].defaultIndex = 0
          this.form.house = ''
          this.houseSlots[0].defaultIndex = 0
					// 楼层
					this.getArea(values[0].code).then(res => {
						this.floorSlots[0].values = res
					})
				}
			},
			handleClickFloor () {
				this.floorVisible = true
			},
			handleFloorChange (picker, values) {
				if (values[0]) {
					this.form.floor = values[0].name
          this.form.house = ''
          this.houseSlots[0].defaultIndex = 0
					// 房间号
					this.getArea(values[0].code).then(res => {
						this.houseSlots[0].values = res
					})
				}
			},
			handleClickHouse () {
				this.houseVisible = true
			},
			handleHouseChange (picker, values) {
				if (values[0]) {
					this.form.house = values[0].name
				}
			},
			handleClickMoveInDate () {
				this.$refs.moveInDatePicker.open();
			},
			handleMoveInDateConfirm (val) {
				this.form.moveInDate = this.dateFactor(val)
			},
			handleClickMoveOutDate () {
				this.$refs.moveOutDatePicker.open();
			},
			handleMoveOutDateConfirm (val) {
				this.form.moveOutDate = this.dateFactor(val)
			},
		}
	})
</script>

<style lang="scss" scoped>
.formWrap {
	text-align: left;
	/deep/ .mint-field {
		margin-top: 6px;
	}
	.btnWrap {
		text-align: center;
		/deep/ .mint-button--primary {
			width: 95%;
			margin: 15px auto 30px;
		}
	}
	/deep/ .mint-radiolist-title {
		font-size: 16px;
	}
	/deep/ .mint-popup-bottom {
		width: 100%;
	}
	.required /deep/ .mint-cell-text:after, .required  /deep/ .mint-radiolist-title:after {
	  content: '*';
	  color: red;
	  margin-left: 2px;
	}
}
</style>
