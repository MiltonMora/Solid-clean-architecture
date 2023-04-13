import { HttpClient } from './02-open-close-c';

export class TodoService { 

    constructor(private client: HttpClient) {}

    async getTodoItems() {
        const { data, status } = await this.client.get('https://jsonplaceholder.typicode.com/todos/');
        return { data, status };
    }
}


export class PostService {

    constructor(private client: HttpClient) {}

    async getPosts() {
        const { data, status } = await this.client.get('https://jsonplaceholder.typicode.com/posts');
        return { data, status };
    }
}


export class PhotosService {

    constructor(private client: HttpClient) {}

    async getPhotos() {
        const { data, status } = await this.client.get('https://jsonplaceholder.typicode.com/photos');
        return { data, status };
    }

}