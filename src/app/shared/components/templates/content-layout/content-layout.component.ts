import { AppConfig } from './../../../../core/config/config';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment.prod';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() formGroup: FormGroup;
  @Input() skeletonLoad: boolean = false;
  @Input() headerTitle: string;
  @Input() headerType: 'main' | 'inner';
  @Input() backPath: any[];
  @Input() showPreviewButton: boolean = false;
  @Input() showAddButton: boolean = false;
  @Input() showOnOff: boolean = true;
  @Output() onSubmit = new EventEmitter<any>();
  @Input() blockUiText: string;
  @Input() saveBtnText: string = 'Snimi';
  @Input() layoutType: 'page' | 'section' | 'post';
  // @Input() pageData: any;
  pageId;
  sectionId;
  dataForPage;

  subscriptions: Subscription[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get page ID
    if (this.layoutType === 'section') {
      this.pageId = +this.route.snapshot.params['sectionId'];
    } else if (this.layoutType === 'post') {
      this.pageId = +this.route.snapshot.params['postId'];
    } else {
      this.pageId = +this.route.snapshot.params['id'];
    }
  }

  onSubmitForm() {
    this.onSubmit.emit(true);
  }
}
