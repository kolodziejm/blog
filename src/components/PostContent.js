import styled from 'styled-components'

export default styled.div`
  max-width: 80rem;
  min-height: 100%;
  margin: 0 auto 6rem auto;
  font-size: 1.8rem;
  padding: 0 1.5rem;
  color: #333;

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }

  img {
    margin-bottom: 2.32rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0.67em 0;
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  h2 {
    margin-bottom: 2.32rem;
    font-weight: bold;
    font-size: 2.7rem;
    text-rendering: optimizeLegibility;
  }

  h3 {
    margin-bottom: 2.32rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.1rem;
  }

  h4 {
    margin-bottom: 2.32rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.6rem;
  }

  h5 {
    margin-bottom: 2.32rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.36rem;
  }

  h6 {
    margin-bottom: 2.32rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.248rem;
  }

  hgroup {
    margin-bottom: 2.32rem;
  }

  mark {
    background-color: #abff4f;
    color: #000;
  }

  ul {
    margin-left: 1.4rem;
    margin-bottom: 2.32rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin-left: 1.4rem;
    margin-bottom: 2.32rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    margin-left: 1.4rem;
    margin-bottom: 2.32rem;
  }

  dd {
    margin-bottom: 2.32rem;
  }

  p {
    margin-bottom: 2.32rem;
  }

  figure {
    margin-bottom: 2.32rem;
  }

  pre {
    margin-bottom: 2.32rem;
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 2.32rem;
  }

  table {
    margin-bottom: 2.32rem;
    font-size: 1rem;
    line-height: 2.32rem;
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    margin-bottom: 2.32rem;
  }

  blockquote {
    font-style: italic;
    margin-bottom: 2.32rem;
    padding-top: 2.32rem;
    padding-left: 2.32rem;
    padding-bottom: 2.32rem;
    padding-right: 2.32rem;
    background-color: #f8f8f8;
    border-left: 4px solid #3a86ff;
  }

  form {
    margin-bottom: 2.32rem;
  }

  noscript {
    margin-bottom: 2.32rem;
  }

  iframe {
    margin-bottom: 2.32rem;
  }

  hr {
    margin-bottom: calc(2.32rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    margin-bottom: 2.32rem;
  }

  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dt {
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(2.32rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 2.32rem;
    margin-bottom: calc(2.32rem / 2);
    margin-top: calc(2.32rem / 2);
  }
  li > ul {
    margin-left: 2.32rem;
    margin-bottom: calc(2.32rem / 2);
    margin-top: calc(2.32rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(2.32rem / 2);
  }

  code {
    line-height: 2.32rem;
    font-size: 1.6rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 2.32rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 2.32rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
`
