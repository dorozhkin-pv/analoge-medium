<template>
	<change-post :id="id">
		<h1>Редактирование статьи</h1>
	</change-post>
</template>

<script>
	import ChangePost from '@/components/ChangePost'

	export default {
		name: 'EditPost',

		props: {
			id: Number
		},

		components: {
			ChangePost
		}
	}
</script>