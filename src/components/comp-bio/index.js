import { LitElement, html, css } from 'lit-element';

import {
  pink,
  gray10,
  gray20,
  gray30,
  black
} from 'styles/colors';

import profileImg from "./assets/profile_img.jpg";
import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";
import "components/comp-link";


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
          <img alt="profile-pic" src="${profileImg}"/>
          <div><a href="/"> Doug Rudolph </a></div>
        </div>

        <!-- Description -->
        <div class="description">
          <div class="description-entry"> Creator of <comp-link url="https://schoolofthought.io" text="@schoolofthought.io"></comp-link></b></div>
          <div class="description-entry"> First engineer <comp-link url="https://www.Interseller.io/about" text="@interseller.io"></comp-link> </div>
          <div class="description-entry"> Former back-end engineer <comp-link url="https://buzzfeed.com" text="@BuzzFeed"></comp-link> </div>
          <div class="description-entry"> Former engineering intern <comp-link url="https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05" text="@BuzzFeed"></comp-link> </div>
          <div class="description-entry"> <comp-link url="https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows" text="@hackNY Fellow"></comp-link> – 2017 </div>
        </div>

        <div class="page-menu">
          <a href="/"> Blog posts </a>
          <a href="/about"> About me </a>
          <a href="/contact"> Contact info </a>
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
          © All rights reserved – Theme by <comp-link url="https://twitter.com/_dougrudolph" text="@_dougrudolph"></comp-link>
        </div>
      </div>
    `;
  }
}

customElements.define('comp-bio', Bio);
