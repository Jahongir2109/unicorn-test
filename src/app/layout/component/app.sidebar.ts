import { Component, ElementRef } from "@angular/core";
import { AppMenu } from "./app.menu";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [AppMenu, CommonModule],
  template: ` <div class="layout-sidebar">
    <div class="sidebar-header">
      <button class="menu-toggle">
        <i class="pi pi-bars"></i>
      </button>
      <div class="app-logo">
        <img src="assets/images/Logomark.png" />
        <span>Digital Office</span>
      </div>
    </div>
    <div class="create-document-btn">
      <span>Hujjat yaratish</span>
      <i class="pi pi-angle-down"></i>
    </div>
    <app-menu></app-menu>
    <div class="sidebar-tasks-badge">
      <span>Topshiriqlar</span>
    </div>
  </div>`,
  styles: [
    `
      .layout-sidebar {
        width: 18rem;
        background-color: #0d47a1; /* Dark blue background */
        // background-image: url("assets/layout/images/wavy-pattern.png"); /* Add wavy background */
        background-size: cover; /* Cover the entire area */
        background-position: center; /* Center the background image */
        background-repeat: no-repeat; /* Do not repeat the image */
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: #ffffff;
        height: 100vh; /* Full height */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: fixed; /* Fix sidebar position */
        top: 0;
        left: 0;
        z-index: 1000;
      }

      .sidebar-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .menu-toggle {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background-color 0.2s;
      }

      .menu-toggle:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .app-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .app-logo img {
        height: 2rem; /* Adjust as needed */
        filter: brightness(0) invert(1); /* Make logo white */
      }

      .app-logo span {
        font-size: 1.25rem;
        font-weight: 700;
      }

      .create-document-btn {
        background-color: #2196f3; /* Light blue */
        border-radius: 1.25rem; /* Further adjusted for exact visual match */
        padding: 0.85rem 1.25rem; /* Adjusted horizontal padding */
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-bottom: 1rem;
      }

      .create-document-btn:hover {
        background-color: #1976d2; /* Darker blue on hover */
      }

      .create-document-btn i {
        font-size: 1rem;
      }

      .sidebar-tasks-badge {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 1.5rem;
        padding: 0.85rem 1.25rem; /* Adjusted padding slightly */
        font-weight: 600;
        text-align: center;
        margin-top: auto; /* Pushes it to the bottom */
        cursor: pointer;
        transition: background-color 0.2s;
        backdrop-filter: blur(5px); /* Optional: add a slight blur effect */
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .sidebar-tasks-badge:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    `,
  ],
})
export class AppSidebar {
  constructor(public el: ElementRef) {}
}
