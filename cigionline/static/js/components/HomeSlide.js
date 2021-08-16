import React, { Component } from 'react';

const HomeSlide = ({ year, language }) => {

    return (
      <div id="ember13" class="liquid-container ember-view" style={{}}><div id="ember15" class="liquid-child ember-view" style={{top: 0, left: 0}}><div class="background-row show-for-medium">
  <div class="background-image background-index"></div>
</div>
<div class="home-page">
	{ language == 'en' ?
  <div class="intro-logo">
    <span class="year">{year}</span>
    <>
    <span class="text">
      <span class="annual">Annual</span>
      <br/>
      <span class="report">Report</span>
    </span>
    </>
  </div> : <div class="intro-logo">
  <>
    <span class="text">
      <span class="report">Rapport</span>
      <br/>
      <span class="annual">Annuel</span>
    </span>
    </>	
    <span class="year">{year}</span>
  </div>}
  <div class="navigation-section">
    <p>Use the mouse or keyboard to navigate</p>
    <svg width="16px" height="59px" viewBox="0 0 16 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="IN-PROGRESS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-2-Copy-6" transform="translate(-736.000000, -863.000000)">
          <g id="Group-2-Copy" transform="translate(736.000000, 864.000000)">
            <path id="Line-2" d="M8,57.1376812 L12.5,48.1376812 L3.5,48.1376812 L8,57.1376812 Z M7.5,42.5 L7.5,48.6376812 L7.5,49.1376812 L8.5,49.1376812 L8.5,48.6376812 L8.5,42.5 L8.5,42 L7.5,42 L7.5,42.5 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
            <path id="Line-2" d="M8,-0.166666667 L3.5,8.83333333 L12.5,8.83333333 L8,-0.166666667 Z M8.5,13.5 L8.5,8.33333333 L8.5,7.83333333 L7.5,7.83333333 L7.5,8.33333333 L7.5,13.5 L7.5,14 L8.5,14 L8.5,13.5 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
            <g id="Group" transform="translate(0.000000, 13.000000)">
              <rect id="Rectangle-5" stroke="#FFFFFF" x="0.5" y="0.5" width="15" height="29" rx="7.5"></rect>
              <rect id="Rectangle-5" fill="#FFFFFF" x="7.11111111" y="9" width="1.77777778" height="5" rx="0.888888889"></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <svg class="up-down-icon" width="29px" height="60px" viewBox="0 0 29 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="IN-PROGRESS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-2-Copy-7" transform="translate(-751.000000, -861.000000)">
          <g id="Group-5" transform="translate(751.000000, 861.000000)">
            <polygon id="Triangle-Copy" fill="#FFFFFF" points="14.1111111 48.3116883 11 43.6363636 17.2222222 43.6363636"></polygon>
            <polygon id="Triangle-Copy-4" fill="#FFFFFF" transform="translate(14.111111, 14.025974) rotate(-180.000000) translate(-14.111111, -14.025974) " points="14.1111111 16.3636364 11 11.6883117 17.2222222 11.6883117"></polygon>
            <rect id="Rectangle-8-Copy" stroke="#FFFFFF" x="0.611111111" y="31.6688312" width="27.7777778" height="27.8311688" rx="4"></rect>
            <rect id="Rectangle-8-Copy-3" stroke="#FFFFFF" x="0.611111111" y="0.5" width="27.7777778" height="27.8311688" rx="4"></rect>
          </g>
        </g>
      </g>
    </svg>
  </div>
</div>
<div class="footer clearfix show-for-large">
<div class="cigi-social">
    <button class="social-1-btn" type="button" data-ember-action="" data-ember-action-16="16">
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="facebook-square" data-prefix="fab" id="ember17" class="svg-inline--fa fa-facebook-square fa-w-14 fa-lg ember-view"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
</svg>
    </button>
    <a class="social-2-btn" href="https://twitter.com/intent/tweet?status=2020+CIGI+Annual+Report+https://www.cigionline.org/interactives/2020annualreport/en/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="twitter" data-prefix="fab" id="ember18" class="svg-inline--fa fa-twitter fa-w-16 fa-lg ember-view"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
</svg>
    </a>
    <a class="social-3-btn" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.cigionline.org/interactives/2020annualreport/en/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="linkedin-in" data-prefix="fab" id="ember19" class="svg-inline--fa fa-linkedin-in fa-w-14 fa-lg ember-view"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
</svg>
    </a>
      <button class="open-social-menu-btn" type="button" data-ember-action="" data-ember-action-20="20">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="share-alt" data-prefix="fal" id="ember21" class="svg-inline--fa fa-share-alt fa-w-14 fa-lg ember-view"><path fill="currentColor" d="M352 320c-28.6 0-54.2 12.5-71.8 32.3l-95.5-59.7c9.6-23.4 9.7-49.8 0-73.2l95.5-59.7c17.6 19.8 43.2 32.3 71.8 32.3 53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 13 2.6 25.3 7.2 36.6l-95.5 59.7C150.2 172.5 124.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c28.6 0 54.2-12.5 71.8-32.3l95.5 59.7c-4.7 11.3-7.2 23.6-7.2 36.6 0 53 43 96 96 96s96-43 96-96c-.1-53-43.1-96-96.1-96zm0-288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path>
</svg>
      </button>
  </div>
</div>

</div></div>
    )
}

export default HomeSlide;