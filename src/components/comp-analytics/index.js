import { LitElement, html } from 'lit-element';


class GAnalytics extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111401111-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-111401111-1');
      </script>
    `;
  }
}


customElements.define('comp-analytics', GAnalytics);