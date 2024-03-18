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
      "https://drive.google.com/file/d/19Vl0iGxWr-CHTKIZ1LaxjH36Xa9SPu2h/view?usp=sharing"
    );
  }

}
