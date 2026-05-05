import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingInfoCard extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-info-card";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      text: { type: String },
      emoji: { type: String },
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.text = "";
    this.emoji = "✨";
    this.variant = "pink";
  }

  render() {
    return html`
      <article class="card ${this.variant}">
        <div class="emoji">${this.emoji}</div>
        <div>
          <h3>${this.title}</h3>
          <p>${this.text}</p>
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
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-5);
          display: flex;
          gap: var(--ddd-spacing-4);
          align-items: flex-start;
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: var(--ddd-boxShadow-sm);
          color: #111;
        }

        .pink {
          background: #f5b6d6;
        }

        .purple {
          background: #d6c7ec;
        }

        .blue {
          background: #a9d5ee;
        }

        .yellow {
          background: #fff6c1;
        }

        .green {
          background: #d3f8e2;
        }

        .emoji {
          width: 48px;
          height: 48px;
          border-radius: var(--ddd-radius-md);
          background: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        h3 {
          margin: 0 0 var(--ddd-spacing-2) 0;
          font-size: 1.25rem;
          color: #111;
        }

        p {
          margin: 0;
          line-height: 1.5;
        }

        @media (prefers-color-scheme: dark) {
          .card {
            color: #ffffff;
            border-color: #3b344a;
          }

          .pink,
          .purple,
          .blue,
          .yellow,
          .green {
            background: #302b3d;
          }

          h3 {
            color: #ffffff;
          }

          .emoji {
            background: #1d1b24;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingInfoCard.tag)) {
  customElements.define(BadazzelingInfoCard.tag, BadazzelingInfoCard);
}