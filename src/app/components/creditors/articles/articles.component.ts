import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/Article.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { ArticleService } from 'src/app/services/Article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() creditorId!:number | undefined; 

  articleResponse !: CustomResponse;


  constructor(private articleService : ArticleService, private router : Router, private route:ActivatedRoute,){}

  ngOnInit(): void {
    this.articleService.articles$(this.creditorId as number).subscribe(response =>{
      this.articleResponse = response
    })

  }

  navigate(article: Article){
 
     if(article.type == 'ARTICLE_RECHARGE'){
      this.router.navigate(['recharge'],  {relativeTo: this.route, state: { article: article }} );
     }

     if(article.type == 'ARTICLE_ABONNEMENT'){
      this.router.navigate(['abonnement'],  {relativeTo: this.route, state: { articleId: article.id }} );
     }
     if(article.type == 'ARTICLE_EAU'){
      this.router.navigate(['abonnement'],  {relativeTo: this.route, state: { articleId: article.id }} );
     }
  }

}
