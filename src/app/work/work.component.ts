import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {

  works = [
    {
      project_title: "VirtuFit",
      tag_line: "UX Project | Nov 24, 2023",
      brief: "Boosting conversion rates and engaging users, fostering customer loyalty.",
      image: "./assets/work/virtufit/virtufit-thumbnail-2.gif",
    },
    {
      project_title: "picazu",
      tag_line: "UX Project | Nov 24, 2022",
      brief: "Helps retailer to analyze products data and improve sales",
      image: "./assets/work/user_dashboard/Picazu-thumbnail.gif",
    },
    {
      project_title: "quickery",
      tag_line: "UX Project | Nov 24, 2022",
      brief: "",
      image: "./assets/work/quickery/quickery-thumbnail-2.gif",
    },
    {
      project_title: "SparkleClean",
      tag_line: "UX Project | Nov 24, 2022",
      brief: "",
      image: "./assets/work/medium_case-study/sparkleclean-thumbnail.gif",
    },
    {
      project_title: "Spotify",
      tag_line: "UX Project | Nov 24, 2022",
      brief: "",
      image: "./assets/work/medium_case-study/Spotify-thumbnail.gif",
    },


  ];

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void { }

  onResume() {
    window.open(
      "https://drive.google.com/file/d/19Vl0iGxWr-CHTKIZ1LaxjH36Xa9SPu2h/view?usp=sharing"
    );
  }

  onOkkular() {
    window.open(
      "https://www.okkular.io"
    );
  }

  onWork(work: string) {
    console.log("work", work);
    if (work == "quickery") {
      this.router.navigate(["/quickery"]);
    } else if (work == "picazu") {
      this.router.navigate(["/picazu"]);
    } else if (work == "Spotify") {
      window.open(
        "https://bgorental.medium.com/improving-spotify-music-apps-usability-through-heuristic-evaluation-fce329a4dd46"
      );
    } else if (work == "SparkleClean") {
      window.open(
        "https://bgorental.medium.com/multifunctional-kitchen-cleaning-device-6909cfadb446"
      );
    } else if (work == "VirtuFit") {
      this.router.navigate(["/virtufit"]);
    }
  }
}
