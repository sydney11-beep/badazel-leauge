import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-header";
  }

  static get properties() {
    return {
      ...super.properties,
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

  openPageAndMenu(page, menu) {
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
    this.openMenu = this.openMenu === menu ? "" : menu;
  }

  renderDropdown(menu, items, alignRight = false) {
    if (this.openMenu !== menu) return "";

    return html`
      <div class="dropdown ${alignRight ? "right" : ""}">
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
    const logo = new URL("./assets/cbllogo.png", import.meta.url).href;

    return html`
      <header>
        <button class="brand" @click="${() => this.goToPage("home")}">
          <span class="logo">
            <img src="${logo}" alt="Competitive Badazzeling logo" />
          </span>

          <span class="brand-text">
            <span class="title">Competitive Badazzeling</span>
            <span class="tagline">Join the sparkle. Create. Compete. Win.</span>
          </span>
        </button>

        <nav>
          <div class="nav-item">
            <button class="nav-button" @click="${() => this.openPageAndMenu("about", "about")}">
              ✨ About
            </button>
            ${this.renderDropdown("about", [{ label: "Scoring", page: "scoring" }])}
          </div>

          <div class="nav-item">
            <button class="nav-button" @click="${() => this.openPageAndMenu("teams", "teams")}">
              👥 Teams
            </button>
            ${this.renderDropdown("teams", [
              { label: "Team Sparkle", page: "team-sparkle" },
              { label: "Gem Rush", page: "gem-rush" },
              { label: "Rhinestone Rebels", page: "rhinestone-rebels" },
            ])}
          </div>

          <div class="nav-item">
            <button class="nav-button" @click="${() => this.openPageAndMenu("calendar", "calendar")}">
              📅 Calendar
            </button>
            ${this.renderDropdown("calendar", [
              { label: "Schedule", page: "schedule" },
              { label: "Upcoming Events", page: "upcoming-events" },
              { label: "Important Dates", page: "important-dates" },
            ])}
          </div>

          <div class="nav-item">
            <button class="nav-button" @click="${() => this.openPageAndMenu("join", "join")}">
              💖 Join
            </button>
            ${this.renderDropdown("join", [{ label: "FAQ", page: "faq" }], true)}
          </div>
        </nav>
      </header>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          margin: var(--ddd-spacing-4);
          font-family: var(--ddd-font-navigation);
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-xl);
          background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .brand {
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          cursor: pointer;
          color: #222;
          text-align: left;
        }

        .logo {
          width: 64px;
          height: 64px;
          border-radius: var(--ddd-radius-lg);
          overflow: hidden;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .logo img {
          width: 150%;
          height: 150%;
          object-fit: cover;
          transform: scale(1.2);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-1);
        }

        .title {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          line-height: 1;
        }

        .tagline {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.75;
        }

        nav {
          display: flex;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-item {
          position: relative;
        }

        .nav-button {
          border: none;
          background: rgba(255, 255, 255, 0.3);
          color: #222;
          font-weight: 800;
          cursor: pointer;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: 999px;
          font-size: 0.92rem;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.55);
        }

        .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 210px;
          background: #f8f4ff;
          border: 2px solid #d6c7ec;
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-boxShadow-md);
          padding: var(--ddd-spacing-2);
          z-index: 1000;
          box-sizing: border-box;
        }

        .dropdown.right {
          left: auto;
          right: 0;
        }

        .dropdown-link {
          display: block;
          width: 100%;
          text-align: left;
          border: none;
          background: transparent;
          padding: var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          color: #222;
          font-weight: 700;
          cursor: pointer;
        }

        .dropdown-link:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        @media (max-width: 900px) {
          header {
            flex-direction: column;
            align-items: flex-start;
          }

          nav {
            justify-content: flex-start;
          }

          .dropdown,
          .dropdown.right {
            left: 0;
            right: auto;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingHeader.tag)) {
  customElements.define(BadazzelingHeader.tag, BadazzelingHeader);
}