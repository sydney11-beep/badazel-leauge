import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingPlayerCard extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-player-card";
  }

  static get properties() {
    return {
      ...super.properties,
      playerName: { type: String, attribute: "player-name" },
      role: { type: String },
      specialty: { type: String },
    };
  }

  constructor() {
    super();
    this.playerName = "";
    this.role = "";
    this.specialty = "";
  }

  render() {
    return html`
      <article class="card">
        <div class="avatar">✨</div>
        <h3>${this.playerName}</h3>
        <p class="role">${this.role}</p>
        <p>${this.specialty}</p>
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
          background: #d3f8e2;
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-5);
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: var(--ddd-boxShadow-sm);
          color: #111;
        }

        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: var(--ddd-spacing-3);
        }

        h3 {
          margin: 0 0 var(--ddd-spacing-2) 0;
          color: #111;
        }

        p {
          margin: var(--ddd-spacing-1) 0;
          line-height: 1.5;
        }

        .role {
          font-weight: 800;
        }

        @media (prefers-color-scheme: dark) {
          .card {
            background: #263b32;
            color: #ffffff;
            border-color: #3e5b4c;
          }

          h3 {
            color: #ffffff;
          }

          .avatar {
            background: #1d1b24;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingPlayerCard.tag)) {
  customElements.define(BadazzelingPlayerCard.tag, BadazzelingPlayerCard);
}