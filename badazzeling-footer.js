import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-footer";
  }

  static get properties() {
    return {
      ...super.properties,
      siteTitle: { type: String, attribute: "site-title" },
      year: { type: Number },
    };
  }

  constructor() {
    super();
    this.siteTitle = "Competitive Badazzeling";
    this.year = new Date().getFullYear();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          margin: 32px 20px 20px 20px;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        footer {
          background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
          border-radius: 28px;
          padding: 28px 34px 24px 34px;
          color: #222;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
        }

        .footer-top {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 28px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .logo-box {
          width: 74px;
          height: 74px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.45);
          border: 2px solid rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          flex-shrink: 0;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .site-name {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .tagline {
          font-size: 0.95rem;
          color: rgba(34, 34, 34, 0.8);
        }

        .middle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          min-width: 0;
        }

        .links {
          display: flex;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .links a {
          text-decoration: none;
          color: #222;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .links a:hover,
        .links a:focus-visible {
          background: rgba(255, 255, 255, 0.35);
          outline: none;
        }

        .copyright {
          font-size: 0.95rem;
          color: rgba(34, 34, 34, 0.72);
          text-align: center;
        }

        .cta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .cta-text {
          font-size: 1.1rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .cta-button {
          display: inline-block;
          text-decoration: none;
          background: #f48fb8;
          color: white;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 14px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .cta-button:hover,
        .cta-button:focus-visible {
          transform: translateY(-1px);
          opacity: 0.92;
          outline: none;
        }

        @media (max-width: 1100px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .brand {
            justify-content: center;
          }

          .middle {
            align-items: center;
          }

          .cta {
            justify-content: center;
          }
        }

        @media (max-width: 650px) {
          footer {
            padding: 24px 18px 20px 18px;
          }

          .brand {
            flex-direction: column;
            text-align: center;
          }

          .site-name {
            font-size: 1.15rem;
          }

          .tagline {
            font-size: 0.9rem;
          }

          .links {
            gap: 10px;
          }

          .cta-text {
            font-size: 1rem;
          }
        }
      `,
    ];
  }

  navigateTo(page, e) {
    e.preventDefault();
    window.history.pushState({}, "", `?page=${page}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  render() {
    return html`
      <footer>
        <div class="footer-top">
          <div class="brand">
            <div class="logo-box" aria-hidden="true">💎</div>
            <div class="brand-text">
              <div class="site-name">${this.siteTitle}</div>
              <div class="tagline">Join the sparkle. Create. Compete. Win.</div>
            </div>
          </div>

          <div class="middle">
            <div class="links">
              <a href="?page=about" @click="${(e) => this.navigateTo("about", e)}">About</a>
              <a href="?page=competitions" @click="${(e) => this.navigateTo("competitions", e)}">Competitions</a>
              <a href="?page=calendar" @click="${(e) => this.navigateTo("calendar", e)}">Calendar</a>
              <a href="?page=join" @click="${(e) => this.navigateTo("join", e)}">Join</a>
            </div>

            <div class="copyright">© ${this.year} ${this.siteTitle}</div>
          </div>

          <div class="cta">
            <div class="cta-text">Questions?</div>
            <a class="cta-button" href="mailto:hello@competitivebadazzeling.com">Email Us!</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define(BadazzelingFooter.tag, BadazzelingFooter);