import { LitElement, html } from 'lit-element';

import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";


class Bio extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" type="module" href="./style.css"/>

      <div class="bio-container">
        <!-- profile info -->
        <div class="profile">
          <img alt="profile-pic" src="./img/profile_img.jpg"/>
          <div><a href="./index.html"> Doug Rudolph </a></div>
        </div>

        <!-- Description -->
        <div class="description">
          <div class="description-entry"> First engineer <a target="_blank" href="https://www.Interseller.io/about">@Interseller.io</a> </div>
          <div class="description-entry"> Former back-end engineer <a href="https://buzzfeed.com">@BuzzFeed</a> </div>
          <div class="description-entry"> Former SWE intern <a target="_blank" href="https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05">@BuzzFeed</a> </div>
          <div class="description-entry"> <a target="_blank" href="https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows">@hackNY Fellow </a> – 2017 </div>
          <div class="description-entry"> Rendering 👾 – Rust 🦀 – Haskell <b style="color: purple">λ</b></div>
        </div>

        <div class="page-menu">
          <a href="./index.html"> Blog posts </a>
          <a href="./about.html"> About me </a>
          <a href="./contact.html"> Contact info </a>
        </div>

        <div class="bio-links">
          <div>
            <a href="./doug_rudolph_resume.pdf" target="_blank">
              <span class="icon-container">
                <svg-resume></svg-resume>
              </span>
            </a>
          </div>
          <div>
            <a href="mailto:drudolph914@gmail.com?Subject=Hello" target="_top">
              <span class="icon-container">
                <svg-mail></svg-mail>
              </span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/_dougrudolph" target="_blank">
              <span class="icon-container">
                <svg-twitter></svg-twitter>
              </span>
            </a>
          </div>
          <div>
            <a href="https://github.com/11" target="_blank">
              <span class="icon-container">
                <svg-github></svg-github>
              </span>
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/dougjrudolph" target="_blank">
              <span class="icon-container">
                <svg-linkedin></svg-linkedin>
              </span>
            </a>
          </div>
        </div>

        <div class="bio-footer">
          © All rights reserved – Theme by: <a target="_blank" href="https://twitter.com/_dougrudolph">@_dougrudolph</a>
        </div>
      </div>
    `;
  }
}

customElements.define('dr-bio', Bio);