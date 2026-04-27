import { LitElement, html, css } from "lit";

export class BadazzelingHeader extends LitElement {
  static get tag() {
    return "badazzeling-header";
  }

  static get properties() {
    return {
      page: { type: String },
      openMenu: { type: String },
    };
  }

  constructor() {
    super();
    this.page = "home";
    this.openMenu = "";
  }

  goToPage(page) {
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
    this.openMenu = "";
  }

  toggleMenu(menu) {
    this.openMenu = this.openMenu === menu ? "" : menu;
  }

  activeClass(pages) {
    return pages.includes(this.page) ? "active" : "";
  }

  renderDropdown(menu, items) {
    if (this.openMenu !== menu) return "";

    return html`
      <div class="dropdown">
        ${items.map(
          (item) => html`
            <button class="dropdown-link" @click="${() => this.goToPage(item.page)}">
              ${item.label}
            </button>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <header>
        <button class="brand" @click="${() => this.goToPage("home")}">
          <span class="logo">💎</span>
          <span>Competitive Badazzeling</span>
        </button>

        <nav>
          <div class="nav-item">
            <button
              class="nav-button ${this.activeClass(["about", "what-is-badazzeling", "scoring"])}"
              @click="${() => this.toggleMenu("about")}"
            >
              ✨ About
            </button>
            ${this.renderDropdown("about", [
              { label: "What is Badazzeling", page: "what-is-badazzeling" },
              { label: "Scoring", page: "scoring" },
            ])}
          </div>

          <div class="nav-item">
            <button
              class="nav-button ${this.activeClass(["competitions", "current", "past", "results"])}"
              @click="${() => this.toggleMenu("competitions")}"
            >
              🎯 Competitions
            </button>
            ${this.renderDropdown("competitions", [
              { label: "Current", page: "current" },
              { label: "Past", page: "past" },
              { label: "Results", page: "results" },
            ])}
          </div>

          <div class="nav-item">
            <button
              class="nav-button ${this.activeClass(["calendar", "schedule", "upcoming-events", "important-dates"])}"
              @click="${() => this.goToPage("calendar")}"
              @mouseenter="${() => (this.openMenu = "calendar")}"
            >
              📅 Calendar
            </button>
            ${this.renderDropdown("calendar", [
              { label: "Schedule", page: "schedule" },
              { label: "Upcoming Events", page: "upcoming-events" },
              { label: "Important Dates", page: "important-dates" },
            ])}
          </div>

          <div class="nav-item">
            <button
              class="nav-button ${this.activeClass(["join", "why-join", "how-to-join", "faq"])}"
              @click="${() => this.toggleMenu("join")}"
            >
              💖 Join
            </button>
            ${this.renderDropdown("join", [
              { label: "Why Join", page: "why-join" },
              { label: "How to Join", page: "how-to-join" },
              { label: "FAQ", page: "faq" },
            ])}
          </div>
        </nav>
      </header>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        padding: 28px 36px;
        background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
        border: 2px solid #e9cde3;
        border-radius: 22px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        max-width: 1600px;
        margin: 20px auto;
        font-family: Arial, sans-serif;
      }

      .brand {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 18px;
        font-size: clamp(1.4rem, 2.5vw, 2.2rem);
        font-weight: 700;
        color: #222;
        cursor: pointer;
      }

      .logo {
        width: 70px;
        height: 70px;
        border-radius: 18px;
        background: white;
        border: 2px solid #e6dcf5;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
      }

      nav {
        display: flex;
        align-items: center;
        gap: 28px;
        flex-wrap: wrap;
      }

      .nav-item {
        position: relative;
      }

      .nav-button {
        border: none;
        background: transparent;
        color: #222;
        font-weight: 700;
        font-size: 1rem;
        padding: 12px 16px;
        border-radius: 999px;
        cursor: pointer;
      }

      .nav-button:hover,
      .nav-button.active {
        background: rgba(255, 255, 255, 0.45);
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        min-width: 220px;
        background: #f8f4ff;
        border: 2px solid #d6c7ec;
        border-radius: 18px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        padding: 10px;
        z-index: 1000;
      }

      .dropdown-link {
        display: block;
        width: 100%;
        text-align: left;
        border: none;
        background: transparent;
        padding: 14px 18px;
        border-radius: 12px;
        color: #222;
        font-weight: 600;
        cursor: pointer;
      }

      .dropdown-link:hover {
        background: rgba(0, 0, 0, 0.06);
      }

      @media (max-width: 900px) {
        header {
          flex-direction: column;
          align-items: flex-start;
          margin: 14px;
        }

        nav {
          gap: 12px;
        }
      }
    `;
  }
}

customElements.define(BadazzelingHeader.tag, BadazzelingHeader);