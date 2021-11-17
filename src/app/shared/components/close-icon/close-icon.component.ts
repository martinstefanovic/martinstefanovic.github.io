import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuToggleService } from '@services/menu-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss'],
})
export class CloseIconComponent implements OnInit, OnDestroy {
  isOpen: boolean;
  styleClass;
  subscriptions: Subscription[] = [];

  constructor(private menuToggle: MenuToggleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.menuToggle.currentState.subscribe((state) => {
        this.toggle();
      })
    );
    this.isOpen = window.innerWidth < 500 ? false : true;
    this.toggle();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.styleClass = this.isOpen ? 'is-closed' : 'is-open';
  }
}
