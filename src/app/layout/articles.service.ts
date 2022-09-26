import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticle } from './article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient){}

  getAllArticle():Observable<any>{
     return this.http.get('http://localhost:3000/allArticle') as Observable<IArticle[]>
  }
  
  getFeaturedArticle():Observable<any>{
    return this.http.get('http://localhost:3000/featuredArticle') as Observable<IArticle[]>
  }

  // addMovie(movie:IMovie):Observable<IMovie>{
  //     return this.http.post(`${environment.BASE_API_URI}/movies`,movie) as Observable<IArticle>
  // }


  // updateMovie(movie:IMovie):Observable<any>{
  //   return this.http.put(`${environment.BASE_API_URI}/movies/${movie._id}`,movie)
  // }
}
