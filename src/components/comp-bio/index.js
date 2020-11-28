import { LitElement, html, css } from 'lit-element';

import { colors } from 'styles/colors';

import profileImg from "./assets/profile_img.jpg";

import "svgs/github";
import "svgs/linkedin";
import "svgs/mail";
import "svgs/resume";
import "svgs/twitter";
import "components/comp-link";

const BioContainer = css`
  .bio-container {
    position: fixed;
    left: 0px;
    top: 0;
    width: 23%;
    height: 100%;

    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: solid 1px ${colors.gray60};
    background-color: ${colors.darkBlue};
  }

  .bio-container > div {
    margin-bottom: 50px;
  }

  .bio-footer {
    font-family: 'Roboto', sans-serif;
    font-size: .5rem;
    color: ${colors.gray30};
  }
`;

const NameTitle = css`
  /* title is inline block to allow nav to be on the top bar as well, also has custom font */
  .name-title {
    font: normal 1.35rem Palatino, "Palatino Linotype", serif;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
  }

  .name-title img {
    border: solid 1px ${colors.gray20};
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  .name-title a {
    color: ${colors.black};
  }

  .name-title a:hover {
    color: ${colors.pink};
    transition: 0.2s ease-out;
  }
`;

const WorkHistory= css`
  .work-history {
    color: ${colors.gray30};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .work-history .work-history-entry {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
  }
`;

const SiteNavigation = css`
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
    color: ${colors.gray30};
    text-decoration: none;

    padding: 5px 10px;

    border-left: 1px solid ${colors.black};
    margin-bottom: .25rem;
    width: 100%;
  }

  .page-menu a:hover {
    color: ${colors.pink};
    text-decoration: none;
    border-left: 4px solid ${colors.pink};
    transition: 0.2s ease-out;
  }
`;

const IconList = css`
  .bio-links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 15px;
    width: 100%;
  }

  .icon-container {
    border-radius: 100px;
    border: 2px solid ${colors.gray10};
    padding: 10px;
    margin-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-container:hover {
    border: 2px solid ${colors.pink};
    transition: 0.2s ease-out;
  }

  .icon {
    width: .65rem;
    height: .65rem;
  }
`;


class Bio extends LitElement {
  static get styles() {
    return [
      BioContainer,
      NameTitle,
      WorkHistory,
      SiteNavigation,
      IconList,
    ];
  }

  render() {
    return html`
      <div class="bio-container">
        <!-- profile info -->
        <div class="name-title">
          <img alt="name-title-pic" src="${profileImg}"/>
          <div><a href="/"> Doug Rudolph </a></div>
        </div>

        <!-- work-history -->
        <div class="work-history">
          <div class="work-history-entry"> Creator of <comp-link url="https://schoolofthought.io">@schoolofthought.io</comp-link></b></div>
          <div class="work-history-entry"> First engineer <comp-link url="https://www.Interseller.io/about">@interseller.io</comp-link> </div>
          <div class="work-history-entry"> Former back-end engineer <comp-link url="https://buzzfeed.com">@BuzzFeed</comp-link> </div>
          <div class="work-history-entry"> Former engineering intern <comp-link url="https://tech.buzzfeed.com/meet-buzzfeed-techs-2017-intern-squad-7d9d3bcefa05">@BuzzFeed</comp-link> </div>
          <div class="work-history-entry"> <comp-link url="https://hackny.org/blog/2017/06/announcing-the-class-of-2017-hackny-fellows">@hackNY Fellow</comp-link> – 2017 </div>
        </div>

        <div class="page-menu">
          <a href="/"> Blog posts </a>
          <a href="/about"> About me </a>
          <a href="/contact"> Contact info </a>
        </div>

        <div class="bio-links">
          <div>
            <comp-link url="./doug_rudolph_resume.pdf" target="_blank">
              <span class="icon-container">
                <svg-resume></svg-resume>
              </span>
            </comp-link>
          </div>
          <div>
            <comp-link url="mailto:drudolph914@gmail.com?Subject=Hello" target="_top">
              <span class="icon-container">
                <svg-mail></svg-mail>
              </span>
            </comp-link>
          </div>
          <div>
            <comp-link url="https://twitter.com/_dougrudolph" target="_blank">
              <span class="icon-container">
                <svg-twitter></svg-twitter>
              </span>
            </comp-link>
          </div>
          <div>
            <comp-link url="https://github.com/11" target="_blank">
              <span class="icon-container">
                <svg-github></svg-github>
              </span>
            </comp-link>
          </div>
          <div>
            <comp-link url="https://linkedin.com/in/dougjrudolph" target="_blank">
              <span class="icon-container">
                <svg-linkedin></svg-linkedin>
              </span>
            </comp-link>
          </div>
        </div>

        <div class="bio-footer">
          © All rights reserved – Theme by <comp-link url="https://twitter.com/_dougrudolph">@_dougrudolph</comp-link>
        </div>
      </div>
    `;
  }
}

customElements.define('comp-bio', Bio);
