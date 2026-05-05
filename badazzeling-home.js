import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./badazzeling-section-block.js";
import "./badazzeling-competition-card.js";

export class BadazzelingHome extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-home";
  }

  static get properties() {
    return {
      ...super.properties,
      mission: { type: String },
    };
  }

  constructor() {
    super();
    this.mission =
      "Competitive Badazzeling is a creative league where participants race to decorate objects with the most speed and the most style.";
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
            alt="Group of smiling people together"
          />
        </div>

        <div class="hero-img">
          <img
            src="https://i.etsystatic.com/46221633/r/il/424633/7354193452/il_fullxfull.7354193452_nmjm.jpg"
            alt="Decorated rhinestone items"
          />
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="page">
        <main class="content">
          ${this.renderHero()}

          <badazzeling-section-block title="mission statement">
            <p>${this.mission}</p>
          </badazzeling-section-block>

          <section class="two-col">
            <badazzeling-competition-card
              title="Featured Competition"
              description="Current challenge: bedazzle a water bottle using a themed color palette. Entries are judged on both speed and aesthetic appeal."
              theme="Current"
              variant="featured"
            ></badazzeling-competition-card>

            <badazzeling-competition-card
              title="Common Supplies"
              description="Typical supplies include rhinestones, glue, applicators, trays, and base objects like bottles, mirrors, and phone cases."
              theme="Tools"
              variant="supplies"
            ></badazzeling-competition-card>
          </section>
        </main>
      </div>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-default-coalyGray);
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        .page {
          max-width: 1600px;
          margin: var(--ddd-spacing-0) auto;
          padding: var(--ddd-spacing-5) var(--ddd-spacing-6) var(--ddd-spacing-0);
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-7);
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--ddd-spacing-4);
          width: min(100%, 1300px);
          margin: var(--ddd-spacing-2) auto var(--ddd-spacing-0);
          height: clamp(190px, 22vw, 300px);
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-3);
          background: linear-gradient(135deg, #f5b6d6, #d6c7ec, #a9d5ee);
          box-shadow: var(--ddd-boxShadow-sm);
          box-sizing: border-box;
        }

        .hero-img {
          min-width: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--ddd-radius-lg);
          overflow: hidden;
          border: var(--ddd-border-md);
          border-color: #f5b6d6;
          box-sizing: border-box;
          background: var(--ddd-theme-default-white);
        }

        .hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-img.center {
          border-color: #d6c7ec;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
        }

        @media (max-width: 950px) {
          .two-col {
            grid-template-columns: 1fr;
          }

          .page {
            padding: var(--ddd-spacing-4);
          }

          .hero {
            grid-template-columns: 1fr;
            height: auto;
          }

          .hero-img {
            height: 220px;
          }
        }

        @media (prefers-color-scheme: dark) {
          :host {
            color: #f8f4ff;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingHome.tag)) {
  customElements.define(BadazzelingHome.tag, BadazzelingHome);
}