import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingLabel extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-label";
  }

  static get properties() {
    return {
      ...super.properties,
      label: { type: String },
    };
  }

  constructor() {
    super();
    this.label = "";
  }

  render() {
    return html`<span class="label">${this.label}</span>`;
  }

  static get styles() {
    return [
      super.styles,
      css`
        .label {
          display: inline-block;
          background: rgba(255, 255, 255, 0.75);
          border-radius: 999px;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-weight: 800;
          color: #111;
        }

        @media (prefers-color-scheme: dark) {
          .label {
            background: rgba(255, 255, 255, 0.9);
            color: #111;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingLabel.tag)) {
  customElements.define(BadazzelingLabel.tag, BadazzelingLabel);
}