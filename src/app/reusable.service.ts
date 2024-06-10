import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ReusableService {
  constructor() {}

  SocialMedia(link: any) {
    window.open(link);
  }

  Resume() {
    window.open(
      "https://drive.google.com/file/d/1S1UJc8aSxgRYyJzHDpuslUeGGdN1ahHJ/view"
    );
  }
}
