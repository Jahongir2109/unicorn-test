import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AppMenuitem } from "./app.menuitem";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li
        app-menuitem
        *ngIf="!item.separator"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul> `,
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: "ICHKI HUJJATLAR",
        items: [
          {
            label: "MENU.HOME",
            icon: "pi pi-fw pi-home",
            routerLink: ["/"],
          },
          {
            label: "MENU.CALENDAR",
            icon: "pi pi-fw pi-calendar",
            routerLink: ["/uikit/calendar"],
          },
          {
            label: "MENU.MY_DOCUMENTS",
            icon: "pi pi-fw pi-inbox",
            routerLink: ["/uikit/button"],
          },
          {
            label: "MENU.SENT",
            icon: "pi pi-fw pi-send",
            routerLink: ["sent"],
            items: [
              {
                label: "MENU.MESSAGES",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "MENU.RECEIVED",
            icon: "pi pi-fw pi-download",
            routerLink: ["receive"],
            items: [
              {
                label: "MENU.MESSAGES",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "MENU.FOR_APPROVAL",
            icon: "pi pi-fw pi-comments",
            routerLink: ["/uikit/media"],
          },
          {
            label: "MENU.RESOLUTION",
            icon: "pi pi-fw pi-check-square",
            routerLink: ["/uikit/message"],
          },
          {
            label: "MENU.FOR_SIGNATURE",
            icon: "pi pi-fw pi-pencil",
            routerLink: ["/uikit/misc"],
          },
          {
            label: "MENU.SECTOR_CARD",
            icon: "pi pi-fw pi-briefcase",
            routerLink: ["input"],
            items: [
              {
                label: "MENU.MESSAGES",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "MENU.DEPARTMENT_DOCUMENTS",
            icon: "pi pi-fw pi-folder",
            routerLink: ["/uikit/timeline"],
          },
          {
            label: "MENU.EDITOR",
            icon: "pi pi-fw pi-cog",
            routerLink: ["/uikit/table"],
          },
        ],
      },
      {
        label: "STATISTIKA",
        items: [
          {
            label: "MENU.STATISTICS",
            icon: "pi pi-fw pi-chart-bar",
            routerLink: ["/uikit/tree"],
          },
          {
            label: "MENU.REPORTS",
            icon: "pi pi-fw pi-file",
            routerLink: ["uikit/menu"],
          },
        ],
      },
    ];
  }
}
