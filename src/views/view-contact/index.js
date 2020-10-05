import { LitElement, html } from 'lit-element';

import 'components/comp-bio';


class Contact extends LitElement {
  static get styles() {
    return [];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <comp-bio></comp-bio>
    `;
  }
}


customElements.define('view-contact', Contact);