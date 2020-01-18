export default class ApiService{
  constructor(){}

	async getPosts({page = 1}, options){
		//console.log(options)

		let response = await fetch(`http://localhost:3000/posts?_page=${page}`, options)
		//console.log(response)

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

	async getUsers(options){
		//console.log(options)

		let response = await fetch(`http://localhost:3000/users`, options)
		//console.log(response)

		if(response.status === 200){
			let data = await response.json()
			return data
		} else {
			throw new Error('Ошибка сервера')
		}
	}  
}