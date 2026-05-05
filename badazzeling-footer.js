import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-footer";
  }

  changePage(page, e) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <footer>
        <div class="brand">
          <span class="logo">
            <img src="/assets/cbllogo.png" alt="Competitive Badazzeling logo" />
          </span>
          <div>
            <h2>Competitive Badazzeling</h2>
            <p>Join the sparkle. Create. Compete. Win.</p>
          </div>
        </div>

        <nav>
          <a href="?page=about" @click="${(e) => this.changePage("about", e)}">✨ About</a>
          <a href="?page=teams" @click="${(e) => this.changePage("teams", e)}">👥 Teams</a>
          <a href="?page=calendar" @click="${(e) => this.changePage("calendar", e)}">📅 Calendar</a>
          <a href="?page=join" @click="${(e) => this.changePage("join", e)}">💖 Join</a>
        </nav>

        <div class="contact">
          <strong>Questions?</strong>
          <a href="mailto:hello@competitivebadazzeling.com">Email Us!</a>
        </div>
      </footer>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          margin: var(--ddd-spacing-6) var(--ddd-spacing-4) var(--ddd-spacing-4);
          font-family: var(--ddd-font-navigation);
        }

        footer {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-xl);
          background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
          color: #1d1b24;
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }

        .logo {
          width: 56px;
          height: 56px;
          border-radius: var(--ddd-radius-md);
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo img {
          width: 150%;
          height: 150%;
          object-fit: cover;
          transform: scale(1.25);
        }

        h2,
        p {
          margin: 0;
        }

        h2 {
          font-size: 1.15rem;
          font-weight: 800;
        }

        p {
          opacity: 0.75;
        }

        nav {
          display: flex;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
          justify-content: center;
        }

        nav a,
        .contact a {
          color: #1d1b24;
          text-decoration: none;
          font-weight: 800;
          border-radius: 999px;
        }

        nav a {
          background: rgba(255, 255, 255, 0.3);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        }

        nav a:hover {
          background: rgba(255, 255, 255, 0.55);
        }

        .contact {
          display: flex;
          justify-content: flex-end;
          gap: var(--ddd-spacing-2);
          font-weight: 800;
        }

        @media (max-width: 900px) {
          footer {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .brand,
          .contact {
            justify-content: center;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingFooter.tag)) {
  customElements.define(BadazzelingFooter.tag, BadazzelingFooter);
}