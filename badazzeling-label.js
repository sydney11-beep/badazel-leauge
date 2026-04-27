import { LitElement, html, css } from "lit";

export class BadazzelingLabel extends LitElement {
  static get tag() {
    return "badazzeling-label";
  }

  static get properties() {
    return {
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
    return css`
      .label {
        display: inline-block;
        background: rgba(255, 255, 255, 0.75);
        border-radius: 999px;
        padding: 10px 16px;
        font-weight: 700;
      }
    `;
  }
}

customElements.define(BadazzelingLabel.tag, BadazzelingLabel);