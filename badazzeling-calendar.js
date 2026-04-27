import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingCalendar extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-calendar";
  }

  static get properties() {
    return {
      ...super.properties,
      viewMode: { type: String, attribute: "view-mode" },
    };
  }

  constructor() {
    super();
    this.viewMode = "week";
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
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
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
          max-width: 700px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .toggle-group {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .toggle-option {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .toggle-option button {
          border: 2px solid #d6c7ec;
          background: white;
          border-radius: 999px;
          padding: 8px 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .toggle-option button.active {
          background: #e4c1f9;
        }

        .calendar-shell {
          border-radius: 20px;
          overflow: hidden;
          background: #f8f4ff;
        }

        .calendar-header {
          background: #a9d5ee;
          color: white;
          padding: 12px 16px;
          font-weight: 700;
        }

        .week-view,
        .month-view {
          min-height: 260px;
          background: #f5b6d6;
          padding: 16px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: 160px 1fr;
          min-height: 220px;
        }

        .week-side {
          background: #e7e7e7;
          padding: 12px;
        }

        .week-main {
          background: #e58fbc;
          padding: 12px;
        }

        .month-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .month-cell {
          background: white;
          min-height: 90px;
          border-radius: 12px;
          padding: 8px;
          border: 1px solid #ead7f7;
        }

        .cell-number {
          font-weight: 700;
          margin-bottom: 6px;
        }

        .event-pill {
          display: inline-block;
          background: #d6c7ec;
          border-radius: 999px;
          padding: 4px 8px;
          font-size: 0.8rem;
          margin-top: 4px;
        }

        @media (max-width: 800px) {
          .week-grid {
            grid-template-columns: 1fr;
          }

          .month-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `,
    ];
  }

  setView(mode) {
    this.viewMode = mode;
  }

  renderWeekView() {
    return html`
      <div class="week-view">
        <div class="week-grid">
          <div class="week-side">
            <div><strong>1</strong></div>
            <div class="event-pill">Team A Practice</div>
          </div>
          <div class="week-main">
            <div><strong>Monday</strong></div>
            <p>Practice block / event area</p>
          </div>
        </div>
      </div>
    `;
  }

  renderMonthView() {
    return html`
      <div class="month-view">
        <div class="month-grid">
          ${Array.from({ length: 14 }, (_, i) => i + 1).map(
            (day) => html`
              <div class="month-cell">
                <div class="cell-number">${day}</div>
                ${day === 1 ? html`<div class="event-pill">Practice</div>` : ""}
                ${day === 7 ? html`<div class="event-pill">Competition</div>` : ""}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="calendar-page">
        <div class="top-text">
          <div class="description">
            Teams within the league have different practice times. Find one near
            you that works best. Here you can see the month or week at a glance.
          </div>

          <div class="toggle-group">
            <div class="toggle-option">
              <button
                class="${this.viewMode === "week" ? "active" : ""}"
                @click="${() => this.setView("week")}"
              >
                Show Week
              </button>
            </div>

            <div class="toggle-option">
              <button
                class="${this.viewMode === "month" ? "active" : ""}"
                @click="${() => this.setView("month")}"
              >
                Show Month
              </button>
            </div>
          </div>
        </div>

        <div class="calendar-shell">
          <div class="calendar-header">
            ${this.viewMode === "week" ? "Monday" : "This Month"}
          </div>
          ${this.viewMode === "week"
            ? this.renderWeekView()
            : this.renderMonthView()}
        </div>
      </div>
    `;
  }
}

customElements.define(BadazzelingCalendar.tag, BadazzelingCalendar);