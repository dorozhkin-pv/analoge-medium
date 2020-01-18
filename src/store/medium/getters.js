export default {
	getPosts(state) {
		return state.posts
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