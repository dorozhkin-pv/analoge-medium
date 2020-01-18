<template>
	<footer class="card-footer">
		<p class="card-footer-item column is-4 is-offset-8">
			<span>
				<div class="buttons">
					<b-button type="is-primary" class="btn__text">
						<i class="mdi mdi-lead-pencil mdi-24px"></i>
						Изменить	
					</b-button>
					<b-button type="is-primary" class="btn__text">
						<i class="mdi mdi-delete mdi-24px"></i>
						Удалить	
					</b-button>
				</div>
			</span>
		</p>
	</footer>	
</template>

<script>
	export default {
		name: 'CardControls'
	}
</script>

<style lang="scss" scoped>
	.btn__text {
		line-height: 0;
	}
</style>