import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IArticle } from '../article.model';
import { ArticleService } from '../articles.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}