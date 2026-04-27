import { LitElement, html, css } from "lit";

export class BadazzelingButton extends LitElement {
  static get tag() {
    return "badazzeling-button";
  }

  static get properties() {
    return {
      label: { type: String },
    };
  }

  constructor() {
    super();
    this.label = "Click";
  }

  render() {
    return html`<button>${this.label}</button>`;
  }

  static get styles() {
    return css`
      button {
        border: none;
        background: #f5b6d6;
        color: #222;
        padding: 12px 18px;
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
      }

      button:hover {
        background: #d6c7ec;
      }
    `;
  }
}

customElements.define(BadazzelingButton.tag, BadazzelingButton);