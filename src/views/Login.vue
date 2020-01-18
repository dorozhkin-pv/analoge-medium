<template>
	<section>
		<div class="container">
			<form @submit.prevent="onSubmit">
				<b-field label="Email"
					:type="validate">
					<b-input type="email"
							placeholder="Введите email"
							v-model.trim="email"
							maxlength="30">
					</b-input>
				</b-field>

				<b-field label="Password">
					<b-input type="password"
							placeholder="Введите пароль"
							v-model.trim="password"
							password-reveal>
					</b-input>
				</b-field>

				<b-field :message="message">
					<div class="control">
						<button class="button is-primary" :disabled="validate == 'is-danger'">Логин</button>
					</div>
				</b-field>
			</form>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from 'vuex'
	import * as M from '@/store/medium/mutation_types'

	export default {
		name: 'Login',

		data() {
			return {
				email: 'writer@mail.com',
				password: '123456',
				message: ''
			}
		},
		
		methods: {
			...mapActions('medium', ['getUsers']),
			...mapMutations('medium', [M.SET_USER]),
			async onSubmit() {
				await this.getUsers()

				let res = this.getAllUsers.some(user => {
					if (user.login == this.email) {
						if (user.password == this.password) {
							this[M.SET_USER]({payload: user})
							this.$router.push({name: 'home'})
							return user.password == this.password
						}
					}
				});

				if (!res) this.message = 'Неправильный логин или пароль'
			}
		},

		computed: {
			...mapGetters('medium', ['getAllUsers']),
			validate() {
				// eslint-disable-next-line no-useless-escape
				let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
				return reg.test(this.email) ? 'is-success' : 'is-danger'
			}
		},
	}
</script>

<style lang="scss">
	.field {
		padding: 5px 15px;
	}
</style>