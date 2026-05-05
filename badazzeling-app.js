import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./badazzeling-header.js";
import "./badazzeling-footer.js";
import "./badazzeling-home.js";
import "./badazzeling-calendar.js";
import "./badazzeling-team-card.js";
import "./badazzeling-player-card.js";
import "./badazzeling-info-card.js";

export class BadazzelingApp extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-app";
  }

  static get properties() {
    return {
      ...super.properties,
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

  renderTeamsPage() {
    return html`
      <section class="page">
        <h2>Teams</h2>
        <p class="intro">
          Pick a team to learn more about their style, practice focus, and players.
        </p>

        <div class="team-grid">
          <badazzeling-team-card
            team-name="Team Sparkle"
            description="Clean pastel designs and strong aesthetic scores."
            image="/assets/teamsparkle.png"
            page="team-sparkle"
            @page-changed="${(e) => this.changePage(e.detail.page)}"
          ></badazzeling-team-card>

          <badazzeling-team-card
            team-name="Gem Rush"
            description="Fast rounds, bold colors, and speed-focused challenges."
            image="/assets/gemrush.png"
            page="gem-rush"
            @page-changed="${(e) => this.changePage(e.detail.page)}"
          ></badazzeling-team-card>

          <badazzeling-team-card
            team-name="Rhinestone Rebels"
            description="Creative risks, dramatic sparkle themes, and unique objects."
            image="/assets/rebels.png"
            page="rhinestone-rebels"
            @page-changed="${(e) => this.changePage(e.detail.page)}"
          ></badazzeling-team-card>
        </div>
      </section>
    `;
  }

  renderTeamDetail(name, description) {
    return html`
      <section class="page">
        <h2>${name}</h2>
        <p class="intro">${description}</p>

        <div class="player-grid">
          <badazzeling-player-card
            player-name="Captain Gem"
            role="Team Captain"
            specialty="Aesthetic planning"
          ></badazzeling-player-card>

          <badazzeling-player-card
            player-name="Speed Spark"
            role="Fastest Player"
            specialty="Quick glue and gem placement"
          ></badazzeling-player-card>

          <badazzeling-player-card
            player-name="Design Diva"
            role="Creative Lead"
            specialty="Color themes and final polish"
          ></badazzeling-player-card>
        </div>
      </section>
    `;
  }

  renderPage() {
    switch (this.page) {
      case "home":
        return html`<badazzeling-home></badazzeling-home>`;

      case "calendar":
      case "schedule":
      case "upcoming-events":
      case "important-dates":
        return html`
          <badazzeling-calendar
            .page="${this.page === "calendar" ? "schedule" : this.page}"
          ></badazzeling-calendar>
        `;

      case "about":
        return html`
          <section class="page">
            <h2>About Badazzeling</h2>
            <p>
              Competitive Badazzeling is a creative league where teams decorate
              objects with speed, style, and sparkle.
            </p>
          </section>
        `;

      case "scoring":
        return html`
          <section class="page">
            <h2>Scoring</h2>
            <p>
              Players are judged in two main categories: speed and aesthetic
              appeal. The fastest team does not always win if the final design
              does not look polished.
            </p>
          </section>
        `;

      case "teams":
        return this.renderTeamsPage();

      case "team-sparkle":
        return this.renderTeamDetail(
          "Team Sparkle",
          "Team Sparkle focuses on clean designs, pastel gems, and strong aesthetic scores."
        );

      case "gem-rush":
        return this.renderTeamDetail(
          "Gem Rush",
          "Gem Rush is known for fast rounds and bold rhinestone patterns."
        );

      case "rhinestone-rebels":
        return this.renderTeamDetail(
          "Rhinestone Rebels",
          "Rhinestone Rebels brings creative risk-taking and dramatic sparkle themes."
        );

      case "join":
        return html`
          <section class="page">
            <h2>Join</h2>
            <p>
              Join the league to compete, create, and bring your best sparkle.
              New players can join a team, attend practice, and enter beginner
              challenges.
            </p>
          </section>
        `;

      case "faq":
        return html`
          <section class="page">
            <h2>FAQ</h2>
            <p class="intro">
              Quick answers about joining, practices, supplies, and competitions.
            </p>

            <div class="faq-grid">
              <badazzeling-info-card
                emoji="👥"
                title="Teams"
                text="Players join a team based on practice time, style, and experience level."
                variant="purple"
              ></badazzeling-info-card>

              <badazzeling-info-card
                emoji="📅"
                title="Practices"
                text="Each team has weekly practices before competitions and themed challenges."
                variant="blue"
              ></badazzeling-info-card>

              <badazzeling-info-card
                emoji="💎"
                title="Supplies"
                text="Most players use rhinestones, glue, trays, applicators, and a base object."
                variant="yellow"
              ></badazzeling-info-card>

              <badazzeling-info-card
                emoji="🏆"
                title="Scoring"
                text="Competitions are judged by speed and aesthetic appeal."
                variant="green"
              ></badazzeling-info-card>
            </div>
          </section>
        `;

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

      <badazzeling-footer
        @page-changed="${(e) => this.changePage(e.detail.page)}"
      ></badazzeling-footer>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          background: linear-gradient(180deg, #fffdfd 0%, #f8f4ff 100%);
          color: var(--ddd-theme-default-coalyGray);
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        main {
          min-height: 70vh;
        }

        .page {
          max-width: 1100px;
          margin: var(--ddd-spacing-6) auto;
          padding: var(--ddd-spacing-8);
          background: #ffffff;
          border-radius: var(--ddd-radius-xl);
          box-shadow: var(--ddd-boxShadow-sm);
        }

        h2 {
          color: #111111;
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-top: 0;
          margin-bottom: var(--ddd-spacing-4);
          line-height: 1;
        }

        p {
          line-height: 1.6;
        }

        .intro {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .team-grid,
        .player-grid,
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-5);
        }

        @media (max-width: 900px) {
          .page {
            margin: var(--ddd-spacing-4);
            padding: var(--ddd-spacing-5);
          }
        }

        @media (prefers-color-scheme: dark) {
          :host {
            background: linear-gradient(180deg, #18151f 0%, #111111 100%);
            color: #f8f4ff;
          }

          .page {
            background: #24212d;
            color: #f8f4ff;
            border: 1px solid #3b344a;
          }

          h2 {
            color: #ffffff;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingApp.tag)) {
  customElements.define(BadazzelingApp.tag, BadazzelingApp);
}