import { LitElement, html } from 'lit-element';
import { router } from 'src/index';
import 'components/comp-bio';

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
      <comp-bio></comp-bio>
    `;
  }
}

customElements.define('view-about', About);