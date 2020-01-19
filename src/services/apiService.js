export default class ApiService{
	constructor(){}
	
	async responseData(response) {
		if(response.status === 200 || response.status === 201){
			let data = await response.json()
			return data
		} else {
			throw new Error('Ошибка сервера')
		}
	}

	async getPosts({page = 1, limit = 10}){

		let response = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)

		if(response.status === 200){
			let data = {
				response: await response.json(),
				totalCount: parseInt(response.headers.get('X-Total-Count'))
			}
			return data
		} else {
			throw new Error('Ошибка сервера')
		}
	}

	async getUsers(){
		let response = await fetch(`http://localhost:3000/users`)
		return this.responseData(response)
	}
	
	async incrementClap(post, options){
		let response = await fetch(`http://localhost:3000/posts/${post.id}`, options)
		return this.responseData(response)
	}

	async deletePost(id, options){
		let response = await fetch(`http://localhost:3000/posts/${id}`, options)
		return this.responseData(response)
	}

	async addPost(options){
		let response = await fetch(`http://localhost:3000/posts`, options)
		return this.responseData(response)
	}

	async editPost(post, options){
		let response = await fetch(`http://localhost:3000/posts/${post.id}`, options)
		return this.responseData(response)
	}
}