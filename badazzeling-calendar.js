import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./badazzeling-tab.js";

export class BadazzelingCalendar extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-calendar";
  }

  static get properties() {
    return {
      ...super.properties,
      viewMode: { type: String, attribute: "view-mode" },
      page: { type: String },
      currentDate: { type: Object },
    };
  }

  constructor() {
    super();
    this.viewMode = "week";
    this.page = "schedule";
    this.currentDate = new Date();
  }

  setView(mode) {
    this.viewMode = mode;
  }

  setCalendarPage(page) {
    this.page = page;
  }

  changeWeek(amount) {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() + amount * 7);
    this.currentDate = newDate;
  }

  changeMonth(amount) {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + amount);
    this.currentDate = newDate;
  }

  isToday(date) {
    const today = new Date();

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  formatDate(date) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  getStartOfWeek(date) {
    const newDate = new Date(date);
    const day = newDate.getDay();
    newDate.setDate(newDate.getDate() - day);
    return newDate;
  }

  getEventForDate(date) {
    const day = date.getDay();

    if (day === 1) return "Team Sparkle Practice";
    if (day === 3) return "Water Bottle Challenge";
    if (day === 6) return "Gem Rush Practice";

    return "";
  }

  renderSchedule() {
    if (this.viewMode === "month") {
      return this.renderMonthView();
    }
    return this.renderWeekView();
  }

  renderWeekView() {
    const start = this.getStartOfWeek(this.currentDate);

    const days = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);

      return {
        label: date.toLocaleDateString("en-US", { weekday: "short" }),
        number: date.getDate(),
        date,
        event: this.getEventForDate(date),
      };
    });

    return html`
      <div class="calendar-shell">
        <div class="calendar-header">
          <button @click="${() => this.changeWeek(-1)}">←</button>
          <span>Week of ${this.formatDate(start)}</span>
          <button @click="${() => this.changeWeek(1)}">→</button>
        </div>

        <div class="week-grid">
          ${days.map(
            (day) => html`
              <div class="day-card ${this.isToday(day.date) ? "today" : ""}">
                <div class="day-name">${day.label}</div>
                <div class="day-number">${day.number}</div>

                ${day.event
                  ? html`<div class="event-pill">${day.event}</div>`
                  : ""}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  renderMonthView() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];

    for (let i = 0; i < startOffset; i++) {
      cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(new Date(year, month, day));
    }

    return html`
      <div class="calendar-shell">
        <div class="calendar-header">
          <button @click="${() => this.changeMonth(-1)}">←</button>
          <span>
            ${this.currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button @click="${() => this.changeMonth(1)}">→</button>
        </div>

        <div class="month-days">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        <div class="month-grid">
          ${cells.map((date) =>
            date
              ? html`
                  <div class="month-cell ${this.isToday(date) ? "today" : ""}">
                    <strong>${date.getDate()}</strong>

                    ${this.getEventForDate(date)
                      ? html`<div class="event-pill">
                          ${this.getEventForDate(date)}
                        </div>`
                      : ""}
                  </div>
                `
              : html`<div class="month-cell empty"></div>`
          )}
        </div>
      </div>
    `;
  }

  renderUpcomingEvents() {
    return html`
      <div class="calendar-shell">
        <div class="calendar-header simple">Upcoming Events</div>

        <div class="calendar-body">
          <div class="event-card">
            <strong>Team Tryouts</strong>
            <p>New members can try a beginner badazzeling round.</p>
          </div>

          <div class="event-card">
            <strong>Mini Competition</strong>
            <p>A short challenge focused on phone cases and small objects.</p>
          </div>

          <div class="event-card">
            <strong>Championship Prep</strong>
            <p>Teams practice speed rounds before the final event.</p>
          </div>
        </div>
      </div>
    `;
  }

  renderImportantDates() {
    return html`
      <div class="calendar-shell">
        <div class="calendar-header simple">Important Dates</div>

        <div class="calendar-body">
          <div class="event-card">
            <strong>Season schedule begins</strong>
            <p>The season starts during the first full week shown on the schedule.</p>
          </div>

          <div class="event-card">
            <strong>First official competition</strong>
            <p>Teams compete after weekly practices and challenge rounds.</p>
          </div>

          <div class="event-card">
            <strong>Team tryout deadline</strong>
            <p>New members should complete tryouts before final team placement.</p>
          </div>
        </div>
      </div>
    `;
  }

  renderContent() {
    if (this.page === "upcoming-events") {
      return this.renderUpcomingEvents();
    }

    if (this.page === "important-dates") {
      return this.renderImportantDates();
    }

    return this.renderSchedule();
  }

  render() {
    return html`
      <div class="calendar-page">
        <div class="top-text">
          <div>
            <h2>Calendar</h2>
            <p class="description">
              Teams within the league have different practice times. Use the
              week and month views to find practices, competitions, and tryouts.
            </p>
          </div>

          <div class="view-toggle">
            <button
              class="${this.viewMode === "week" ? "active" : ""}"
              @click="${() => this.setView("week")}"
            >
              Show Week
            </button>

            <button
              class="${this.viewMode === "month" ? "active" : ""}"
              @click="${() => this.setView("month")}"
            >
              Show Month
            </button>
          </div>
        </div>

        <div
          class="small-tabs"
          @tab-selected="${(e) => this.setCalendarPage(e.detail.page)}"
        >
          <badazzeling-tab
            label="Schedule"
            page="schedule"
            ?active="${this.page === "schedule"}"
          ></badazzeling-tab>

          <badazzeling-tab
            label="Upcoming Events"
            page="upcoming-events"
            ?active="${this.page === "upcoming-events"}"
          ></badazzeling-tab>

          <badazzeling-tab
            label="Important Dates"
            page="important-dates"
            ?active="${this.page === "important-dates"}"
          ></badazzeling-tab>
        </div>

        ${this.renderContent()}
      </div>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
          color: #222;
        }

        .calendar-page {
          max-width: 1200px;
          margin: 32px auto;
          background: white;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        h2 {
          margin: 0 0 8px 0;
          font-size: clamp(2rem, 4vw, 3.5rem);
        }

        .top-text {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .description {
          max-width: 720px;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .view-toggle,
        .small-tabs {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .view-toggle button {
          border: 2px solid #d6c7ec;
          background: white;
          border-radius: 999px;
          padding: 8px 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .view-toggle button:hover,
        .view-toggle button.active {
          background: #e4c1f9;
        }

        .small-tabs {
          margin-bottom: 18px;
        }

        .calendar-shell {
          border-radius: 22px;
          overflow: hidden;
          background: #f8f4ff;
          border: 2px solid #d6c7ec;
        }

        .calendar-header {
          background: #a9d5ee;
          color: #222;
          padding: 14px 16px;
          font-weight: 800;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .calendar-header.simple {
          display: block;
        }

        .calendar-header button {
          border: none;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 999px;
          width: 36px;
          height: 36px;
          font-weight: 900;
          cursor: pointer;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          padding: 16px;
          background: #f5b6d6;
        }

        .day-card,
        .month-cell {
          background: white;
          min-height: 130px;
          border-radius: 16px;
          padding: 12px;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }

        .day-card.today,
        .month-cell.today {
          border: 3px solid #6a4c93;
          background: #fff6c1;
        }

        .day-name {
          font-weight: 800;
        }

        .day-number {
          font-size: 1.7rem;
          font-weight: 900;
          margin: 8px 0;
        }

        .event-pill {
          display: inline-block;
          background: #d6c7ec;
          border-radius: 999px;
          padding: 5px 9px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 6px;
        }

        .month-days,
        .month-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
        }

        .month-days {
          background: #f8f4ff;
          padding: 10px 16px;
          font-weight: 800;
          text-align: center;
        }

        .month-grid {
          gap: 8px;
          padding: 16px;
          background: #f5b6d6;
        }

        .month-cell {
          min-height: 100px;
        }

        .month-cell.empty {
          background: rgba(255, 255, 255, 0.45);
        }

        .calendar-body {
          background: #f8f4ff;
          padding: 18px;
          min-height: 240px;
          display: grid;
          gap: 14px;
        }

        .event-card {
          background: white;
          border-radius: 16px;
          padding: 16px;
          border: 2px solid #d6c7ec;
        }

        .event-card p {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .week-grid {
            grid-template-columns: 1fr;
          }

          .month-days {
            display: none;
          }

          .month-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (prefers-color-scheme: dark) {
          :host {
            color: #f7f7f7;
          }

          .calendar-page {
            background: #24212d;
          }

          .calendar-shell {
            background: #302b3d;
            border-color: #6d5a8a;
          }

          .calendar-header {
            background: #24475d;
            color: #fff;
          }

          .week-grid,
          .month-grid {
            background: #4c3150;
          }

          .calendar-body {
            background: #302b3d;
          }

          .day-card,
          .month-cell,
          .event-card {
            background: #302b3d;
            color: #fff;
            border-color: #6d5a8a;
          }

          .day-card.today,
          .month-cell.today {
            background: #4b3d24;
            border-color: #fff6c1;
          }

          .event-pill {
            background: #6d5a8a;
          }

          .month-days {
            background: #302b3d;
          }

          .view-toggle button {
            background: #302b3d;
            color: #fff;
            border-color: #6d5a8a;
          }

          .view-toggle button.active,
          .view-toggle button:hover {
            background: #6d5a8a;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingCalendar.tag)) {
  customElements.define(BadazzelingCalendar.tag, BadazzelingCalendar);
}