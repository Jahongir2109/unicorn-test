import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-incoming-tasks-widget",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-4">
      <div class="task-card blue">
        <div class="task-content">
          <div class="task-number">916</div>
          <div class="task-label">Imzolash uchun</div>
        </div>
        <div class="icon-circle">
          <i class="pi pi-pencil icon"></i>
        </div>
      </div>
      <div class="task-card purple">
        <div class="task-content">
          <div class="task-number">13</div>
          <div class="task-label">Rezolyutsiya</div>
        </div>
        <div class="icon-circle">
          <i class="pi pi-check-square icon"></i>
        </div>
      </div>
      <div class="task-card green">
        <div class="task-content">
          <div class="task-number">0</div>
          <div class="task-label">Kelishish uchun</div>
        </div>
        <div class="icon-circle">
          <i class="pi pi-comments icon"></i>
        </div>
      </div>
      <div class="task-card gray">
        <div class="task-content">
          <div class="task-number">21</div>
          <div class="task-label">Nazorat reja yaratish</div>
        </div>
        <div class="icon-circle">
          <i class="pi pi-calendar icon"></i>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .task-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.25rem;
        border-radius: 1.25rem;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition: box-shadow 0.2s ease;
      }

      .task-content {
        display: flex;
        flex-direction: column;
      }

      .task-number {
        font-size: 1.875rem; /* text-3xl */
        font-weight: 700;
        line-height: 1.2;
      }

      .task-label {
        font-size: 0.875rem;
        color: #6b7280; /* text-gray-500 */
        margin-top: 0.25rem;
      }

      .icon-circle {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
      }

      .icon {
        font-size: 1.25rem;
      }

      /* Color themes */
      .task-card.blue .task-number,
      .task-card.blue .icon {
        color: #3b82f6;
      }
      .task-card.blue .icon-circle {
        background-color: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.3);
      }

      .task-card.purple .task-number,
      .task-card.purple .icon {
        color: #9333ea;
      }
      .task-card.purple .icon-circle {
        background-color: rgba(147, 51, 234, 0.1);
        border-color: rgba(147, 51, 234, 0.3);
      }

      .task-card.green .task-number,
      .task-card.green .icon {
        color: #22c55e;
      }
      .task-card.green .icon-circle {
        background-color: rgba(34, 197, 94, 0.1);
        border-color: rgba(34, 197, 94, 0.3);
      }

      .task-card.gray .task-number,
      .task-card.gray .icon {
        color: #6b7280;
      }
      .task-card.gray .icon-circle {
        background-color: rgba(107, 114, 128, 0.1);
        border-color: rgba(107, 114, 128, 0.3);
      }
    `,
  ],
})
export class IncomingTasksWidgetComponent {}
