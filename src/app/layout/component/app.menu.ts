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
            label: "Bosh sahifa",
            icon: "pi pi-fw pi-home",
            routerLink: ["/"],
          },
          {
            label: "Taqvim",
            icon: "pi pi-fw pi-calendar",
            routerLink: ["/uikit/calendar"],
          },
          {
            label: "Mening hujjatlarim",
            icon: "pi pi-fw pi-inbox",
            routerLink: ["/uikit/button"],
          },
          {
            label: "Yuborilgan",
            icon: "pi pi-fw pi-send",
            routerLink: [],
            items: [
              {
                label: "Xabarlar",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "Kelib tushgan",
            icon: "pi pi-fw pi-download",
            routerLink: [],
            items: [
              {
                label: "Xabarlar",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "Kelishish uchun",
            icon: "pi pi-fw pi-comments",
            routerLink: ["/uikit/media"],
          },
          {
            label: "Rezolyutsiya",
            icon: "pi pi-fw pi-check-square",
            routerLink: ["/uikit/message"],
          },
          {
            label: "Imzolash uchun",
            icon: "pi pi-fw pi-pencil",
            routerLink: ["/uikit/misc"],
          },
          {
            label: "Sektor fishka",
            icon: "pi pi-fw pi-briefcase",
            routerLink: [],
            items: [
              {
                label: "Xabarlar",
                icon: "pi pi-fw pi-globe",
                routerLink: ["/uikit/input"],
              },
            ],
          },
          {
            label: "Bo'limim hujjatlari",
            icon: "pi pi-fw pi-folder",
            routerLink: ["/uikit/timeline"],
          },
          {
            label: "Tahrirchi",
            icon: "pi pi-fw pi-cog",
            routerLink: ["/uikit/table"],
          },
        ],
      },
      {
        label: "STATISTIKA",
        items: [
          {
            label: "Statistika",
            icon: "pi pi-fw pi-chart-bar",
            routerLink: ["/uikit/tree"],
          },
          {
            label: "Hisobotlar",
            icon: "pi pi-fw pi-file",
            routerLink: ["uikit/menu"],
          },
        ],
      },
    ];
  }
}
