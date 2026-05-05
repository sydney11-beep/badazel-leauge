import { LitElement, html, css } from "lit";

export class BadazzelingTab extends LitElement {
  static get tag() {
    return "badazzeling-tab";
  }

  static get properties() {
    return {
      label: { type: String },
      page: { type: String },
      active: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.label = "";
    this.page = "";
    this.active = false;
  }

  selectTab() {
    this.dispatchEvent(
      new CustomEvent("tab-selected", {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="${this.active ? "active" : ""}" @click="${this.selectTab}">
        ${this.label}
      </button>
    `;
  }

  static get styles() {
    return css`
      button {
        border: 2px solid #d6c7ec;
        background: white;
        color: #222;
        border-radius: 999px;
        padding: 8px 14px;
        font-weight: 700;
        cursor: pointer;
        font-size: 0.9rem;
      }

      button:hover,
      button.active {
        background: #e4c1f9;
      }

      @media (prefers-color-scheme: dark) {
        button {
          background: #302b3d;
          color: white;
          border-color: #6d5a8a;
        }

        button:hover,
        button.active {
          background: #6d5a8a;
        }
      }
    `;
  }
}

if (!customElements.get(BadazzelingTab.tag)) {
  customElements.define(BadazzelingTab.tag, BadazzelingTab);
}