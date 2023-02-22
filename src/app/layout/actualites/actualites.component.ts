import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IArticle } from '../article.model';
import { ArticleService } from '../articles.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {

  articles?: any;
  router: any;

  constructor(
    private articleService: ArticleService,
    private snackBar:MatSnackBar ) {
  }
  
  ngOnInit() {
    this.articleService.getAllArticle().subscribe(data=>{
      if(data.status==="error"){
        this.snackBar.open(data.message,'x');
        this.articles=[];
      }else{
        this.articles=data.payload}
      }
      )
  }
  
  articleById(): void{
    //this.articleService.getarticleById(this.articleId).subscribe()
    this.router.navigate(['/articleBy_id/{{articles.id}}'])
  }


}
