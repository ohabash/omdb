
import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'app';
  movies: any;
  query: string = 'limit'; // default query

  constructor() {
    this.onQuery(this.query);
  }

  search( movieTitle: string) {
     return  axios.get('https://www.omdbapi.com/?apikey=f4e09aec&&s=' + movieTitle).then(function(response) {
        return response.data.Search;
    }).catch(function(error) {
           console.error(error);
    });
  }

  onQuery(q) {
    this.search(q).then((returnVal) => {
      this.movies = returnVal;
      console.log(this.movies);
    }).catch(err => console.log('Axios err: ', err));
  }

}