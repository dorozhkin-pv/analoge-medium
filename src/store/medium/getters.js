export default {
	getPosts(state) {
		return state.posts
	},

	getPostById: state => id => {
		return state.posts.find(post => post.id == id)
	},

	getTotalCount(state) {
		return state.totalCount
	},

	getAllUsers(state) {
		return state.users
	},

	getLoggedUser(state) {
		return state.loggedUser
	}
}