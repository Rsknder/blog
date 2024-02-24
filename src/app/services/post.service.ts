import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { DbCreateResponse, Post } from "../interfaces/interfaces";
import { environments } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) {

    }

    create(newPost: Post): Observable<Post> {
        return this.http.post(`${environments.dbUrl}/postsData.json`, newPost)
            .pipe(map((response: DbCreateResponse) => {
                return {
                    ...newPost,
                    id: response.name,
                    date: new Date(newPost.date)
                }


            }))
    }

    // получение постов

    getAll(): Observable<any> {

        return this.http.get(`${environments.dbUrl}/postsData.json`)

    }

    // получение постов версия 2

    getAllPostsForDS(): Observable<any> {
        var posts: any = []
        console.log("getAllPostsForDS")
        return this.http.get(`${environments.dbUrl}/postsData.json`)
            .pipe(
                map((response: { [index: string]: any }) => {
                    console.log(Object.keys(response).forEach((key, value) => {
                        console.log(key)
                        response[key].id = key
                        posts.push(response[key])

                        // =(response[key])

                    }))

                    console.log("posts:", posts)
                    return posts

                })
            )
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environments.dbUrl}/postsData/${id}.json`)
    }

    getPost(id: string): Observable<Post> {
        return this.http.get<Post>(`${environments.dbUrl}/postsData/${id}.json`)
    }

    updatePost(post: Post): Observable<Post> {
        return this.http.patch<Post>(`${environments.dbUrl}/postsData/${post.id}.json`, post)
    }

}