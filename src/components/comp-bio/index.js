import { LitElement, html, css } from 'lit-element';

import {
  pink,
  gray10,
  gray20,
  gray30,
  black
} from 'styles/colors';

import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";


class Bio extends LitElement {
  static get styles() {
    return css`
      .bio-container {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 23%;
        height: 100%;
        max-height: 100%;

        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-right: solid 1px ${gray20};

        overflow-y: hidden;
      }

      .bio-container > div {
        margin-bottom: 50px;
      }


      /* title is inline block to allow nav to be on the top bar as well, also has custom font */
      .profile{
        font: normal 1.35rem Palatino, "Palatino Linotype", serif;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: baseline;
      }

      .profile img {
        border: solid 1px ${gray20};
        border-radius: 100%;
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
      }

      .profile a {
        color: ${black};
      }

      .profile a:hover {
        color: ${pink};
      }

      .description {
        color: ${gray30};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .description .description-entry {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
      }

      .page-menu {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 18px;
        letter-spacing: 1px;

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .page-menu a {
        display: inline-block;
        color: ${gray30};
        text-decoration: none;

        padding: 5px 10px;

        border-left: 1px solid ${black};
        margin-bottom: .25rem;
        width: 100%;
      }

      .page-menu a:hover {
        color: ${pink};
        text-decoration: none;
        border-left: 4px solid ${pink};
        transform: scale(1, 1.01);
        transition: 0.2s ease-out;
      }

      .bio-links {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        font-size: 15px;
        width: 100%;
      }

      .icon-container {
        border-radius: 100px;
        border: 2px solid ${gray10};
        padding: 10px;
        margin-right: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .icon-container:hover {
        border: 2px solid ${pink};
        transition: 0.2s ease-out;
      }

      .icon {
        width: .65rem;
        height: .65rem;
      }

      .bio-footer {
        font-family: 'Roboto', sans-serif;
        font-size: .5rem;
        color: ${gray30};
      }
    `;
  }

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
          <a href="/about"> About me </a>
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

customElements.define('comp-bio', Bio);