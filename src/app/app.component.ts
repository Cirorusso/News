import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nevs';
}
$(function(){
  $.ajax({
   type:'GET',
   url:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8ec58347383a461e8fbc05407c025e30&pageSize=10",
   data:'html',
   success: function(result){
      for(var i=0;i<result.totalResults;i++){
        $("table").append("<tr> <td>"+(result.articles[i].author)+"</td>"+"<td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].description)+"</td>");
      }
      $(function(){
        $("tr").on('mouseover', function(){
          $(this).animate({
            fontSize: "20px"}, 350);
        });
        $("tr").on('mouseout', function(){
          $(this).animate({fontSize: "16px"}, 200)
        });
      });
   },
   error: function(xhr){
   console.log("error")
   }
  });
  });
