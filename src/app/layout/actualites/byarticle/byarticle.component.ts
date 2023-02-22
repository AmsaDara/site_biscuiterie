import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from '../../article.model';
import { ArticleService } from '../../articles.service';

@Component({
  selector: 'app-byarticle',
  templateUrl: './byarticle.component.html',
  styleUrls: ['./byarticle.component.scss']
})
export class ByarticleComponent implements OnInit {

  currentArticle: IArticle= {
    title: '',
    description: '',
    mini_description:'',
    cover: '',
    
  };
  //courseToUpdate?:ICourse
  //context : 'ADD' | 'UPDATE' = 'ADD'
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe({
      next: (data) => {
        this.currentArticle = data['actualites']['payload'];
        console.log(this.currentArticle);
        
      },
      error: (error) => console.log(error),
    });
  }

  

}
