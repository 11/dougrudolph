import { LitElement, html } from 'lit-element';

import { BlogStyle } from 'views/blogs/style.js'
import { runAnimation } from './particle-net';

import "components/comp-bio/";


class BlogParticleNet extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();
    document.title = 'Doug Rudolph - Particle Net';

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
          <h2>Particle Net</h2>
          <span>Posted on January 22nd, 2018</span>
          <p>
            My first JavaScript canvas - Mesh of particles that creates a net while floating through 2D space
          </p>
        </div>
        <hr/>

        <!-- Begin Content Here -->
        <canvas id="blog-canvas"></canvas>
        <!-- End content here -->

        <hr/>
        <div class="blog-container">
          <p>
            So this small animation is my first ever JavaScript canvas project, and let me tell you, this project has
            made me grow as a developer. I have never coded in JavaScript before, and I really now empathize with front end developers.
          </p>
          <p>
            For those of you that have never coded in JavaScript, learning JavaScript is like learning to ride a bike
            that randomly morphs into unicycle. JavaScript claims to have this working free form structure, but as
            soon as you start to lean on its deeper features, the overhead for something so simple suddenly requires
            10 anonymous functions; six callbacks; and learning some deeply rooted and esoteric syntax that you can
            never find examples for. Honestly, after doing some reading, It feels like JavaScript has had syntax issue
            for quite some time, and rather than fixing it, the EMCA (European Computer Manufacturers Association)
            just packed more features to mask its original issues. Please tell if me I'm wrong, I'd love to learn
            about why JavaScript feels a lot less consistent than other languages.
          </p>
          <p>
            Anyways, this experience has taught me a lot, and has lead me to discover some new technologies. Probably
            the most exciting new tech I've stumbled into while googling was TypeScript. In case you haven't heard of
            TypeScript, TypeScript is a language created by Microsoft, and is designed to be a super set of JavaScript
            that has the same workings of C#. And so, my hopes are that my horrible web dev life will completely
            change with TypeScript. Mind you, I still wrote this project entirely in plain JavaScript as a challenge to
            myself, but … never again. It felt so inefficient <i>(probably because I'm so new)</i>.
          </p>
          <p>
            But yes, I’m so happy to see TypeScript will be fixing a lot of these random syntax and structural issues. And
            besides the quirkiness of JavaScript, creating graphics for websites is a lot more fun than just having it
            run locally in a window. The ability to share interactive graphics has never felt so easy, and I'm looking
            forward to seeing the potential the future holds for my graphics projects.
          </p>
          <p>
            Stay tuned for more.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('view-particle-net', BlogParticleNet);