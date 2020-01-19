<template>
	<footer class="card-footer">
		<p class="card-footer-item column is-4 is-offset-8">
			<span>
				<div class="buttons">
					<router-link :to="{name: 'edit-post', params: {id: id}}">
						<b-button type="is-primary" class="btn__text">
							<i class="mdi mdi-lead-pencil mdi-24px"></i>
							Изменить	
						</b-button>
					</router-link>
					
					<b-button type="is-primary" class="btn__text" @click="removePost">
						<i class="mdi mdi-delete mdi-24px"></i>
						Удалить	
					</b-button>
				</div>
			</span>
		</p>
	</footer>	
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'CardControls',

		props: {
			id: Number
		},

		methods: {
			...mapActions('medium', ['deletePost']),
			removePost() {
				this.deletePost({payload: this.id})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn__text {
		line-height: 0;
		margin-right: 0.5rem;
	}
</style>