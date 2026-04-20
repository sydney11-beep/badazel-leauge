/**
 * Copyright 2026 Sydney Anne Reiter
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./badazzeling-header.js";
import "./badazzeling-footer.js";

/**
 * `badazel-leauge`
 *
 * @demo index.html
 * @element badazel-leauge
 */
export class BadazelLeauge extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "badazel-leauge";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      mission: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Competitive Badazzeling";
    this.mission =
      "Competitive Badazzeling is a creative league where participants race to decorate objects with the most speed and the most style.";

    this.t = this.t || {};
    this.t = {
      ...this.t,
      mission: "mission statement",
      featured: "Featured Competition",
      supplies: "Common Supplies",
    };

    this.registerLocalization({
      context: this,
      localesPath: new URL("./locales/", import.meta.url).href,
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          background: linear-gradient(180deg, #fffdfd 0%, #f8f4ff 100%);
          color: #111;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        .page {
          max-width: 1600px;
          margin: 0 auto;
          padding: 20px 28px 0 28px;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto 0 auto;
  height: 300px;
  border-radius: 28px;
  padding: 14px;
  background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.hero-img {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  border: 3px solid #f5b6d6;
  background: transparent;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
        .hero-img.center {
          transform: none;
          border-color: #d6c7ec;
        }

        .mission-band {
          background: #ffffff;
          border: 2px solid rgba(228, 193, 249, 0.35);
          border-radius: 28px;
          padding: 32px 28px 38px 28px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        }

        .mission-band h2 {
          margin: 0 0 18px 0;
          font-size: clamp(2.2rem, 4vw, 4rem);
          font-weight: 700;
          color: #111;
          text-transform: lowercase;
        }

        .mission-band p {
          margin: 0 auto;
          max-width: 900px;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          margin-bottom: 20px;
        }

        .card {
          border-radius: 28px;
          padding: 30px;
          min-height: 220px;
          color: #111;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
        }

        .card h3 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 1.8rem;
          font-weight: 700;
        }

        .card p {
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .accent-featured {
          background: #d3f8e2;
        }

        .accent-supplies {
          background: #fff6c1;
        }

        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
        }

        .pill {
          background: rgba(255, 255, 255, 0.72);
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 700;
        }

        @media (max-width: 950px) {
          .two-col {
            grid-template-columns: 1fr;
          }

          .page {
            padding: 14px 16px 0 16px;
          }

          .hero {
            flex-direction: column;
            min-height: auto;
          }

          .hero-img {
            min-height: 220px;
          }

          .hero-img.center {
            transform: none;
          }
        }
      `,
    ];
  }

  renderHero() {
    return html`
      <div class="hero">
        <div class="hero-img">
          <img
            src="https://i.ebayimg.com/images/g/ejYAAeSwojZocORd/s-l1200.jpg"
            alt="Colorful rhinestones"
          />
        </div>

        <div class="hero-img center">
          <img
            src="https://thumbs.dreamstime.com/b/happy-smiling-group-diverse-girls-summer-camp-50007081.jpg"
            alt="Group of smiling girls together"
          />
        </div>

        <div class="hero-img">
          <img
            src="https://i.etsystatic.com/46221633/r/il/424633/7354193452/il_fullxfull.7354193452_nmjm.jpg"
            alt="Decorated Vaseline containers"
          />
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="page">
        <badazzeling-header
          site-title="${this.title}"
          active-page="home"
        ></badazzeling-header>

        <main class="content">
          ${this.renderHero()}

          <section class="mission-band">
            <h2>${this.t.mission}</h2>
            <p>${this.mission}</p>
          </section>

          <section class="two-col">
            <div class="card accent-featured">
              <h3>${this.t.featured}</h3>
              <p>
                Current challenge: bedazzle a water bottle using a themed color
                palette. Entries are judged on both speed and aesthetic appeal.
              </p>
              <div class="pill-list">
                <span class="pill">Speed</span>
                <span class="pill">Aesthetic</span>
                <span class="pill">Current</span>
              </div>
            </div>

            <div class="card accent-supplies">
              <h3>${this.t.supplies}</h3>
              <p>
                Typical supplies include rhinestones, glue, applicators, trays,
                and base objects like bottles, mirrors, and phone cases.
              </p>
              <div class="pill-list">
                <span class="pill">Rhinestones</span>
                <span class="pill">Glue</span>
                <span class="pill">Tools</span>
              </div>
            </div>
          </section>
        </main>

        <badazzeling-footer site-title="${this.title}"></badazzeling-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(BadazelLeauge.tag, BadazelLeauge);