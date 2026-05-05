import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class BadazzelingSectionBlock extends DDDSuper(LitElement) {
  static get tag() {
    return "badazzeling-section-block";
  }

  static get properties() {
    return {
      ...super.properties,
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
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation, Arial, sans-serif);
        }

        .block {
          background: #ffffff;
          border: 2px solid rgba(228, 193, 249, 0.35);
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-6) var(--ddd-spacing-5);
          text-align: center;
          box-shadow: var(--ddd-boxShadow-sm);
          color: #111;
        }

        h2 {
          margin: 0 0 var(--ddd-spacing-4) 0;
          font-size: clamp(2.2rem, 4vw, 4rem);
          font-weight: 800;
          color: #111;
          line-height: 1;
        }

        ::slotted(p) {
          line-height: 1.6;
        }

        @media (prefers-color-scheme: dark) {
          .block {
            background: #24212d;
            color: #ffffff;
            border-color: #3b344a;
          }

          h2 {
            color: #ffffff;
          }
        }
      `,
    ];
  }
}

if (!customElements.get(BadazzelingSectionBlock.tag)) {
  customElements.define(BadazzelingSectionBlock.tag, BadazzelingSectionBlock);
}