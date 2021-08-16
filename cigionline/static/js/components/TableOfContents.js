import React, { useState } from 'react';


const TableOfContents = ({ rootUrl, slide, slides }) => {

	const [contentOpacity, updatecontentOpacity] = useState(true);
    const [socialIcons, updatesocialIcons] = useState(true);
    const originUrl = window.location.origin;
    const location = window.location.href;

	function firstHalfSlides() {
		var slidesExceptTOC = slides.filter(function(iterslide){
			return iterslide.value.slug != slide.value.slug
		});
		var first_half = (slidesExceptTOC.length - 1) % 2 == 0 ? slidesExceptTOC.length/2 : slidesExceptTOC.length/2 + 1;
	return slidesExceptTOC.map(function(slide, index){
		let hrefUrl = rootUrl+"/"+slide.value.slug+"/";
		return index<first_half ? (<div className="grid-x slide-link">
		                  <div className="cell small-1 medium-1">
		                    <p className="slide-number ">
		                      {index+1}
		                    </p>
		                  </div>
		                  <div className="cell small-11 medium-11">
		                    <a href={hrefUrl} id="ember1404" className="ember-view">
		                    {slide.value.title}
		                    </a>
		                  </div>
		                </div>) : ''})
}

function secondHalfSlides() {
		var slidesExceptTOC = slides.filter(function(iterslide){
			return iterslide.value.slug != slide.value.slug
		});
		var first_half = (slidesExceptTOC.length - 1) % 2 == 0 ? slidesExceptTOC.length/2 : slidesExceptTOC.length/2 + 1;
		console.log(first_half);
	return slidesExceptTOC.map(function(slide, index){
		let hrefUrl = rootUrl+"/"+slide.value.slug+"/"; 
		return index>first_half ? (<div className="grid-x slide-link">
		                  <div className="cell small-1 medium-1">
		                    <p className="slide-number ">
		                      {index+1}
		                    </p>
		                  </div>
		                  <div className="cell small-11 medium-11">
		                    <a href={hrefUrl} id="ember1404" className="ember-view">
		                    {slide.value.title}
		                    </a>
		                  </div>
		                </div>) : ''})
}

 const changeStyle = (e) => {
    if (contentOpacity){
      updatecontentOpacity(false)

    }else{
      updatecontentOpacity(true)
    }
  }

    const changeSocialStyle = (e) => {
    if (socialIcons){
      updatesocialIcons(false)

    }else{
      updatesocialIcons(true)
    }
  }  

console.log(firstHalfSlides());


    return (
      <div id="ember13" class="liquid-container ember-view" style={{}}>
      <div id="ember2004" class="liquid-child ember-view" style={{top: 0, left: 0, opacity: 1}}>
		<div id="ember1402" className="ember-view">
		  <div className="background-row background-table-of-contents" style={{}}>
		      <div className="hover-reveal hover-reveal-gradient-right chairs-message-background-img show-for-medium" style={{ backgroundImage: slide.value.background_image ? `url(${originUrl}${slide.value.background_image.original})` : '' }}>
                <div className="quote quote-right"  style={{opacity: contentOpacity ? 0 : 1}}>
                  <h3 className="hover-reveal-quote"  style={{opacity: contentOpacity ? 0 : 1}} dangerouslySetInnerHTML={{ __html: slide.value.quote ? slide.value.quote.message : '' }}>
                    
                  </h3>
                  <h4 className="hover-reveal-quote-source" style={{opacity: contentOpacity ? 0 : 1}} dangerouslySetInnerHTML={{ __html: slide.value.quote ? slide.value.quote.subtitle : '' }}>
                </h4>
                  <div className="hover-reveal-quote-line"  style={{opacity: contentOpacity ? 0 : 1}}></div>
                </div>
              </div>
		  </div>
		  <div className="table-of-contents" style={{opacity: contentOpacity ? 1 : 0}}>
		    <div className="grid-container">
		      <div className="grid-x grid-margin-x hover-reveal-hide" style={{opacity: 1}}>
		        <div className="cell">
		          <h1>2021 Annual Report</h1>
		        </div>
		      </div>
		      <div className="grid-x grid-margin-x hover-reveal-hide" style={{opacity: 1}}>
		        <div className="cell">
		          <div className="toc-content">
		            <div className="toc-menu">
		              Table of Contents
		              <span>/</span>
		              <button className="show-acknowledgements-btn" type="button" data-ember-action="" data-ember-action-1403="1403">Acknowledgements</button>
		            </div>
		            <div className="grid-x slide-content">
		              <div className="cell medium-5">
		                {firstHalfSlides()}
		              </div>
		              <div className="cell medium-2"></div>
		              <div className="cell medium-5">
		                {secondHalfSlides()}
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="footer clearfix show-for-large">
                <button className="footer-icon-btn" type="button" data-ember-action="" data-ember-action-1272="1272" onMouseOver={changeStyle} onMouseOut={changeStyle} style={{opacity: 1}}>
                  <div className="radialclassName-progress">
                    <div className="circle">
                      <div className="mask left">
                        <div className="fill"></div>
                      </div>
                      <div className="mask right">
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="camera-retro" data-prefix="fal" id="ember1273" className="svg-inline--fa fa-camera-retro fa-w-16 fa-lg ember-view">
                    <path fill="currentColor" d="M32 58V38c0-3.3 2.7-6 6-6h116c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6zm344 230c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88zm-120 0c0-17.6 14.4-32 32-32 8.8 0 16-7.2 16-16s-7.2-16-16-16c-35.3 0-64 28.7-64 64 0 8.8 7.2 16 16 16s16-7.2 16-16zM512 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h136l33.6-44.8C226.7 39.1 240.9 32 256 32h208c26.5 0 48 21.5 48 48zM224 96h240c5.6 0 11 1 16 2.7V80c0-8.8-7.2-16-16-16H256c-5 0-9.8 2.4-12.8 6.4L224 96zm256 48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V144z"></path>
                  </svg>
                </button>
                <div className="cigi-social" style={{opacity: contentOpacity ? 1 : 0, width: socialIcons ? 40 : 160}}>
                  <a className="social-1-btn" href={"https://www.facebook.com/sharer/sharer.php?u="+location + "/&t="+slide.value.title+"??fbrefresh=CAN_BE_ANYTHING&scrape=true"} data-ember-action="" data-ember-action-3431="3431" style={{opacity: socialIcons ? 0 : 1, visibility: socialIcons ? "hidden" : "visible", left: socialIcons ? 0 : 0 }}>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="facebook-square" data-prefix="fab" id="ember3432" className="svg-inline--fa fa-facebook-square fa-w-14 fa-lg ember-view">
                <path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </a>
            <a className="social-2-btn" href={"https://twitter.com/intent/tweet?status=2021+CIGI+Annual+Report+"+location} target="_blank" rel="noopener noreferrer" style={{opacity: socialIcons ? 0 : 1, visibility: socialIcons ? "hidden" : "visible", left: socialIcons ? 0 : 40}}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="twitter" data-prefix="fab" id="ember3433" className="svg-inline--fa fa-twitter fa-w-16 fa-lg ember-view">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a className="social-3-btn" href={"https://www.linkedin.com/shareArticle?mini=true&amp;url="+location} target="_blank" rel="noopener noreferrer" style={{opacity: socialIcons ? 0 : 1, visibility: socialIcons ? "hidden" : "visible", left: socialIcons ? 0 : 80}}>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="linkedin-in" data-prefix="fab" id="ember3434" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-lg ember-view">
                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
                  { socialIcons ? 
            <button className="open-social-menu-btn" type="button" data-ember-action="" data-ember-action-3435="3435" onClick={changeSocialStyle} style={{opacity: socialIcons ? 1 : 0}}>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="share-alt" data-prefix="fal" id="ember3436" className="svg-inline--fa fa-share-alt fa-w-14 fa-lg ember-view" >
                <path fill="currentColor" d="M352 320c-28.6 0-54.2 12.5-71.8 32.3l-95.5-59.7c9.6-23.4 9.7-49.8 0-73.2l95.5-59.7c17.6 19.8 43.2 32.3 71.8 32.3 53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 13 2.6 25.3 7.2 36.6l-95.5 59.7C150.2 172.5 124.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c28.6 0 54.2-12.5 71.8-32.3l95.5 59.7c-4.7 11.3-7.2 23.6-7.2 36.6 0 53 43 96 96 96s96-43 96-96c-.1-53-43.1-96-96.1-96zm0-288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path>
              </svg>
            </button> : 

            <button class="close-social-menu-btn" type="button" data-ember-action="" data-ember-action-1001="1001" onClick={changeSocialStyle} style={{opacity: socialIcons ? 0 : 1}}>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="arrow-right" data-prefix="fal" id="ember1002" class="svg-inline--fa fa-arrow-right fa-w-14 fa-lg ember-view"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
              </svg>
            </button>}
                </div>
              </div>
		</div>
      </div>
      </div>
    );
}

export default TableOfContents;