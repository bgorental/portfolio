import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-virtufit',
  templateUrl: './virtufit.component.html',
  styleUrls: ['./virtufit.component.scss']
})
export class VirtufitComponent implements OnInit {
  total_likes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTotalLikes();
  }

  onpdf(link: any) {
    debugger;
    window.open(
      link
    );
  }

  getTotalLikes() {
    this.http.get(
      "https://virtufit-de034-default-rtdb.firebaseio.com/likes.json"
    ).subscribe((data) => {
      this.total_likes = data;
      console.log('total_likes', this.total_likes);
    })
  }

  onLike() {
    debugger;
    console.log('total_likes', this.total_likes);
    this.total_likes += 1;
    this.http.put(
      "https://virtufit-de034-default-rtdb.firebaseio.com/likes.json", this.total_likes
    ).subscribe((data) => {
      console.log(data);
      this.getTotalLikes();
    })
  }
}
