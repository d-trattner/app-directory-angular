import { Component, ElementRef, OnInit } from '@angular/core';
import { DnnAppComponent, DnnAngular } from "@2sic.com/dnn-sxc-angular";

import { ApiResourceFactory } from "./2sxc/sxc-api.service";

import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent implements OnInit {

  data: any;

  status: string = "Connecting...";

  constructor(
    element: ElementRef,
    dnnNg: DnnAngular,
    private api: ApiResourceFactory
  ) {
    super(element, dnnNg);
  }

  ngOnInit() {
    this.api.resource<Data>('Api/ApiGet').get().first().toPromise().then(d => {
      this.data = d;
      console.log(d);
      this.status = "Data received... (@console)";
    });
  }

}