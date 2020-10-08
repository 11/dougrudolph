import { LitElement, html, css } from 'lit-element';

import { BlogStyle } from 'views/blogs/style.js';
import "components/comp-bio"
import "components/comp-link";

class BlogJustConcetrate extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();

    document.title = 'Doug Rudolph - Just Concentrate';
  }

  render() {
    return html`
      <comp-bio></comp-bio>
      <div class="blog">
        <div class="blog-header">
          <h2>Just Concentrate</h2>
          <span>Posted on April 3rd, 2018</span>
          <p> This post if for myself and others that may have trouble overcoming personal uncertainty.</p>
          <ol>
            <li><comp-link url="#self-doubt">The Logical Path to Beating Self-Doubt-Doubt</comp-link></li>
          </ol>
        </div>
        <hr/>

        <!-- Blog article -->
        <div class="blog-container">
          <div id="self-doubt">
            <h2>The Logical Path to Beating Self-Doubt</h2>
            <p>
              As an ambitious twenty something looking to be more than a software engineer, I always feel as if I’m
              the slowest of my peers to progress my career forward. Thinking as such, I often tie these thoughts
              to my past experiences, pondering if I had just tried harder in high school, or if I applied for
              internships as a freshman, my career as an engineer might have been different.
            </p>
            <p>
              The truth is no matter what I wish I had done, my career is in whatever state it’s in - and
              that won’t change with self-doubt.
            </p>
            <p>
              If I take a moment to consider the time required for me to achieve any of my personal milestones,
              in there exists hard work, feelings of missed opportunity, and moments of self reflection.
            </p>
            <p>
              The more I consider how I compartmentalize my time, I begin to realize that it is my ability to focus that enables me to
              reach my goals; regardless if said work was put in at the age of ten or the age of twenty two, there
              was work I as an individual had to overcome.
            </p>
            <p>
              And even if I didn’t think about it in the moment, there was probably someone over analyzing their
              experiences against mine, wondering what it took for me gain any form of success.
            </p>
            <p>
              Too many times, I catch myself contrasting my professional opportunities, and if I simply just
              concentrate on the next goal, rather than contemplating how I compare, I’d probably be
              farther than where I am right now.
            </p>
            <p>
              Thus, while the cause of my self-doubt is inspired by my deepest insecurities, overcoming it is an activity
              that requires acceptance of my past, and finding the strength to neglect my fears.
            </p>
            <p>
              So whenever you experience self-doubt, just concentrate - inevitably you'll find success.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}


customElements.define('view-just-concentrate', BlogJustConcetrate);