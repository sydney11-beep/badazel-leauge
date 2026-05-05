import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-team-card";
  }

  static get properties() {
    return {
      ...super.properties,
      teamName: { type: String, attribute: "team-name" },
      description: { type: String },
      image: { type: String },
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.teamName = "";
    this.description = "";
    this.image = "";
    this.page = "";
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="card" @click="${this.handleClick}">
        <div class="image-wrap">
          <img src="${this.image}" alt="${this.teamName} logo" />
        </div>

        <div class="content">
          <h3>${this.teamName}</h3>
          <p>${this.description}</p>
        </div>
      </button>
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
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
          border-radius: var(--ddd-radius-xl);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: var(--ddd-boxShadow-sm);
          padding: var(--ddd-spacing-0);
          text-align: center;
          color: #111;
        }

        .card:hover,
        .card:focus-visible {
          transform: translateY(-4px);
          box-shadow: var(--ddd-boxShadow-md);
          outline: --ddd-border-md;
          outline-offset: 2px;
        }

        .image-wrap {
          width: 100%;
          height: 220px;
          background: #f8f4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--ddd-spacing-4);
          box-sizing: border-box;
        }

        .image-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .content {
          padding: var(--ddd-spacing-5);
        }

        h3 {
          margin: 0 0 var(--ddd-spacing-2) 0;
          font-size: 1.5rem;
          color: #111;
        }

        p {
          margin: var(--ddd-spacing-0);
          font-size: 0.95rem;
          line-height: 1.5;
          color: #333;
        }

        @media (max-width: 700px) {
          .image-wrap {
            height: 180px;
          }
        }

        @media (prefers-color-scheme: dark) {
          .card {
            background: #ffffff;
            color: #111;
          }

          .image-wrap {
            background: #f8f4ff;
          }

          h3 {
            color: #111;
          }

          p {
            color: #333;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingTeamCard.tag)) {
  customElements.define(BadazzelingTeamCard.tag, BadazzelingTeamCard);
}