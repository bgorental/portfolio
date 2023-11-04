import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickery',
  templateUrl: './quickery.component.html',
  styleUrls: ['./quickery.component.scss']
})
export class QuickeryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCaseStudy() {
    window.open('https://docs.google.com/presentation/d/1xyQt1EWk7UgpLL5W8ZH6dKzN9nkutSsVdPJ3HcQzQ0Q/edit?usp=sharing');
  }
}
