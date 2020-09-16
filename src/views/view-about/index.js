import { LitElement, html } from 'lit-element';
import { router } from 'src/index';

class About extends LitElement {
  static get properties() {
     return {
      location: { type: Object },
     };
  }

  constructor() {
    super();
    this.loaction = router.location;
  }

  render() {
    return html`
      <h1> about </h1>
    `;
  }
}

customElements.define('view-about', About);