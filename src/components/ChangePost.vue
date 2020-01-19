<template>
  <section>
		<div class="container">
			<slot><h1></h1></slot>
			<form @submit.prevent="onSubmit">
				<b-field label="Название статьи">
					<b-input type="text"
							placeholder="Название статьи"
							v-model.trim="title">
					</b-input>
				</b-field>

				<b-field label="Описание">
					<b-input type="textarea"
							placeholder="Описание"
							v-model.trim="description">
					</b-input>
				</b-field>

				<b-field :message="message">
					<div class="control">
						<button class="button is-primary">Добавить</button>
					</div>
				</b-field>
			</form>
		</div>
	</section>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'ChangePost',

		props: {
			id: Number
		},

		data() {
			return {
				post: null,
				title: '',
				description: '',
				message: ''
			}
		},
		
		methods: {
			...mapActions('medium', ['addPost', 'editPost']),
			onSubmit() {
				if (this.title == '' || this.description == '') {
					this.message = 'Поля не должны быть пустыми'
					return
				}

				if (this.post) {
					let data = {
						id: this.post.id,
						title: this.title,
						description: this.description,
						claps: this.post.claps,
						createdAt: this.post.createdAt,
						updateAt: new Date(),
						userId: this.getLoggedUser.id
					}

					this.editPost({payload: data})
				} else {
					let data = {
						title: this.title,
						description: this.description,
						claps: 0,
						createdAt: new Date(),
						updateAt: new Date(),
						userId: this.getLoggedUser.id
					}

					this.addPost({payload: data})
				}

				this.title = ''
				this.description = ''
			}
		},

		created() {
			if (this.id) {
				let post = this.getPostById(this.id)
				this.post = post
				this.title = post.title
				this.description = post.description
			}

		},

		computed: {
			...mapGetters('medium', ['getLoggedUser', 'getPostById'])
		}
	}
</script>

<style lang="scss">
	.field {
		padding: 5px 15px;
	}
	h1 {
		text-align: center;
    padding-top: 2rem !important;
    font-size: 2rem !important;
    font-weight: 500 !important;
	}
</style>