import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public name: string = "";

  constructor() {}

  ngOnInit(): void {}

  submit() {
    alert("Success...  "+ this.name);
    this.name = "";
  }

  reset() {
    alert("Reset...  "+ this.name);
    this.name = "";
  }
}
