import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { RippleModule } from "primeng/ripple";
import { AppFloatingConfigurator } from "../../layout/component/app.floatingconfigurator";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    AppFloatingConfigurator,
    TranslateModule,
  ],
  template: `
    <app-floating-configurator />
    <div
      class="min-h-screen flex items-center justify-center relative overflow-hidden w-full"
    >
      <div class="flex w-full h-full">
        <!-- Left Section (QR Code Login) -->
        <div
          class="w-1/2 flex items-center justify-center bg-white p-8 relative z-10"
        >
          <div class="text-center">
            <h2 class="text-4xl font-bold mb-4 text-gray-800">
              QR kod yordamida kirish
            </h2>
            <p class="text-gray-600 mb-8">
              Kirish uchun ushbu QR kodni mobil ilova yordamida skanerlang
            </p>
            <div class="mb-8">
              <img
                src="assets/images/qr-code.png"
                alt="QR Code"
                class="mx-auto w-48 h-48"
              />
            </div>
            <div class="relative flex py-5 items-center mb-8">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="flex-shrink mx-4 text-gray-500">Yoki</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <p-button
              label="One ID orqali kirish"
              icon="pi pi-id-card"
              styleClass="w-full mb-8"
              routerLink="/auth/register"
            ></p-button>
            <div class="text-gray-500 text-sm">
              Call-center:
              <span class="text-primary-500">+99871-200-46-46</span>
            </div>

            <!-- Login Form -->
            <form (ngSubmit)="loginUser()" class="mt-8">
              <h3 class="text-2xl font-bold mb-4 text-gray-800">
                Login with Email
              </h3>
              <div class="mb-4">
                <label
                  for="loginEmail"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Email</label
                >
                <input
                  pInputText
                  id="loginEmail"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full"
                  [(ngModel)]="loginEmail"
                  name="loginEmail"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="loginPassword"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Password</label
                >
                <p-password
                  id="loginPassword"
                  placeholder="Enter your password"
                  [toggleMask]="true"
                  [fluid]="true"
                  [feedback]="false"
                  [(ngModel)]="loginPassword"
                  name="loginPassword"
                  required
                ></p-password>
              </div>
              <p-button
                label="Login"
                styleClass="w-full p-button-success"
                type="submit"
              ></p-button>
            </form>
          </div>
        </div>

        <!-- Right Section (Digital Office Info) -->
        <div
          class="w-1/2 flex flex-col items-center justify-between bg-blue-500 p-8 text-white relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('assets/layout/images/auth-bg.jpeg'); background-size: cover;"
          ></div>
          <div class="relative z-10 flex flex-col items-center w-full h-full">
            <div class="flex items-center justify-start w-full mb-auto">
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
              <span class="text-white text-2xl font-bold ml-2"
                >Digital Office</span
              >
            </div>

            <div class="flex-grow flex items-center justify-center p-8">
              <img
                src="assets/images/Illustration.png"
                alt="Illustrative Graphic"
                class="max-w-full h-auto object-contain"
              />
            </div>

            <div class="text-center mb-8">
              <h3 class="text-3xl font-semibold mb-4">
                "Raqamli idora" yagona platformasi
              </h3>
              <p class="text-lg leading-relaxed max-w-lg mx-auto">
                "Raqamli idora" yagona platformasi raqamli hukumat agregatori
                bo'lib, davlat organlari faoliyatiga zarur bo'lgan axborot
                tizimlarini o'zaro birlashtirgan va yagona kirish nuqtasi
                sifatida foydalanuvchi axborot tizimi majmuasidir.
              </p>
            </div>
            <div class="flex justify-center gap-2 mb-4">
              <div class="w-3 h-3 bg-white rounded-full"></div>
              <div class="w-3 h-3 bg-white opacity-50 rounded-full"></div>
              <div class="w-3 h-3 bg-white opacity-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Login {
  loginEmail!: string;
  loginPassword!: string;

  constructor(private router: Router) {}

  loginUser() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user: any) =>
        user.email === this.loginEmail && user.password === this.loginPassword
    );

    if (foundUser) {
      // Save current user data
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert("Login successful!");
      this.router.navigate(["/"]);
    } else {
      alert("Invalid email or password.");
    }
  }
}
