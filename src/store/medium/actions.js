import * as M from './mutation_types'
import { apiService } from '@/services/'

export default {
	async getPosts({commit}, options = {}){
		const data = await apiService.getPosts(options)
		commit({ type: M.GET_POSTS, payload: data })
	},

	async getUsers({commit}){
		const data = await apiService.getUsers()
		commit({ type: M.GET_USERS, payload: data })
	},

	async incrementClap({commit}, {payload: post}){
		commit({ type: M.SET_INCREMENT, payload: post.id })

		let requestModel= {
			method: 'PATCH',
			body: JSON.stringify({claps: post.claps}),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		await apiService.incrementClap(post, requestModel)
	},

	async deletePost({dispatch}, {payload: id}){
		//commit({ type: M.DELETE_POST, payload: id })

		let requestModel= {
			method: 'DELETE'
		}
		await apiService.deletePost(id, requestModel)
		await dispatch('getPosts')
	},

	async addPost({dispatch}, {payload: post}){

		let requestModel= {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		await apiService.addPost(requestModel)
		alert('Статья успешно добавлена')
		//commit({ type: M.ADD_POST, payload: data })
		await dispatch('getPosts')
	},

	async editPost({commit}, {payload: post}){

		let requestModel= {
			method: 'PATCH',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		const data = await apiService.editPost(post, requestModel)
		alert('Статья успешно изменена')
		commit({ type: M.EDIT_POST, payload: data })
	}
}