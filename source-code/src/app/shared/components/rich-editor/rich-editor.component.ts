import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-rich-editor',
  templateUrl: './rich-editor.component.html',
  styleUrls: ['./rich-editor.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class RichEditorComponent implements OnInit {
  @Input('options') fieldOptions;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
