import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-seo',
  templateUrl: './page-seo.component.html',
})
export class PageSeoComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
