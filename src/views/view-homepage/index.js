import { LitElement, html, css } from 'lit-element';

import "components/comp-bio/";


const HomepageStyle = css`
body, html {
    color: #353535;
    font: normal 25px Palatino, "Palatino Linotype", serif;
    text-rendering: optimizeLegibility;
    height: 100%;
    width: calc(100%-60px);
    max-height: 100%;
    margin: 0;
    padding: 0;
}

/* make all links pink with no underline */
a {
    color: #E50053;
    text-decoration: underline solid transparent;
    transition: text-decoration 250ms ease;
}

/* on hover, underline the text */
a:hover {
    text-decoration: underline solid Currentcolor;
}



/* main webpage text-alignment */
.page-container {
    font: normal 25px Palatino, "Palatino Linotype", serif;
}

/* make headers in page container custom font size */
.page-container h2 {
    font: normal 35px Palatino, "Palatino Linotype", serif;
    padding-bottom:5px;
}

/* all unordered lists in a page container has size 20 font */
.page-container ul {
    font: normal 20px Palatino, "Palatino Linotype", serif;
}

/* list bottom padding is 3 px */
.page-container li {
    padding-bottom: 3px;
}

/* page header is size 50 */
.page-header h2 {
    font: normal 50px Palatino, "Palatino Linotype", serif;
    padding-bottom:5px;
}

/* page header list item is 23 px with 2px of bottom padding */
.page-header li {
    font: normal 23px Palatino, "Palatino Linotype", serif;
    padding-bottom: 2px;
}

.blog-list-container {
    position: absolute;
    top: 0px;
    left: calc(23% + 60px);
    width: calc(67% - 60px);
    height: 100%;
    padding: 30px 5% 0px;
    overflow-y: scroll;
 }

.blog-post-link-container {
    border-right: 1px solid #888888;
    padding: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}

.blog-post-link-container:hover {
    padding: 13px;
    border-right: 4px solid #E5005E;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.15);
    transform: scale(1.01, 1.01);
    transition: 0.3s ease-out;
}

.blog-post-link-container:hover .blog-post-link-title {
    transition: 0.3s ease-out;
    text-decoration: underline;
    text-decoration-color: #E5005E;
    color: #E5005E;
}

.blog-post-link-container a {
    color: #353535;
    text-decoration: none;
}

.blog-post-link-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.tag {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 100;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #353535;

    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 10px;
    background-color: #EFEFEF;
}

.blog-post-link-title {
    font: normal 28px HoeflerText-Regular, 'Hoefler Text', 'Goudy Old Style', 'Palatino', 'Palatino Linotype', serif;
}

/* TODO: update font and spacing for date */
.blog-post-link-date {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
}

.blog-post-link-description {
    font: normal 16px Palatino, "Palatino Linotype", serif;
    font-style: italic;
    line-height: 22px;
    text-overflow: wrap;
}


/*********************
 * BLOG POST STYLING *
 *********************/
.blog {
    position: absolute;
    top: 0px;
    left: calc(23% + 60px);
    width: calc(67% - 60px);
    height: 100%;
    overflow-y: scroll;
    padding: 30px 5% 0px;
}

.blog-header {
    width: 100%;
}

/*blog title*/
.blog-header h2 {
    font: normal 70px Palatino, "Palatino Linotype", serif;
    line-height: 0px;
}

.blog-header span {
    font: normal 22px Palatino, "Palatino Linotype", serif;
    font-style: italic;
}

/* Blog table of contents font and list type, add padding between elements */
.blog-header li {
    font: normal 23px Palatino, "Palatino Linotype", serif;
    padding-bottom: 2px;
}

/* Blog header font */
.blog-header p {
    font: normal 25px Palatino, "Palatino Linotype", serif;
}

/*Blog article title font */
.blog-container h2 {
    font: normal 50px Palatino, "Palatino Linotype", serif;
    padding-top: 15px;
}

/*List blog article list element font*/
.blog-container h3 {
    font: normal 26px Palatino, "Palatino Linotype", serif;
    padding: 0px;
    margin: 0px;
}

/*Blog content paragraph font */
.blog-container p {
    font: normal 20px Palatino, "Palatino Linotype", serif;
    line-height: 1.4;
    letter-spacing: .2px;
    margin: 1.3em 0px;
}

/*Blog minimal top padding*/
/*Used on p tags for a list type look, without using li or ol tags*/
.blog-container .list-paragraph {
    padding-top: 0px;
    margin-top: 5px;
}

/* Use uppercase letters as list type inside blog */
.blog-container ol {
    list-style-type:upper-alpha;
}

/* I forget :) */
.blog-container ol li {
    padding-bottom: 5px;
    font: normal 20px Palatino, "Palatino Linotype", serif;
}

.blog-container img {
    display:block;
    margin-left:auto;
    margin-right:auto;
}

.pic-container {
    z-index: -10;
    width: 260px;
    height: 260px;
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.pic-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}

/***************************************************************
 *                         UTILITIES                           *
 ***************************************************************/

#scroll-bar {
    background-color: #E50053;
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    z-index: 100;
}

code {
    border-radius: 3px;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    padding: 2px 2px 2px 2px;
    font-family: monaco, menlo, consolas, "courier new", monospace!important;
    color: #E50053;
    font-size: 1.0rem;
}
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}


div .code-block {
    border-radius: 3px;
    background-color: #F7F7F9;
    border: 1px solid #E1E1E8;
    padding: 2px 2px 2px 2px;
    font-family: monaco, menlo, consolas, "courier new", monospace!important;
    color: #333;
    font-size: 1.0rem;
    word-wrap: break-word;
}

span .keyword {
    color: #E50053;
}

span .comment {
    color: #D7D6D5;
}

/***************************************************************
 *                        NIGHT-MODE                           *
 ***************************************************************/
.night-mode {
	background-color: #2DA89C;
}

.night-mode a {
    color: #2DA89C;
}

/***************************************************************
 *                         MOBILE                              *
 ***************************************************************/

/* change the padding to fill the screen on mobile */
@media screen and (max-width:1080px) {

    #scroll-bar {
        background-color: #E50053;
        position: fixed;
        top: 0;
        left: 0;
        height: 6px;
        z-index: 100;
    }

    code {
        font-size: 30px;
    }

    div .code-block {
        font-size: 28px;
    }
    pre {
        white-space: pre-wrap;       /* Since CSS 2.1 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;
    }

    /* Adjusting body settings to look better on mobile devices */
    body {
        background-color: #FDFDFD;
        color: #353535;
        font: normal 150% Palatino, "Palatino Linotype", serif;
        text-rendering: optimizeLegibility;
        padding-right: 5%;
        padding-left: 5%;
    }

    /* center the header for all pages */
    .header-container {
        font: 50px;
        width: 100%;
        z-index: 10;
    }

    /* Enlarge title and center it at the top of the screen */
    .title {
        display: block;
        text-align: center;
        font: normal 325% Palatino, "Palatino Linotype", serif;
        padding-top: 1%;
        line-height: 1%;
    }

    /* Enlarge font by 1.5 times the desktop website */
    .home-page-container {
        font: normal 60px Palatino, "Palatino Linotype", serif;
    }

    /* Horizontally centers nav */
    nav {
        text-align: center;
        line-height: 0px;
        float: none;
        font: normal 200% Palatino, "Palatino Linotype", serif;
    }

    /* Horizontally centers nav ul */
    nav ul {
        margin-left: 0px;
        float: none;
        padding-left: 0px;
    }

    /* add padding to the '-' character in the nav */
    nav ul li .nav-pad {
        padding-right: 25px;
        padding-left: 25px;
    }

    /* Increase header font by 3 times the desktop site*/
    .page-header h2 {
        font: normal 300% Palatino, "Palatino Linotype", serif;
        line-height: 2px;
    }

    /* Enlarge font by 1.5 times the desktop website */
    .page-container {
        font: normal 55px Palatino, "Palatino Linotype", serif;
    }

    /* Enlarge font by 1.3 times the desktop website */
    .bio-links {
        font: normal 160% Palatino, "Palatino Linotype", serif;
    }

    /*blog title*/
    .blog-header h2 {
        font: normal 60px Palatino, "Palatino Linotype", serif;
    }

    .blog-header span {
        font: normal 40px Palatino, "Palatino Linotype", serif;
        font-style: italic;
    }

    /* Blog header font */
    .blog-header p {
        font: normal 50px Palatino, "Palatino Linotype", serif;
    }

    /* Blog table of contents font and list type, add padding between elements */
    .blog-header li {
        font: normal 40px Palatino, "Palatino Linotype", serif;
    }

    /*Blog article title font */
    .blog-container h2 {
        font: normal 50px Palatino, "Palatino Linotype", serif;
    }

    /* Increase size of paragraph font */
    .blog-container p {
        font: normal 40px Palatino, "Palatino Linotype", serif;
    }

    /* centering the list on mobile */
    .blog-entry {
        padding-left: 15%;
        padding-right: 15%;
    }

    /* Add more padding to the blog menu titles*/
    .blog-entry li {
        padding-top: 5%;
        padding-bottom: 5%;
    }

    /* Increase font inside blog menu */
    .blog-entry li a {
        font: normal 60px HoeflerText-Regular, 'Hoefler Text', 'Goudy Old Style', 'Palatino', 'Palatino Linotype', serif;
    }

    /* Increase font for blog description */
    .blog-entry li span {
        font: normal 40px Palatino, "Palatino Linotype", serif;
        font-style: italic;
    }

}


/***************************************************************
 *                         MOBILE                              *
 ***************************************************************/


`;

class Homepage extends LitElement {

  static get styles() {
    return [ HomepageStyle ];
  }
  constructor() {
    super();
  }

  render() {
    return html `
      <comp-bio></comp-bio>

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

customElements.define('view-homepage', Homepage);