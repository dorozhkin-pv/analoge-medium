<template>
	<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<router-link class="navbar-item" :to="{name: 'home'}">
					<img src="https://regnum.ru/uploads/pictures/news/2015/11/13/regnum_picture_144736430464322_normal.png">
				</router-link>

				<a role="button" class="navbar-burger burger" :class="active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
					@click="isActive = !isActive">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu" :class="active">
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<template v-if="getLoggedUser">
								<router-link class="button is-success" @click="logOut" v-if="getLoggedUser.role == 'writer'" :to="{name: 'add-post'}">
									Добавить статью
								</router-link>
								<span class="logged-user__login">{{ getLoggedUser.login }}</span>
								<button class="button is-primary" @click="logOut">
									Выйти
								</button>
							</template>

							<template v-else>
								<router-link class="button is-primary" :to="{name: 'login'}">
									Логин
								</router-link>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>	
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from 'vuex'
	import * as M from '@/store/medium/mutation_types'

	export default {
		name: 'NavBar',

		data() {
			return {
				isActive: false
			}
		},

		methods: {
			...mapActions('medium', ['getPosts']),
			...mapMutations('medium', [M.SET_USER, M.DELETE_LOGGED_USER]),
			logOut() {
				this[M.DELETE_LOGGED_USER]()
				sessionStorage.setItem('login', '')
				if (this.$route.name != 'home') {
					this.$router.push({name: 'home'})
				}
			}
		},

		created() {
			this.getPosts()
			if (sessionStorage.getItem('login')) {
				this[M.SET_USER]({payload: JSON.parse(sessionStorage.getItem('login'))})
			}
		},

		computed: {
			...mapGetters('medium', ['getLoggedUser']),
			active() {
				return this.isActive ? {'is-active': true} : null
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logged-user__login {
		margin-bottom: 0.5rem;
		margin-right: 0.5rem;
	}
</style>