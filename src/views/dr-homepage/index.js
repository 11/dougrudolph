import { LitElement, html } from 'lit-element';

import "components/dr-bio/";


class Homepage extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html `
      <dr-bio></dr-bio>

      <div class="blog-list-container">
        <div class="blog-post-link-container">
          <a href="./blogs/chunkwm/chunkwm.html">
            <div class="blog-post-link-header">
              <div>
                <span class="blog-post-link-title">Installing ChunkWM</span>
                <span class="tag"> Tutorial </span>
              </div>
              <div class="blog-post-link-date"> July 2018</div>
            </div>
            <div class="blog-post-link-description">
              <span> I recently had to start using OS X for work, and as a former Linux user, I felt something missing from my workflow. OS X is often thought of as the more capable and professional Linux machine, yet I still miss that ability to personalize the user experience to my liking. </span>
            </div>
          </a>
        </div>

          <div class="blog-post-link-container">
            <a href="./blogs/outward-wave/outward-wave.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title">Outward Wave</span>
                    <span class="tag"> Animation </span>
                </div>
                <span class="blog-post-link-date"> May 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span> I've come to the conclusion that I'm obsessed with wave animations and it's an actual problem. This is the fifth animation where I have used some form of unit circle logic, and I think it's time to create something with a little more creativity.  </span>
                </div>
              </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/reflective-grid/reflective-grid.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Reflective Grid</span>
                  <span class="tag"> Animation </span>
                </div>
                <span class="blog-post-link-date"> May 2018 </span>
              </div>
              <div class="blog-post-link-description">
                <span> So because it is memorial day, I was thinking about a new animation to code with the extra day off from work; and because Google is showing a waving American Flag as the banner to Google searches, I decided to create a rippling/reflective grid effect inspired by a waving flag. </span>
              </div>
            </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/vimrc-starter-kit.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Vimrc Starter Kit </span>
                  <span class="tag"> Tutorial </span>
                </div>
                <span class="blog-post-link-date"> April 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span>Throughout this post, we are going to be editing the .vimrc file. Before we start editing files, we first have to understand what files we are going to be creating throughout this tutorial - as well as the purpose of each file.</span>
              </div>
            </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/just-concentrate.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Just Concentrate </span>
                  <span class="tag"> Article </span>
                </div>
                <span class="blog-post-link-date"> April 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span>As an ambitious twenty something looking to be more than a software engineer, I always feel as if I’m the slowest of my peers to progress my career forward.</span>
              </div>
            </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/dna-helix/dna-helix.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> DNA Helix </span>
                  <span class="tag"> Animation </span>
                </div>
                <span class="blog-post-link-date"> March 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span>So recently, I've just been obsessed with using trig in my animations. I felt that my previous Wrapping Waves post didn't create the illusion I wanted, so I decided to give it another go.</span>
              </div>
            </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/wrapping-waves/wrapping-waves.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Wrapping Waves </span>
                  <span class="tag"> Animation </span>
                </div>
                <span class="blog-post-link-date"> February 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span> Okay, so I lied in the last blog. For this animation, I ended up using vanilla JavaScript again, and the overall experience, to my surprise, was enjoyable. </span>
              </div>
            </a>
          </div>


          <div class="blog-post-link-container">
            <a href="./blogs/particle-net/particle-net.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Particle Net </span>
                  <span class="tag"> Animation </span>
                </div>
                <span class="blog-post-link-date"> January 2018</span>
              </div>
              <div class="blog-post-link-description">
                <span> So this small animation is my first ever JavaScript canvas project, and let me tell you, this project has made me grow as a developer.  </span>
              </div>
            </a>
          </div>

          <div class="blog-post-link-container">
            <a href="./blogs/why-vim-part-one.html">
              <div class="blog-post-link-header">
                <div>
                  <span class="blog-post-link-title"> Why Vim? - Part One </span>
                  <span class="tag"> Article </span>
                </div>
                <span class="blog-post-link-date"> July 2017 </span>
              </div>
              <div class="blog-post-link-description">
                <span>It all started in a database class during my sophomore year of college when studying computer science; and at the time, I was zoning out in class - as you do throughout a 3 hour lecture.</span>
              </div>
            </a>
          </div>
      </div>
    `;

  }

}

customElements.define('dr-homepage', Homepage);