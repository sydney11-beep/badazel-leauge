import { LitElement, html, css } from "lit";

export class BadazzelingSectionBlock extends LitElement {
  static get tag() {
    return "badazzeling-section-block";
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
  }

  render() {
    return html`
      <section class="block">
        <h2>${this.title}</h2>
        <slot></slot>
      </section>
    `;
  }

  static get styles() {
    return css`
      .block {
        background: #ffffff;
        border: 2px solid rgba(228, 193, 249, 0.35);
        border-radius: 28px;
        padding: 32px 28px 38px 28px;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
      }

      h2 {
        margin: 0 0 18px 0;
        font-size: clamp(2.2rem, 4vw, 4rem);
        font-weight: 700;
      }
    `;
  }
}

customElements.define(BadazzelingSectionBlock.tag, BadazzelingSectionBlock);