import * as M from './mutation_types'
import { apiService } from '@/services/'

export default {
	async getPosts({commit}, requestModel= {}){
		const data = await apiService.getPosts(requestModel)
		commit({ type: M.GET_POSTS, payload: data })
	},

	async getUsers({commit}, requestModel= {}){
		const data = await apiService.getUsers(requestModel)
		commit({ type: M.GET_USERS, payload: data })
	}
}