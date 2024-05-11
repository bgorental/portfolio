import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {

  project_arrow: any = './../../assets/work/arrow-icon-enable.png'

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onResume() {
    window.open(
      "https://drive.google.com/file/d/1eSH3LxOuSM5HgLw53vRGaZm1JnXnbdd3/view"
    );
  }

  onWork(work: string) {
    if (work == "spotify") {
      window.open(
        "https://bgorental.medium.com/improving-spotify-music-apps-usability-through-heuristic-evaluation-fce329a4dd46"
      );
    } else if (work == "sparkle") {
      window.open(
        "https://bgorental.medium.com/multifunctional-kitchen-cleaning-device-6909cfadb446"
      );
    } else if (work == 'admin_dashboard') {
      window.open(
        "https://drive.google.com/file/d/1Xavqzr2qSVXbozlM6-U2qOAl-QzdNrBM/view"
      );
    } else {
      this.router.navigate([`/${work}`]);
    }
  }
}
