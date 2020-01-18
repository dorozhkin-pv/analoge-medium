<template>
	<div class="card">
		<div class="card-content">
			<p class="title">
				{{ post.title }}
			</p>
			<p class="subtitle">
				{{ post.description }}
			</p>
			<small><strong>{{ createdAt }} </strong>{{ createdAt | pluralize('день назад', 'дня назад', 'дней назад') }}</small>
		</div>
		<component :is="permission" />
	</div>
</template>

<script>
	import Claps from '@/components/Claps'
	import CardControls from '@/components/CardControls'
	import { mapGetters } from 'vuex'

	export default {
		name: 'Card',

		components: {
			readerPermission: Claps,
			writerPermission: CardControls
		},

		props: {
			post: Object
		},

		computed: {
			...mapGetters('medium', ['getLoggedUser']),
			permission() {
				return this.getLoggedUser ? this.getLoggedUser.role + '-permission' : null
			},
			createdAt() {
				return Math.floor((new Date() - new Date(this.post.createdAt)) / (1000 * 3600 * 24))
			}
		},

		filters: {
      pluralize: function (number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
      }
    }
	}
</script>
