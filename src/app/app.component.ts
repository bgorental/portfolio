import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "bgorental_portfolio";
  toggle_nav: boolean = false;

  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }

    else {
      this.navbarfixed = false;
    }
  }

  constructor(private router: Router) { }

  toggle_nav_fun() {
    this.toggle_nav = !this.toggle_nav;
  }

  onResume() {
    window.open(
      "https://drive.google.com/file/d/19Vl0iGxWr-CHTKIZ1LaxjH36Xa9SPu2h/view?usp=sharing"
    );
  }

  onLogo() {
    this.router.navigate(["/work"]);
  }
}
