<template>
	<section>
		<div class="container">
			<form @submit.prevent="onSubmit">
				<b-field label="Email"
					type="is-danger"
					message="This email is invalid">
					<b-input type="email"
							value="john@"
							maxlength="30">
					</b-input>
				</b-field>

				<b-field label="Password">
					<b-input type="password"
							value="iwantmytreasure"
							password-reveal>
					</b-input>
				</b-field>

				<b-field>
					<div class="control">
						<button class="button is-primary">Логин</button>
					</div>
				</b-field>
			</form>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Login',

		data() {
			return {

			}
		},
		
		methods: {
			onSubmit() {
				console.log(1)
			}
		},
	}
</script>

<style lang="scss">
	.field {
		padding: 5px 15px;
	}
</style>