import { Component, HostBinding, Input, OnInit, effect } from "@angular/core";
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { filter } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { RippleModule } from "primeng/ripple";
import { MenuItem } from "primeng/api";
import { LayoutService } from "../service/layout.service";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "[app-menuitem]",
  standalone: true,
  imports: [CommonModule, RouterModule, RippleModule, TranslateModule],
  template: `
    <ng-container>
      <div
        *ngIf="root && item?.visible !== false && item?.label"
        class="layout-menuitem-root-text"
      >
        {{ item?.label ?? "" | translate }}
      </div>

      <a
        *ngIf="(!item?.routerLink || item?.items) && item?.visible !== false"
        [attr.href]="item?.url"
        (click)="itemClick($event)"
        [ngClass]="item?.styleClass"
        [attr.target]="item?.target"
        tabindex="0"
        pRipple
      >
        <i [ngClass]="item?.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{
          item?.label ?? "" | translate
        }}</span>
        <i
          *ngIf="item?.items"
          class="pi pi-fw pi-angle-down layout-submenu-toggler"
        ></i>
      </a>

      <a
        *ngIf="item?.routerLink && !item?.items && item?.visible !== false"
        (click)="itemClick($event)"
        [ngClass]="item?.styleClass"
        [routerLink]="item?.routerLink"
        routerLinkActive="active-route"
        [routerLinkActiveOptions]="{
          paths: 'exact',
          queryParams: 'ignored',
          matrixParams: 'ignored',
          fragment: 'ignored',
        }"
        [fragment]="item?.fragment"
        [queryParamsHandling]="item?.queryParamsHandling"
        [preserveFragment]="item?.preserveFragment"
        [skipLocationChange]="item?.skipLocationChange"
        [replaceUrl]="item?.replaceUrl"
        [state]="item?.state"
        [queryParams]="item?.queryParams"
        [attr.target]="item?.target"
        tabindex="0"
        pRipple
      >
        <i [ngClass]="item?.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{
          item?.label ?? "" | translate
        }}</span>
        <i
          *ngIf="item?.items"
          class="pi pi-fw pi-angle-down layout-submenu-toggler"
        ></i>
      </a>

      <ul
        *ngIf="item?.items && item?.visible !== false"
        [@children]="submenuAnimation"
      >
        <ng-template ngFor let-child let-i="index" [ngForOf]="item?.items">
          <li
            app-menuitem
            [item]="child"
            [index]="i"
            [parentKey]="key"
            [class]="child['badgeClass']"
          ></li>
        </ng-template>
      </ul>
    </ng-container>
  `,
  animations: [
    trigger("children", [
      state("collapsed", style({ height: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "collapsed <=> expanded",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
    ]),
  ],
  styles: [
    `
      :host {
        display: block;
      }

      :host li {
        padding: 0;
      }

      :host li a {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-radius: 20px;
        margin: 0.25rem 0;
        color: white;
        text-decoration: none;
        transition: background-color 0.2s;
        font-size: 0.95rem;
      }

      :host:not(.layout-root-menuitem) {
        padding-left: 1.5rem;
      }

      :host li a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      :host(.active-menuitem) > a {
        background-color: rgba(255, 255, 255, 0.25);
        color: white;
        font-weight: 600;
      }

      :host ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      :host .layout-menuitem-root-text {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        padding: 1rem 1rem 0.5rem 1rem;
        text-transform: uppercase;
        font-weight: 700;
      }

      :host .layout-menuitem-icon {
        margin-right: 0.75rem;
      }

      :host .layout-submenu-toggler {
        margin-left: auto;
        transition: transform 0.2s;
      }

      :host(.active-menuitem) .layout-submenu-toggler {
        transform: rotate(-180deg);
      }
    `,
  ],
})
export class AppMenuitem implements OnInit {
  @Input() item?: MenuItem;
  @Input() index!: number;
  @Input() @HostBinding("class.layout-root-menuitem") root!: boolean;
  @Input() parentKey!: string;

  active: boolean = false;
  key: string = "";

  constructor(
    private router: Router,
    private layoutService: LayoutService,
    private translateService: TranslateService
  ) {
    effect(() => {
      this.active = this.layoutService.activeMenuKey() === this.key;
    });
  }

  ngOnInit() {
    this.key = this.parentKey
      ? `${this.parentKey}-${this.index}`
      : `${this.index}`;

    this.checkIfActiveByRoute();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkIfActiveByRoute();
      });
  }

  checkIfActiveByRoute() {
    if (this.item?.routerLink && Array.isArray(this.item.routerLink)) {
      const url = this.item.routerLink[0];
      const isActive = this.router.isActive(url, {
        paths: "exact",
        queryParams: "ignored",
        matrixParams: "ignored",
        fragment: "ignored",
      });

      if (isActive) {
        this.layoutService.onMenuStateChange({
          key: this.key,
          routeEvent: true,
        });
      }
    }
  }

  itemClick(event: Event) {
    if (this.item?.disabled) {
      event.preventDefault();
      return;
    }

    if (this.item?.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    if (this.item?.items) {
      this.active = !this.active;
    } else {
      this.layoutService.onMenuStateChange({ key: this.key });
    }
  }

  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }

  @HostBinding("class.active-menuitem")
  get activeClass() {
    return this.active && !this.root;
  }
}
