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

    getAllPostsForDS(): Observable<Post[]> {
        return this.http.get(`${environments.dbUrl}/postsData.json`)
            .pipe(
                map((response) => {
                    return []
                })
            )
    }

}