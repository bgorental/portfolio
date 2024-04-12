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
      "https://drive.google.com/file/d/1lgAkYR7VEbHQ1HKOSeUf8X6E7EmUVNEN/view?usp=drive_link"
    );
  }

}
