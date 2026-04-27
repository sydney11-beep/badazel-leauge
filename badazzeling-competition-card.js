import { LitElement, html, css } from "lit";
import "./badazzeling-label.js";

export class BadazzelingCompetitionCard extends LitElement {
  static get tag() {
    return "badazzeling-competition-card";
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      theme: { type: String },
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.theme = "";
    this.variant = "featured";
  }

  render() {
    return html`
      <article class="card ${this.variant}">
        <h3>${this.title}</h3>
        <p>${this.description}</p>

        <div class="pill-list">
          <badazzeling-label label="Speed"></badazzeling-label>
          <badazzeling-label label="Aesthetic"></badazzeling-label>
          <badazzeling-label label="${this.theme}"></badazzeling-label>
        </div>
      </article>
    `;
  }

  static get styles() {
    return css`
      .card {
        border-radius: 28px;
        padding: 30px;
        min-height: 220px;
        color: #111;
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
      }

      .featured {
        background: #d3f8e2;
      }

      .supplies {
        background: #fff6c1;
      }

      h3 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.8rem;
        font-weight: 700;
      }

      p {
        line-height: 1.7;
        margin-bottom: 18px;
      }

      .pill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 18px;
      }
    `;
  }
}

customElements.define(BadazzelingCompetitionCard.tag, BadazzelingCompetitionCard);