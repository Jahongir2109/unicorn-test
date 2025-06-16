import { Component, OnInit, computed } from "@angular/core";
import { MenuItem } from "primeng/api";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StyleClassModule } from "primeng/styleclass";
import { AppConfigurator } from "./app.configurator";
import { LayoutService } from "../service/layout.service";
import { InputTextModule } from "primeng/inputtext";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-topbar",
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    AppConfigurator,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    MenuModule,
    ButtonModule,
    TranslateModule,
  ],
  styles: [
    `
      .profile-button,
      .translate-button {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        border: none;
        display: flex;
        align-items: center;
      }

      .profile-button .pi,
      .translate-button .pi,
      .translate-button .flag {
        color: white;
        margin-right: 0.5rem;
      }

      .translate-button .pi-angle-down {
        margin-left: 0.5rem;
        margin-right: 0;
      }

      .flag {
        width: 20px;
        height: 15px;
        background-size: cover;
        display: inline-block;
        margin-right: 0.5rem;
      }

      .flag-uz {
        background-image: url("/assets/flags/uz.png");
      }

      .flag-ru {
        background-image: url("/assets/flags/ru.png");
      }

      .flag-us {
        background-image: url("/assets/flags/us.png");
      }

      .active-language-item a {
        background-color: rgba(255, 255, 255, 0.3);
        font-weight: bold;
      }
    `,
  ],
  template: `
    <div
      class="layout-topbar bg-light-blue text-white flex items-center justify-between"
    >
      <div class="layout-topbar-logo-container flex items-center">
        <button
          class="layout-menu-button layout-topbar-action"
          (click)="layoutService.onMenuToggle()"
        >
          <i class="pi pi-bars text-white"></i>
        </button>
        <a class="layout-topbar-logo" routerLink="/">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8389 27.2897L0.786369 12.7825L4.033 14.4057H14.068V21.4057L15.8389 27.2897Z"
              fill="url(#paint0_linear_309_947)"
            />
            <path
              d="M0 10.3478V0H13.872C21.0539 0 24.7399 4.66667 26.2682 7.4058C28.1927 10.8551 28.2829 15.8261 27.6455 17.9565C25.7637 24.2464 21.3491 28 17.9057 28C15.4461 28 14.0359 25.3623 14.0687 24.0435V21.4058C19.5782 21.4058 20.8899 16.7391 20.8571 14.4058V13.7971C20.8571 10.0435 17.1186 7.4058 14.659 7.4058H7.18194V14.4058H3.93531C1.81024 14.4058 0 12.5797 0 10.3478Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_309_947"
                x1="13.3326"
                y1="15.1666"
                x2="8.83259"
                y2="20.4999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#33FEEB" />
                <stop offset="0.800347" stop-color="#01CCB9" />
                <stop offset="1" stop-color="#15E0CD" />
              </linearGradient>
            </defs>
          </svg>
          <span class="text-white">Digital Office</span>
        </a>
      </div>

      <p-iconfield class="w-96">
        <p-inputicon class="pi pi-search text-white" />
        <input
          pInputText
          type="text"
          placeholder="Search"
          class="rounded-full w-full"
          style="background-color: rgba(255, 255, 255, 0.2); border: none; color: white; padding-left: 2.5rem;"
        />
      </p-iconfield>

      <div class="layout-topbar-actions flex items-center">
        <div class="layout-config-menu">
          <button
            type="button"
            class="layout-topbar-action"
            (click)="toggleDarkMode()"
          >
            <i
              [ngClass]="{
                'pi ': true,
                'pi-moon': layoutService.isDarkTheme(),
                'pi-sun': !layoutService.isDarkTheme(),
              }"
            ></i>
          </button>
          <div class="relative">
            <button
              class="layout-topbar-action layout-topbar-action-highlight"
              pStyleClass="@next"
              enterFromClass="hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
            >
              <i class="pi pi-palette"></i>
            </button>
            <app-configurator />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-calendar"></i>
            <span>18:08</span>
          </button>
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-inbox"></i>
          </button>
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-search"></i>
          </button>
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-th-large"></i>
          </button>

          <p-menu
            #profileMenu
            [model]="profileMenuItems"
            [popup]="true"
          ></p-menu>
          <button
            type="button"
            pButton
            icon="pi pi-user"
            label="ABBOS XAZRATOV"
            class="profile-button"
            (click)="profileMenu.toggle($event)"
          ></button>

          <p-menu
            #translateMenu
            [model]="translateMenuItems()"
            [popup]="true"
          ></p-menu>
          <button
            type="button"
            pButton
            [icon]="currentLanguageFlag()"
            [label]="currentLanguageLabel() | translate"
            class="translate-button"
            (click)="translateMenu.toggle($event)"
          >
            <i class="pi pi-angle-down ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AppTopbar implements OnInit {
  profileMenuItems!: MenuItem[];

  translateMenuItems = computed(() => {
    const currentLang = this.layoutService.layoutConfig().language ?? "uz";
    return [
      {
        label: this.translateService.instant("LANGUAGE_MENU.UZBEK"),
        icon: "flag flag-uz",
        command: () => this.layoutService.onLanguageChange("uz"),
        styleClass: currentLang === "uz" ? "active-language-item" : "",
      },
      {
        label: this.translateService.instant("LANGUAGE_MENU.RUSSIAN"),
        icon: "flag flag-ru",
        command: () => this.layoutService.onLanguageChange("ru"),
        styleClass: currentLang === "ru" ? "active-language-item" : "",
      },
      {
        label: this.translateService.instant("LANGUAGE_MENU.ENGLISH"),
        icon: "flag flag-us",
        command: () => this.layoutService.onLanguageChange("en"),
        styleClass: currentLang === "en" ? "active-language-item" : "",
      },
    ];
  });

  currentLanguageLabel = computed(() => {
    const lang = this.layoutService.layoutConfig().language ?? "uz";
    switch (lang) {
      case "uz":
        return this.translateService.instant("LANGUAGE_MENU.UZBEK");
      case "ru":
        return this.translateService.instant("LANGUAGE_MENU.RUSSIAN");
      case "en":
        return this.translateService.instant("LANGUAGE_MENU.ENGLISH");
      default:
        return this.translateService.instant("LANGUAGE_MENU.UZBEK");
    }
  });

  currentLanguageFlag = computed(() => {
    const lang = this.layoutService.layoutConfig().language ?? "uz";
    switch (lang) {
      case "uz":
        return "flag flag-uz";
      case "ru":
        return "flag flag-ru";
      case "en":
        return "flag flag-us";
      default:
        return "flag flag-uz";
    }
  });

  constructor(
    public layoutService: LayoutService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.profileMenuItems = [
      { label: "Profile", icon: "pi pi-user", routerLink: ["/profile"] },
      { label: "Settings", icon: "pi pi-cog", routerLink: ["/settings"] },
      { separator: true },
      { label: "Logout", icon: "pi pi-sign-out", routerLink: ["/auth/login"] },
    ];
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
