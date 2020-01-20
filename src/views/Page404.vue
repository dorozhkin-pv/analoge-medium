<template>
<div class="container">
	<h1>404 Page not found</h1>
	<router-link :to="{name: 'home'}"><h6>На главную</h6></router-link>
</div>
</template>

<script>
export default {
	name: 'Page404'
}
</script>

<style lang="scss" scoped>
	.container {
		text-align: center;
	}
</style>