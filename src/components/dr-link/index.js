import { LitElement, html, css } from 'lit-element';

import { pink } from 'styles/colors';


const TextLinkStyle = css`
  a {
    color: ${pink};
    text-decoration: underline solid transparent;
    transition: text-decoration 250ms ease;
  }

  /* on hover, underline the text */
  a:hover {
    text-decoration: underline solid Currentcolor;
  }
`;

class Link extends LitElement {

  static get styles() {
    return [ TextLinkStyle ];
  }

  static get properties() {
    return {
      fontSize: { type: Number },
      url: { type: String },
    }
  }

  constructor() {
    this.url = "#";
  }

  render() {
    return html`
      <a href="${this.url}">
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('dr-link', Link);