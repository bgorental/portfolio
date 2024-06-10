import { Component, OnInit } from "@angular/core";
import { ReusableService } from "../reusable.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private reusableService: ReusableService) {}

  ngOnInit(): void {}

  onResume() {
    this.reusableService.Resume();
  }
}
