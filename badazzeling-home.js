import { LitElement, html, css } from "lit";
import "./badazzeling-section-block.js";
import "./badazzeling-competition-card.js";

export class BadazzelingHome extends LitElement {
  static get tag() {
    return "badazzeling-home";
  }

  static get properties() {
    return {
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
            alt="Group of smiling girls together"
          />
        </div>

        <div class="hero-img">
          <img
            src="https://i.etsystatic.com/46221633/r/il/424633/7354193452/il_fullxfull.7354193452_nmjm.jpg"
            alt="Decorated items"
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

          <!-- mission component -->
          <badazzeling-section-block title="mission statement">
            <p>${this.mission}</p>
          </badazzeling-section-block>

          <!-- cards -->
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
    return css`
      :host {
        display: block;
        color: #111;
        font-family: Arial, sans-serif;
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

      /* HERO */
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

      /* TWO COL */
      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 26px;
        margin-bottom: 20px;
      }

      @media (max-width: 950px) {
        .two-col {
          grid-template-columns: 1fr;
        }

        .page {
          padding: 14px 16px 0 16px;
        }

        .hero {
          grid-template-columns: 1fr;
          height: auto;
        }

        .hero-img {
          min-height: 220px;
        }
      }
    `;
  }
}

customElements.define(BadazzelingHome.tag, BadazzelingHome);