import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./badazzeling-label.js";

export class BadazzelingCompetitionCard extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-competition-card";
  }

  static get properties() {
    return {
      ...super.properties,
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
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        .card {
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-6);
          min-height: 220px;
          color: #111;
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .featured {
          background: #d3f8e2;
        }

        .supplies {
          background: #fff6c1;
        }

        h3 {
          margin-top: 0;
          margin-bottom: var(--ddd-spacing-4);
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
        }

        p {
          line-height: 1.7;
          margin-bottom: var(--ddd-spacing-4);
        }

        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
          margin-top: var(--ddd-spacing-4);
        }

        @media (prefers-color-scheme: dark) {
          .featured {
            background: #263b32;
            color: #ffffff;
          }

          .supplies {
            background: #4b4325;
            color: #ffffff;
          }

          h3 {
            color: #ffffff;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingCompetitionCard.tag)) {
  customElements.define(BadazzelingCompetitionCard.tag, BadazzelingCompetitionCard);
}