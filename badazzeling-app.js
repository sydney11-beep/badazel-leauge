import { LitElement, html, css } from "lit";
import "./badazzeling-header.js";
import "./badazzeling-footer.js";
import "./badazzeling-home.js";
import "./badazzeling-calendar.js";

export class BadazzelingApp extends LitElement {
  static get tag() {
    return "badazzeling-app";
  }

  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.page = this.getPageFromUrl();

    this._handlePopState = () => {
      this.page = this.getPageFromUrl();
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._handlePopState);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this._handlePopState);
    super.disconnectedCallback();
  }

  getPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  }

  changePage(page) {
    const url = new URL(window.location);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url);
    this.page = page;
  }

  renderPage() {
    switch (this.page) {
      case "home":
        return html`<badazzeling-home></badazzeling-home>`;

      case "calendar":
      case "schedule":
        return html`<badazzeling-calendar></badazzeling-calendar>`;

      case "about":
      case "what-is-badazzeling":
        return html`
          <section class="page">
            <h2>What is Badazzeling?</h2>
            <p>
              Badazzeling is a competitive league where players bedazzle items
              under pressure while being judged on speed, creativity, and sparkle.
            </p>
          </section>
        `;

      case "scoring":
        return html`
          <section class="page">
            <h2>Scoring</h2>
            <p>
              Players are judged in two main categories: speed and aesthetic appeal.
            </p>
          </section>
        `;

      case "competitions":
      case "current":
        return html`
          <section class="page">
            <h2>Current Competitions</h2>
            <p>
              Current challenge: bedazzle a water bottle using a themed color palette.
            </p>
          </section>
        `;

      case "past":
        return html`<section class="page"><h2>Past Competitions</h2></section>`;

      case "results":
        return html`<section class="page"><h2>Results</h2></section>`;

      case "upcoming-events":
        return html`<section class="page"><h2>Upcoming Events</h2></section>`;

      case "important-dates":
        return html`<section class="page"><h2>Important Dates</h2></section>`;

      case "join":
      case "why-join":
        return html`
          <section class="page">
            <h2>Why Join?</h2>
            <p>Join the league to compete, create, and bring your best sparkle.</p>
          </section>
        `;

      case "how-to-join":
        return html`<section class="page"><h2>How to Join</h2></section>`;

      case "faq":
        return html`<section class="page"><h2>FAQ</h2></section>`;

      default:
        return html`<badazzeling-home></badazzeling-home>`;
    }
  }

  render() {
    return html`
      <badazzeling-header
        .page="${this.page}"
        @page-changed="${(e) => this.changePage(e.detail.page)}"
      ></badazzeling-header>

      <main>${this.renderPage()}</main>

      <badazzeling-footer></badazzeling-footer>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
        background: linear-gradient(180deg, #fffdfd 0%, #f8f4ff 100%);
        color: #111;
        font-family: Arial, sans-serif;
      }

      main {
        min-height: 70vh;
      }

      .page {
        max-width: 1000px;
        margin: 32px auto;
        padding: 36px 24px;
        background: white;
        border-radius: 28px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
      }

      h2 {
        color: #111;
      }
    `;
  }
}

customElements.define(BadazzelingApp.tag, BadazzelingApp);