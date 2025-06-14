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
        border: 2px solid red; /* Temporary border for host to debug */
      }
      .card {
        border: 2px solid blue; /* Temporary border for cards to debug */
      }

      :host * {
        box-sizing: border-box;
      }
      :host ::ng-deep .p-calendar .p-datepicker {
        background-color: #e0f2f7; /* Light blue from image for calendar background */
        color: var(--text-color);
        border: none; /* No border as in the image */
        border-radius: var(--content-border-radius);
        width: 100%;
        height: 100%;
      }
      :host ::ng-deep .p-calendar {
        width: 100%;
        height: 100%;
      }
      :host ::ng-deep .p-calendar .p-datepicker table {
        width: 100%;
        height: 100%;
      }
      :host ::ng-deep .p-calendar .p-datepicker table td > span.p-highlight {
        background-color: #38bdf8; /* Light blue from image for selected date */
        color: white; /* White text for selected date */
      }
      :host ::ng-deep .p-calendar .p-datepicker table td > span:focus {
        box-shadow: none;
      }
      :host
        ::ng-deep
        .p-calendar
        .p-datepicker
        table
        td.p-datepicker-today
        > span {
        background-color: transparent; /* No specific background for today */
        color: var(--text-color); /* Default text color for today */
      }
      :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-title,
      :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-prev,
      :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-next {
        color: #64748b; /* Gray text for header elements */
      }
      :host
        ::ng-deep
        .p-calendar
        .p-datepicker-header
        .p-datepicker-title
        .p-link {
        color: #64748b; /* Gray text for month/year title */
      }
      :host ::ng-deep .p-calendar .p-datepicker table th {
        color: #94a3b8; /* Lighter gray for day names */
      }
      :host ::ng-deep .p-calendar .p-datepicker table td span {
        color: #333; /* Darker text for dates */
      }
      :host
        ::ng-deep
        .p-calendar
        .p-datepicker-header
        .p-datepicker-prev.p-link,
      :host
        ::ng-deep
        .p-calendar
        .p-datepicker-header
        .p-datepicker-next.p-link {
        color: #64748b; /* Gray text for navigation arrows */
      }
      .custom-datepicker {
        width: 100%;
      }

      /* Time Widget Styling */
      .time-widget-card {
        background-color: #e0f2f7; /* Light blue from image */
        color: #333; /* Darker text */
        border-radius: var(--content-border-radius);
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .time-widget-time {
        font-weight: bold;
        font-size: 1.25rem;
      }

      /* Birthday Widget Styling */
      .birthday-widget-card {
        background-color: #fff;
        border-radius: var(--content-border-radius);
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .birthday-icon-container {
        background-color: #f7e0e7; /* Light pink from image */
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .birthday-icon {
        font-size: 1.5rem;
        color: #e91e63; /* Pink from image */
      }
      .birthday-text {
        color: var(--text-color);
        font-size: 0.9rem;
      }
      .birthday-highlight-text {
        font-weight: bold;
        color: #e91e63; /* Use pink for highlight as in image */
      }

      /* Meet Digital Office Widget Styling */
      .meet-widget-card {
        background-color: #fff;
        border-radius: var(--content-border-radius);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .meet-logo {
        height: 2rem; /* Adjust as needed */
        margin-bottom: 0.5rem;
      }
      .meet-buttons {
        display: flex;
        gap: 0.5rem;
      }
      .meet-button {
        flex: 1;
        border-radius: 9999px; /* Tailwind rounded-full */
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .meet-create-button {
        background-color: #2196f3; /* Blue from image */
        color: #fff;
      }
      .meet-join-button {
        background-color: #e3f2fd; /* Light blue from image */
        color: #2196f3; /* Blue from image */
      }

      /* LexUZ Online Widget Styling */
      .lexuz-widget-card {
        background-color: #fff;
        border-radius: var(--content-border-radius);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .lexuz-logo {
        height: 2.5rem;
        margin-bottom: 0.5rem;
      }
      .lexuz-input-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .lexuz-input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 9999px;
        padding: 0.5rem 2.5rem 0.5rem 1rem;
      }
      .lexuz-search-icon {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
      }

      /* Notes Widget Styling */
      .notes-widget-card {
        background-color: #fff;
        border-radius: var(--content-border-radius);
        padding: 1.5rem;
      }
      .notes-textarea {
        width: 100%;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 0.5rem;
        resize: vertical;
      }
      .notes-buttons-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
      }
      .notes-left-buttons .p-button {
        color: #64748b;
      }
      .notes-right-button .p-button-danger {
        color: #ef4444;
      }
    `,
  ],
  template: `
    <div class="flex flex-col gap-6">
      <!-- Calendar widget -->
      <div class="card" style="height: 400px;">
        <div
          class="p-4 h-full"
          style="background-color: #E0F2F7; border-radius: var(--content-border-radius); width:100%; height: 100%"
        >
          <p-calendar
            [inline]="true"
            [(ngModel)]="dateValue"
            [monthNavigator]="true"
            [yearNavigator]="true"
            yearRange="2000:2030"
            styleClass="custom-datepicker"
          ></p-calendar>
        </div>
      </div>

      <!-- Weather widget -->
      <div
        class="card flex items-center gap-4 rounded-2xl"
        style="background-color: #3f2e64; color: white; padding: 1.5rem;"
      >
        <div class="flex flex-col">
          <div class="font-semibold" style="color: white;">Tashkent</div>
          <div class="text-xs" style="color: rgba(255, 255, 255, 0.7);">
            Cloudy
          </div>
        </div>
        <div class="ml-auto flex items-center gap-1">
          <div class="text-2xl font-bold" style="color: white;">32°</div>
          <div class="text-3xl relative">
            <i
              class="pi pi-sun absolute text-yellow-400"
              style="font-size: 2rem; top: -0.5rem; right: 0.5rem;"
            ></i>
            <i
              class="pi pi-cloud absolute text-white"
              style="font-size: 2rem; bottom: 0; left: 0;"
            ></i>
          </div>
        </div>
      </div>

      <!-- Birthday widget -->
      <div class="card birthday-widget-card">
        <div class="birthday-icon-container">
          <i class="pi pi-gift birthday-icon"></i>
        </div>
        <div>
          <div class="font-semibold">Tug'ilgan kunlar</div>
          <div class="birthday-text">
            Bugun <span class="birthday-highlight-text">Abbos Xazratov</span> va
            yana
            <span class="birthday-highlight-text">4 kishining</span> tug'ilgan
            kuni
          </div>
        </div>
      </div>

      <!-- Meet Digital Office widget -->
      <div class="card meet-widget-card">
        <img
          src="assets/layout/images/meet-logo.png"
          alt="Meet Digital Office"
          class="meet-logo"
        />
        <div class="meet-buttons">
          <button pButton class="meet-button meet-create-button">
            <i class="pi pi-plus mr-2"></i> Create
          </button>
          <button pButton class="meet-button meet-join-button">
            <i class="pi pi-video mr-2"></i> Join
          </button>
        </div>
      </div>

      <!-- LexUZ Online widget -->
      <div class="card lexuz-widget-card">
        <img
          src="assets/layout/images/lexuz-logo.png"
          alt="LexUZ Online"
          class="lexuz-logo"
        />
        <div class="lexuz-input-container">
          <input
            pInputText
            type="text"
            placeholder="Hujjat raqami"
            class="lexuz-input"
          />
          <i class="pi pi-search lexuz-search-icon"></i>
        </div>
        <div class="lexuz-input-container">
          <input
            pInputText
            type="text"
            placeholder="Hujjat nomi"
            class="lexuz-input"
          />
          <i class="pi pi-search lexuz-search-icon"></i>
        </div>
      </div>

      <!-- Notes widget -->
      <div class="card notes-widget-card">
        <div class="font-semibold mb-2">Notes</div>
        <textarea
          class="notes-textarea"
          rows="3"
          placeholder="Take a note..."
        ></textarea>
        <div class="notes-buttons-container">
          <div class="notes-left-buttons flex gap-2">
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
          <div class="notes-right-button">
            <button
              pButton
              icon="pi pi-trash"
              class="p-button-text p-button-rounded p-button-danger"
            ></button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardRightPanel {
  dateValue: Date = new Date();
  currentTime: Date = new Date();

  constructor() {
    this.dateValue.setMonth(8); // Set to September (month index 8 for September)
    this.dateValue.setFullYear(2024);
    this.dateValue.setDate(20); // Highlight 20th as in the image

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
