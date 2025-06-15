import { Component } from "@angular/core";
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dashboard-right-panel",
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
  ],
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
        overflow-y: auto;
        max-height: 100vh;
      }

      :host * {
        box-sizing: border-box;
      }

      /* 🌟 Custom Calendar Styles (Based on Uploaded Image) */
      ::ng-deep .p-calendar {
        width: 100%;
        font-family: "Segoe UI", sans-serif;
      }

      ::ng-deep .p-datepicker {
        background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
        border-radius: 1rem;
        color: white;
        padding: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: none;
      }

      ::ng-deep .p-datepicker-header {
        background: transparent;
        border: none;
        color: white;
        font-weight: bold;
        justify-content: space-between;
      }

      ::ng-deep .p-datepicker-prev,
      ::ng-deep .p-datepicker-next {
        color: white;
        font-size: 1.2rem;
      }

      ::ng-deep .p-datepicker-title {
        font-size: 1rem;
      }

      ::ng-deep .p-datepicker-calendar th {
        color: #e0f2fe;
        font-weight: 400;
      }

      ::ng-deep .p-datepicker-calendar td {
        color: white;
      }

      ::ng-deep .p-datepicker-calendar td > span {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        border-radius: 50%;
        transition: background-color 0.3s;
      }

      ::ng-deep .p-datepicker-calendar td > span:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      ::ng-deep .p-datepicker-calendar td.p-datepicker-today > span {
        background-color: rgba(255, 255, 255, 0.4);
        color: #000;
        font-weight: bold;
      }

      ::ng-deep .p-datepicker-calendar td.p-highlight > span {
        background-color: white;
        color: #0284c7;
        font-weight: bold;
      }
    `,
  ],
  template: `
    <div class="flex flex-col gap-6">
      <!-- Calendar -->
      <div
        class="rounded-2xl shadow-md p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
      >
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-lg font-semibold">September 2024</h2>
          <span class="text-sm">{{ currentTime | date: "shortTime" }}</span>
        </div>
        <!-- <p-calendar
          [inline]="true"
          [(ngModel)]="dateValue"
          [monthNavigator]="true"
          [yearNavigator]="true"
          yearRange="2000:2030"
          class="w-full"
        ></p-calendar> -->
      </div>

      <!-- Weather -->
      <div
        class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white flex items-center justify-between"
      >
        <div>
          <div class="text-sm font-light">Weather</div>
          <div class="text-3xl font-bold leading-tight">32°C</div>
          <div class="text-sm opacity-70">Tashkent</div>
        </div>
        <div class="relative w-12 h-12">
          <i
            class="pi pi-sun text-yellow-300 text-3xl absolute top-0 right-0"
          ></i>
          <i
            class="pi pi-cloud text-white text-2xl absolute bottom-0 left-0"
          ></i>
        </div>
      </div>

      <!-- Birthday -->
      <div class="rounded-2xl shadow-md p-4 bg-white flex gap-4 items-center">
        <div
          class="bg-pink-100 w-14 h-14 flex items-center justify-center rounded-full"
        >
          <i class="pi pi-gift text-pink-500 text-2xl"></i>
        </div>
        <div>
          <div class="font-semibold">Tug'ilgan kunlar</div>
          <div class="text-sm">
            Bugun <span class="font-bold text-pink-500">Abbos Xazratov</span> va
            <span class="font-bold text-pink-500">yana 4 kishi</span> tug'ilgan
            kuni
          </div>
        </div>
      </div>

      <!-- Meet -->
      <div class="rounded-2xl shadow-md p-4 bg-white flex flex-col gap-4">
        <img src="assets/layout/images/meet-logo.png" alt="Meet" class="h-8" />
        <div class="flex gap-2">
          <button
            pButton
            class="flex-1 rounded-full px-4 py-2 font-medium bg-blue-500 text-white"
          >
            <i class="pi pi-plus mr-2"></i> Create
          </button>
          <button
            pButton
            class="flex-1 rounded-full px-4 py-2 font-medium bg-blue-100 text-blue-500"
          >
            <i class="pi pi-video mr-2"></i> Join
          </button>
        </div>
      </div>

      <!-- LexUZ -->
      <div class="rounded-2xl shadow-md p-4 bg-white flex flex-col gap-3">
        <img
          src="assets/layout/images/lexuz-logo.png"
          alt="LexUZ"
          class="h-10"
        />
        <div class="relative">
          <input
            pInputText
            type="text"
            placeholder="Hujjat raqami"
            class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10"
          />
          <i
            class="pi pi-search absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
          ></i>
        </div>
        <div class="relative">
          <input
            pInputText
            type="text"
            placeholder="Hujjat nomi"
            class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10"
          />
          <i
            class="pi pi-search absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
          ></i>
        </div>
      </div>

      <!-- Notes -->
      <div class="rounded-2xl shadow-md p-4 bg-white">
        <div class="font-semibold mb-2">Notes</div>
        <textarea
          class="w-full border border-gray-300 rounded-lg p-2 resize-y"
          rows="3"
          placeholder="Take a note..."
        ></textarea>
        <div class="flex justify-between items-center mt-4">
          <div class="flex gap-2">
            <button
              pButton
              icon="pi pi-pencil"
              class="p-button-text p-button-rounded"
            ></button>
            <button
              pButton
              icon="pi pi-image"
              class="p-button-text p-button-rounded"
            ></button>
            <button
              pButton
              icon="pi pi-list"
              class="p-button-text p-button-rounded"
            ></button>
          </div>
          <button
            pButton
            icon="pi pi-trash"
            class="p-button-text p-button-rounded p-button-danger"
          ></button>
        </div>
      </div>
    </div>
  `,
})
export class DashboardRightPanel {
  dateValue: Date = new Date();
  currentTime: Date = new Date();

  constructor() {
    this.dateValue.setMonth(8); // September
    this.dateValue.setFullYear(2024);
    this.dateValue.setDate(20);

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
