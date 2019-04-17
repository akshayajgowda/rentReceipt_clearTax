import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cleartax";
  tatents = [];
  tatent = {
    tatentName: "",
    address: "",
    ownerName: "",
    phone: "",
    atmnum: "",
    amount: "",
    startDate: "",
    lastDate: ""
  };

  
  @ViewChild("content") content: ElementRef;

  // printComponent(data1) {
  //   console.log()
  //   let printContents = document.getElementById(data1).innerHTML;
  //   let originalContents = document.body.innerHTML;

  //   document.body.innerHTML = printContents;

  //   window.print();

  //   document.body.innerHTML = originalContents;
  // }
  onPrintPDF() {
    this.tatents.push(this.tatent);

    let doc = new jsPDF();

    let e = {
      "#editor": function(element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: e
    });
    doc.save("test.pdf");
  }
}
