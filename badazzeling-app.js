import { LitElement, html, css } from "lit";
import "./badazzeling-header.js";
import "./badazzeling-footer.js";

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

  renderPage() {
    switch (this.page) {
      case "about":
        return html`<h2>About</h2><p>Learn about competitive badazzeling.</p>`;

      case "what-is-badazzeling":
        return html`<h2>What is Badazzeling</h2><p>Explain what badazzeling is here.</p>`;

      case "scoring":
        return html`<h2>Scoring</h2><p>Break down speed and aesthetic scoring here.</p>`;

      case "competitions":
        return html`<h2>Competitions</h2><p>Overview of competitions.</p>`;

      case "current":
        return html`<h2>Current Competitions</h2><p>Show current competitions here.</p>`;

      case "past":
        return html`<h2>Past Competitions</h2><p>Show past competitions here.</p>`;

      case "results":
        return html`<h2>Results</h2><p>Show winners and scores here.</p>`;

      case "calendar":
        return html`<h2>Calendar</h2><p>Calendar overview here.</p>`;

      case "schedule":
        return html`<h2>Schedule</h2><p>Show the schedule here.</p>`;

      case "upcoming-events":
        return html`<h2>Upcoming Events</h2><p>Show upcoming events here.</p>`;

      case "important-dates":
        return html`<h2>Important Dates</h2><p>Show important dates here.</p>`;

      case "join":
        return html`<h2>Join</h2><p>Join page overview.</p>`;

      case "why-join":
        return html`<h2>Why Join</h2><p>Explain why users should join.</p>`;

      case "how-to-join":
        return html`<h2>How to Join</h2><p>Explain how to join here.</p>`;

      case "faq":
        return html`<h2>FAQ</h2><p>Frequently asked questions go here.</p>`;

      default:
        return html`<h2>Home</h2><p>Welcome to Competitive Badazzeling.</p>`;
    }
  }

  static get styles() {
  return css`
    :host {
      display: block;
      background: linear-gradient(180deg, #fffdfd 0%, #f8f4ff 100%);
      color: #222;
      min-height: 100vh;
    }

    main {
      padding: 0 20px 20px 20px;
    }

    .page-card {
      background: white;
      border-radius: 24px;
      padding: 32px;
      min-height: 420px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    }

    
  `;
}

  render() {
    return html`
      <badazzeling-header
        site-title="Competitive Badazzeling"
        active-page="${this.page}"
      ></badazzeling-header>

      <main>
        <div class="page-card">
          ${this.renderPage()}
        </div>
      </main>

      <badazzeling-footer></badazzeling-footer>
    `;
  }
}

customElements.define(BadazzelingApp.tag, BadazzelingApp);