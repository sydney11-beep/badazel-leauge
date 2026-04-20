import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-header";
  }

  static get properties() {
    return {
      ...super.properties,
      siteTitle: { type: String, attribute: "site-title" },
      activePage: { type: String, attribute: "active-page" },
    };
  }

  constructor() {
    super();
    this.siteTitle = "Competitive Badazzeling";
    this.activePage = "home";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

       header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 28px 36px;
  background: #e4c1f9; 
  border: 2px solid #e9cde3;
  border-radius: 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 1600px;
  margin: 20px auto; /* centers it */
}

        .brand {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1 1 auto;
          min-width: 0;
        }

       .logo {
  width: 90px;
  height: 90px;
  border-radius: 18px;
  background: white; /* FIX: no black */
  border: 2px solid #e6dcf5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
}

        .title {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          font-weight: 700;
          line-height: 1.05;
          color: #222;
          max-width: 430px;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 34px;
          flex-wrap: wrap;
          position: relative;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #222;
          font-weight: 700;
          font-size: 1.15rem;
          padding: 14px 20px;
          border-radius: 999px;
          cursor: pointer;
          background: transparent;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link:focus-visible {
          background: rgba(201, 173, 228, 0.28);
          outline: none;
        }

        .nav-link:hover {
  background: rgba(229, 154, 195, 0.25); /* pink */
}

.nav-link.active {
  background: rgba(168, 200, 255, 0.35); /* soft blue */
}

      .dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 240px;
  background: #f8f4ff; /* soft lavender */
  border: 2px solid #d6c7ec;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
  z-index: 1000;
}

        .dropdown a {
          display: block;
          padding: 14px 18px;
          text-decoration: none;
          color: #222;
          font-weight: 600;
          cursor: pointer;
        }

        .dropdown a:hover,
        .dropdown a:focus-visible {
          background: rgba(0, 0, 0, 0.06);
          outline: none;
        }

        .nav-item:hover .dropdown,
        .nav-item:focus-within .dropdown {
          display: block;
        }

        @media (max-width: 1100px) {
          header {
            flex-direction: column;
            align-items: flex-start;
          }

          nav {
            width: 100%;
            gap: 18px;
          }

          .title {
            max-width: none;
          }
        }
      `,
    ];
  }

  navigateTo(page, event) {
    event.preventDefault();
    window.history.pushState({}, "", `?page=${page}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  isActive(pages) {
    return pages.includes(this.activePage) ? "active" : "";
  }

  render() {
    return html`
      <header>
        <div class="brand">
          <div class="logo">💎</div>
          <div class="title">${this.siteTitle}</div>
        </div>

        <nav aria-label="Main navigation">
          <div class="nav-item">
            <a
              class="nav-link ${this.isActive(["about", "what-is-badazzeling", "scoring"])}"
              href="?page=about"
              @click="${(e) => this.navigateTo("about", e)}"
            >
              ✨ About
            </a>
            <div class="dropdown">
              <a href="?page=what-is-badazzeling" @click="${(e) => this.navigateTo("what-is-badazzeling", e)}">What is Badazzeling</a>
              <a href="?page=scoring" @click="${(e) => this.navigateTo("scoring", e)}">Scoring</a>
            </div>
          </div>

          <div class="nav-item">
            <a
              class="nav-link ${this.isActive(["competitions", "current", "past", "results"])}"
              href="?page=competitions"
              @click="${(e) => this.navigateTo("competitions", e)}"
            >
              🎯 Competitions
            </a>
            <div class="dropdown">
              <a href="?page=current" @click="${(e) => this.navigateTo("current", e)}">Current</a>
              <a href="?page=past" @click="${(e) => this.navigateTo("past", e)}">Past</a>
              <a href="?page=results" @click="${(e) => this.navigateTo("results", e)}">Results</a>
            </div>
          </div>

          <div class="nav-item">
            <a
              class="nav-link ${this.isActive(["calendar", "schedule", "upcoming-events", "important-dates"])}"
              href="?page=calendar"
              @click="${(e) => this.navigateTo("calendar", e)}"
            >
              📅 Calendar
            </a>
            <div class="dropdown">
              <a href="?page=schedule" @click="${(e) => this.navigateTo("schedule", e)}">Schedule</a>
              <a href="?page=upcoming-events" @click="${(e) => this.navigateTo("upcoming-events", e)}">Upcoming Events</a>
              <a href="?page=important-dates" @click="${(e) => this.navigateTo("important-dates", e)}">Important Dates</a>
            </div>
          </div>

          <div class="nav-item">
            <a
              class="nav-link ${this.isActive(["join", "why-join", "how-to-join", "faq"])}"
              href="?page=join"
              @click="${(e) => this.navigateTo("join", e)}"
            >
              💖 Join
            </a>
            <div class="dropdown">
              <a href="?page=why-join" @click="${(e) => this.navigateTo("why-join", e)}">Why Join</a>
              <a href="?page=how-to-join" @click="${(e) => this.navigateTo("how-to-join", e)}">How to Join</a>
              <a href="?page=faq" @click="${(e) => this.navigateTo("faq", e)}">FAQ</a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define(BadazzelingHeader.tag, BadazzelingHeader);