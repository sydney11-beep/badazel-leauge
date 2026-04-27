import { LitElement, html, css } from "lit";

export class BadazzelingResultsCard extends LitElement {
  static get tag() {
    return "badazzeling-results-card";
  }

  static get properties() {
    return {
      winner: { type: String },
      speed: { type: Number },
      aesthetic: { type: Number },
    };
  }

  constructor() {
    super();
    this.winner = "Team Sparkle";
    this.speed = 9;
    this.aesthetic = 10;
  }

  render() {
    return html`
      <article class="card">
        <h3>${this.winner}</h3>
        <p>Speed: ${this.speed}/10</p>
        <p>Aesthetic: ${this.aesthetic}/10</p>
      </article>
    `;
  }

  static get styles() {
    return css`
      .card {
        background: #f8f4ff;
        border: 2px solid #d6c7ec;
        border-radius: 24px;
        padding: 22px;
      }

      h3 {
        margin-top: 0;
      }
    `;
  }
}

customElements.define(BadazzelingResultsCard.tag, BadazzelingResultsCard);