import { LitElement, html } from 'lit-element';

import { BlogStyle } from 'views/blogs/style.js';
import { runAnimation } from './oscillations.js';
import 'components/comp-bio';



class BlogOscillations extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();
    document.title = 'Doug Rudolph - Oscillations';

    this.handleResize = this.handleResize.bind(this);
    this.mountCanvas = this.mountCanvas.bind(this);
  }

  firstUpdated() {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    // canvas.width = canvas.parentElement.clientWidth;
  }

  mountCanvas = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    const ctx = canvas.getContext("2d");

    // set default width and height of canvas
    // canvas.width = canvas.parentElement.clientWidth;
    canvas.width = 200;
    canvas.height = canvas.width*.33;

    runAnimation(canvas, ctx);
  }

  render() {
    return html`
      <comp-bio></comp-bio>

      <div class="blog">
        <div class="blog-header">
          <h2>Oscillations</h2>
          <span>Posted on May 31th, 2018</span>
          <p> I'm obsessed with waves and it's a problem </p>
        </div>
        <hr/>

        <canvas id="blog-canvas"></canvas>

        <hr/>

        <div class="blog-container">
          <p>
            I've come to the conclusion that I'm obsessed with wave animations and it's an actual problem. This
            is the fifth animation where I have used some form of unit circle logic, and I think it's time to create
            something with a little more creativity. With that said, I figure I squeeze one more timed wave animation
            out of me.
          </p>
          <p>
            Now while this animation looks a lot like my previous <a href="../dna-helix/dna-helix.html">DNA Helix</a>
            project, the feel of the wave is a lot different. In the <a href="../dna-helix/dna-helix.html">DNA Helix</a>
            animation, the waves come off as if they are rotating in a circle, where as this animation's main effect
            is the oscillation in the waves.
          </p>
          <p>
            All in all, it's time to seek out more ambitious ideas.
          </p>
          <p>
            And as always, until next time :)
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('view-oscillations', BlogOscillations);