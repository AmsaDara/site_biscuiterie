import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArticleService } from './articles.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<any> {
  
  constructor(private articleService: ArticleService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    return this.articleService.getArticleById(route.paramMap.get('id') as string);
  }
  
}