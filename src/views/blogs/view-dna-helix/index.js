import { LitElement, html, css } from 'lit-element';
import { BlogStyle } from 'views/blogs/style';

import { runAnimation } from './dna-helix';

import "components/comp-bio";
import "components/comp-link";



class BlogDnaHelix extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();
    document.title = 'Doug Rudolph - Helix';

    this.handleResize = this.handleResize.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  firstUpdated() {
    super.connectedCallback();
    this.handleResize();
    this.startAnimation();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    const blogPadding = window.getComputedStyle(canvas.parentElement).padding;
    const offset = parseInt(blogPadding, 10);
    canvas.width = canvas.parentElement.clientWidth - offset*2;
  }

  startAnimation() {
    const canvas = this.shadowRoot.getElementById('blog-canvas');
    const ctx = canvas.getContext("2d");
    runAnimation(canvas, ctx);
  }

  render() {
    return html`
      <comp-bio></comp-bio>

      <div class="blog">
        <div class="blog-header">
          <h2>DNA Helix</h2>
          <span>Posted on March 28th, 2018</span>
          <p> Trig functions, take number 2 - plus a happy accident. </p>
        </div>
        <hr/>

        <canvas id="blog-canvas"></canvas>

        <hr/>

        <div class="blog-container">
          <p>
            So recently, I've just been obsessed with using trig in my animations. I felt that my previous <comp-link url="../wrapping-waves/wrapping-waves.html">Wrapping Waves</comp-link>
            post didn't create the illusion I wanted, so I decided to give it another go. Also, I noticed that my last post didn't come off as nicely because
            I accidentally used both <code> Math.sin()</code> and <code>Math.cos()</code> - rather than just picking one trig identity. I'll make note to not do that again.
          </p>
          <p>
            Anyways, because I was able to reuse a lot of the logic from <comp-link url="../wrapping-waves/wrapping-waves.html">Wrapping Waves</comp-link>, I was able to spend more time experimenting here.
            So, If you look at all the different Helix objects from left to right, you can actually see that the far most right Helix object is made up of all the individual
            Helix objects that come before it. The only reason this happened was because there was a bug that didn't update the <code>x-pos</code> of each helix, thus all Helix objects
            were overlaid atop one another.
          </p>
          <p>
            This bug was oddly hard to fix, but it gave me some cool ideas for my next animation.
          </p>
          <p>
            Anyways, this was just a short fun post. As always, until next time!
          </p>
        </div>
      </div>
    `;
  }
}


customElements.define('view-dna-helix', BlogDnaHelix);