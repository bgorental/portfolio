import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onResume() {
    window.open(
      "https://drive.google.com/file/d/1G8LrdmvBIJzGe9LVFUBOG-O0cqEA4rUT/view"
    );
  }

}
