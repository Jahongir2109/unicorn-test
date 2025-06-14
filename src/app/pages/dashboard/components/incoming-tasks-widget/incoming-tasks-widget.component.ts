import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incoming-tasks-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col h-full">
      <div class="flex flex-col h-full justify-around">
        <div class="task-badge-card blue" style="flex-grow: 1;">
          <div class="task-badge-num">916</div>
          <div class="task-badge-label">Imzolash uchun</div>
          <div class="task-badge-icon-container">
            <i class="task-badge-icon pi pi-pencil"></i>
          </div>
        </div>
        <div class="task-badge-card purple" style="flex-grow: 1;">
          <div class="task-badge-num">13</div>
          <div class="task-badge-label">Rezolyutsiya</div>
          <div class="task-badge-icon-container">
            <i class="task-badge-icon pi pi-check-square"></i>
          </div>
        </div>
        <div class="task-badge-card green" style="flex-grow: 1;">
          <div class="task-badge-num">0</div>
          <div class="task-badge-label">Kelishish uchun</div>
          <div class="task-badge-icon-container">
            <i class="task-badge-icon pi pi-comments"></i>
          </div>
        </div>
        <div class="task-badge-card gray" style="flex-grow: 1;">
          <div class="task-badge-num">21</div>
          <div class="task-badge-label">Nazorat reja yaratish</div>
          <div class="task-badge-icon-container">
            <i class="task-badge-icon pi pi-calendar"></i>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .task-badge-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-radius: var(--content-border-radius);
      background-color: #FFFFFF; /* White background as in image */
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for cards */
    }

    .task-badge-num {
      font-size: 2.25rem; /* text-4xl */
      font-weight: 700; /* font-bold */
      margin-bottom: 0.5rem;
    }

    .task-badge-label {
      font-size: 0.875rem; /* text-sm */
      color: var(--text-color-secondary);
    }

    .task-badge-icon-container {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative; /* Ensure icon stays centered */
    }

    .task-badge-icon {
      font-size: 1.5rem;
    }

    .task-badge-card.blue {
      .task-badge-num {
        color: #3B82F6; /* Blue 500 */
      }
      .task-badge-icon-container {
        background-color: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
      }
      .task-badge-icon {
        color: #3B82F6; /* Blue 500 */
      }
    }

    .task-badge-card.purple {
      .task-badge-num {
        color: #9333EA; /* Purple 600 */
      }
      .task-badge-icon-container {
        background-color: rgba(147, 51, 234, 0.1);
        border: 1px solid rgba(147, 51, 234, 0.3);
      }
      .task-badge-icon {
        color: #9333EA; /* Purple 600 */
      }
    }

    .task-badge-card.green {
      .task-badge-num {
        color: #22C55E; /* Green 500 */
      }
      .task-badge-icon-container {
        background-color: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.3);
      }
      .task-badge-icon {
        color: #22C55E; /* Green 500 */
      }
    }

    .task-badge-card.gray {
      .task-badge-num {
        color: #6B7280; /* Gray 500 */
      }
      .task-badge-icon-container {
        background-color: rgba(107, 114, 128, 0.1);
        border: 1px solid rgba(107, 114, 128, 0.3);
      }
      .task-badge-icon {
        color: #6B7280; /* Gray 500 */
      }
    }
  `]
})
export class IncomingTasksWidgetComponent {} 