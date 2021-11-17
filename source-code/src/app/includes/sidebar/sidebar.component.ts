import { AppConfig } from '@config/config';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@config/sidebar-routes.config';
import { MenuToggleService } from '@services/menu-toggle.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  expand: boolean = false;
  menuItems: any[] = [];
  eventsSubject: Subject<void> = new Subject<void>();
  innerWidth: number;

  constructor(
    private menuToggle: MenuToggleService,
    public appConfig: AppConfig
  ) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);

    this.innerWidth = window.innerWidth;
    this.expand = this.innerWidth < 500 ? true : false;
  }

  collapseMenu() {
    this.expand = !this.expand;
    this.menuToggle.changeState(this.expand);
  }
}
