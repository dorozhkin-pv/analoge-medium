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
							<router-link class="button is-primary" :to="{name: 'login'}">
								Логин
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>	
</template>

<script>
	export default {
		name: 'NavBar',

		data() {
			return {
				isActive: false
			}
		},

		computed: {
			active() {
				return this.isActive ? {'is-active': true} : null
			}
		},
	}
</script>