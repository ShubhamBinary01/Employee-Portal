import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  isShow: boolean = true;
  forList = [1,'A', '@', 'true'];
  constructor() { }

  ngOnInit(): void {
  }

}
