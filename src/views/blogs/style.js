import { css } from 'lit-element';


export const BlogStyle = css`
.blog {
  position: absolute;
  top: 0px;
  left: calc(23% + 60px);
  width: calc(67% - 60px);
  height: 100%;
  overflow-y: scroll;
  padding: 2rem;
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
  white-space: pre-wrap;     /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;    /* Opera 4-6 */
  white-space: -o-pre-wrap;  /* Opera 7 */
  word-wrap: break-word;     /* Internet Explorer 5.5+ */
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

canvas{
  background-color: #dd2176;
  margin-bottom: 20px;
}


@media screen and (max-width: 1080px){
  canvas{
    background-color: #e50053;
    margin: 0;
    padding: 0;
  }
}
`;
