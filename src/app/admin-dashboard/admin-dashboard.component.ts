import { LiteralExpr } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // offsetX: any;
  // offsetY: any;
  // x: any;
  // y: any;

  // zoom(e: any) {
  //   var zoomer = e.currentTarget;
  //   e.offsetX
  //     ? (this.offsetX = e.offsetX)
  //     : (this.offsetX = e.touches[0].pageX);
  //   e.offsetY
  //     ? (this.offsetY = e.offsetY)
  //     : (this.offsetX = e.touches[0].pageX);
  //   this.x = (this.offsetX / zoomer.offsetWidth) * 5000;
  //   this.y = (this.offsetY / zoomer.offsetHeight) * 5000;
  //   zoomer.style.backgroundPosition = this.x + "% " + this.y + "%";
  // }
}
