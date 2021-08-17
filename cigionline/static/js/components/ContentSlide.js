import React, { useState, useEffect, Component } from "react";

const ContentSlide = ({ slide }) => {
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);
  const originUrl = window.location.origin;
  const location = window.location.href;

  function contentLinkIcon(linkType) {
    if (linkType == "PUBLICATION") {
      return (
        <svg
          viewBox="0 0 384 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden="true"
          data-icon="file-alt"
          data-prefix="fal"
          id="ember3428"
          className="svg-inline--fa fa-file-alt fa-w-12 fa-lg ember-view"
        >
          <path
            fill="currentColor"
            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"
          ></path>
        </svg>
      );
    } else if (linkType == "VIDEO") {
      return (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden="true"
          data-icon="film"
          data-prefix="fal"
          id="ember1205"
          class="svg-inline--fa fa-film fa-w-16 fa-lg ember-view"
        >
          <path
            fill="currentColor"
            d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V284c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm0-176c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm96 144c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"
          ></path>
        </svg>
      );
    } else if (linkType == "OPINION") {
      return (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden="true"
          data-icon="comment-alt-lines"
          data-prefix="fal"
          id="ember1263"
          class="svg-inline--fa fa-comment-alt-lines fa-w-16 fa-lg ember-view"
        >
          <path
            fill="currentColor"
            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM280 240H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm96-96H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"
          ></path>
        </svg>
      );
    } else if (linkType == "MEDIA") {
      return (
        <svg
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden="true"
          data-icon="newspaper"
          data-prefix="fal"
          id="ember1323"
          class="svg-inline--fa fa-newspaper fa-w-18 fa-lg ember-view"
        >
          <path
            fill="currentColor"
            d="M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48 48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178 16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96 400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224 0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"
          ></path>
        </svg>
      );
    } else if (linkType == "PODCAST") {
      return (
        <svg
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden="true"
          data-icon="volume-up"
          data-prefix="fal"
          id="ember1619"
          class="svg-inline--fa fa-volume-up fa-w-18 fa-lg ember-view"
        >
          <path
            fill="currentColor"
            d="M342.91 193.57c-7.81-3.8-17.5-.48-21.34 7.5-3.81 7.97-.44 17.53 7.53 21.34C343.22 229.2 352 242.06 352 256s-8.78 26.8-22.9 33.58c-7.97 3.81-11.34 13.38-7.53 21.34 3.86 8.05 13.54 11.29 21.34 7.5C368.25 306.28 384 282.36 384 256s-15.75-50.29-41.09-62.43zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34zM421.51 1.83c-7.89-4.08-17.53-1.12-21.66 6.7-4.13 7.81-1.13 17.5 6.7 21.61 84.76 44.55 137.4 131.1 137.4 225.85s-52.64 181.3-137.4 225.85c-7.82 4.11-10.83 13.8-6.7 21.61 4.1 7.75 13.68 10.84 21.66 6.7C516.78 460.06 576 362.67 576 255.99c0-106.67-59.22-204.06-154.49-254.16zM480 255.99c0-66.12-34.02-126.62-88.81-157.87-7.69-4.38-17.59-1.78-22.04 5.89-4.45 7.66-1.77 17.44 5.96 21.86 44.77 25.55 72.61 75.4 72.61 130.12s-27.84 104.58-72.61 130.12c-7.72 4.42-10.4 14.2-5.96 21.86 4.3 7.38 14.06 10.44 22.04 5.89C445.98 382.62 480 322.12 480 255.99z"
          ></path>
        </svg>
      );
    }
  }

  function loadContentLinks() {
    return slide.value.links.map(function (link) {
      return (
        <a
          className="clearfix content-link show-for-large"
          href={link.value.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="float-left content-link-icon">
            {contentLinkIcon(link.value.type)}
          </div>
          <div className="content-copy">
            <h4>{link.value.type}</h4>
            <p>
              <span
                className="underline"
                dangerouslySetInnerHTML={{ __html: link.value.title }}
              ></span>
            </p>
          </div>
        </a>
      );
    });
  }

  function loadBody() {
    return slide.value.body.map(function (paragraph) {
      return paragraph.value;
    });
  }

  const changeStyle = (e) => {
    if (contentOpacity) {
      updatecontentOpacity(false);
    } else {
      updatecontentOpacity(true);
    }
  };

  const changeSocialStyle = (e) => {
    if (socialIcons) {
      updatesocialIcons(false);
    } else {
      updatesocialIcons(true);
    }
  };

  const getWidth = () => {
    let width = 0;
    for (let i = 1; i < 5; i++) {
      width = width + i * 10;
      return width;
    }
  };

  return (
    <div id="ember13" className="liquid-container ember-view" style={{}}>
      <div
        id="ember2004"
        className="liquid-child ember-view"
        style={{ top: 0, left: 0, opacity: 1 }}
      >
        <div id="ember1402">
          <div id="ember1271">
            <div className="background-row show-for-medium" style={{}}>
              <div
                className="background-image"
                style={{
                  backgroundImage: slide.value.background_image
                    ? `url(${originUrl}${slide.value.background_image.original})`
                    : "",
                }}
              >
                <div
                  className="hover-reveal hover-reveal-gradient-right"
                  style={{ opacity: contentOpacity ? 0 : 1 }}
                >
                  <div
                    className="quote quote-right"
                    style={{ opacity: contentOpacity ? 0 : 1 }}
                  >
                    <h3
                      className="hover-reveal-quote"
                      style={{ opacity: contentOpacity ? 0 : 1 }}
                      dangerouslySetInnerHTML={{
                        __html: slide.value.quote
                          ? slide.value.quote.message
                          : "",
                      }}
                    ></h3>
                    <h4
                      className="hover-reveal-quote-source"
                      style={{ opacity: contentOpacity ? 0 : 1 }}
                      dangerouslySetInnerHTML={{
                        __html: slide.value.quote
                          ? slide.value.quote.subtitle
                          : "",
                      }}
                    ></h4>
                    <div
                      className="hover-reveal-quote-line"
                      style={{ width: contentOpacity ? 0 : 100 }}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="ember3426" className="ember-view">
                {slide.value.background_video ? (
                  <video
                    playsinline=""
                    autoplay=""
                    muted=""
                    loop=""
                    id="background-video"
                    className="video-background"
                  >
                    <source
                      src={`${originUrl}${slide.value.background_video.original}`}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  ""
                )}
              </div>
              <div className="background-overlay hover-reveal-hide"></div>
              <div className="background-gradient-overlay hover-reveal-hide"></div>
            </div>
            <div
              className="content-slide hover-reveal-hide"
              style={{ opacity: contentOpacity ? 1 : 0 }}
            >
              <div id="ember3427" className="ember-view">
                <div className="slide-content grid-container">
                  <div className="grid-x grid-margin-x">
                    <div className="cell large-6">
                      <div className="slide-title">
                        <h1>{slide.value.title}</h1>
                      </div>
                      <div className="content-links">{loadContentLinks()}</div>
                    </div>
                    <div className="cell large-6 paragraphs">
                      <div
                        dangerouslySetInnerHTML={{ __html: loadBody() }}
                      ></div>
                      <div className="content-links-mobile hide-for-large">
                        <a
                          className="clearfix content-link-mobile"
                          href="https://www.cigionline.org/sites/default/files/documents/Strategic_Plan-2020-web-2_1.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read CIGI’s new Strategic Plan focused on shaping
                          governance in a digital era.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer clearfix show-for-large">
              <button
                className="footer-icon-btn"
                type="button"
                data-ember-action=""
                data-ember-action-3429="3429"
                onMouseOver={changeStyle}
                onMouseOut={changeStyle}
                style={{ opacity: 1 }}
              >
                <div className="radial-progress">
                  <div className="circle">
                    <div className="mask left">
                      <div className="fill"></div>
                    </div>
                    <div className="mask right">
                      <div className="fill"></div>
                    </div>
                  </div>
                </div>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  data-icon="camera-retro"
                  data-prefix="fal"
                  id="ember3430"
                  className="svg-inline--fa fa-camera-retro fa-w-16 fa-lg ember-view"
                >
                  <path
                    fill="currentColor"
                    d="M32 58V38c0-3.3 2.7-6 6-6h116c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6zm344 230c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88zm-120 0c0-17.6 14.4-32 32-32 8.8 0 16-7.2 16-16s-7.2-16-16-16c-35.3 0-64 28.7-64 64 0 8.8 7.2 16 16 16s16-7.2 16-16zM512 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h136l33.6-44.8C226.7 39.1 240.9 32 256 32h208c26.5 0 48 21.5 48 48zM224 96h240c5.6 0 11 1 16 2.7V80c0-8.8-7.2-16-16-16H256c-5 0-9.8 2.4-12.8 6.4L224 96zm256 48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V144z"
                  ></path>
                </svg>
              </button>
              <div
                className="cigi-social"
                style={{
                  opacity: contentOpacity ? 1 : 0,
                  width: socialIcons ? 40 : 160,
                }}
              >
                <a
                  className="social-1-btn"
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    location +
                    "/&t=" +
                    slide.value.title +
                    "??fbrefresh=CAN_BE_ANYTHING&scrape=true"
                  }
                  data-ember-action=""
                  data-ember-action-3431="3431"
                  style={{
                    opacity: socialIcons ? 0 : 1,
                    visibility: socialIcons ? "hidden" : "visible",
                    left: socialIcons ? 0 : 0,
                  }}
                >
                  <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    data-icon="facebook-square"
                    data-prefix="fab"
                    id="ember3432"
                    className="svg-inline--fa fa-facebook-square fa-w-14 fa-lg ember-view"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="social-2-btn"
                  href={
                    "https://twitter.com/intent/tweet?status=2021+CIGI+Annual+Report+" +
                    location
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    opacity: socialIcons ? 0 : 1,
                    visibility: socialIcons ? "hidden" : "visible",
                    left: socialIcons ? 0 : 40,
                  }}
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    data-icon="twitter"
                    data-prefix="fab"
                    id="ember3433"
                    className="svg-inline--fa fa-twitter fa-w-16 fa-lg ember-view"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="social-3-btn"
                  href={
                    "https://www.linkedin.com/shareArticle?mini=true&amp;url=" +
                    location
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    opacity: socialIcons ? 0 : 1,
                    visibility: socialIcons ? "hidden" : "visible",
                    left: socialIcons ? 0 : 80,
                  }}
                >
                  <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    data-icon="linkedin-in"
                    data-prefix="fab"
                    id="ember3434"
                    className="svg-inline--fa fa-linkedin-in fa-w-14 fa-lg ember-view"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
                {socialIcons ? (
                  <button
                    className="open-social-menu-btn"
                    type="button"
                    data-ember-action=""
                    data-ember-action-3435="3435"
                    onClick={changeSocialStyle}
                    style={{ opacity: socialIcons ? 1 : 0 }}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      focusable="false"
                      aria-hidden="true"
                      data-icon="share-alt"
                      data-prefix="fal"
                      id="ember3436"
                      className="svg-inline--fa fa-share-alt fa-w-14 fa-lg ember-view"
                    >
                      <path
                        fill="currentColor"
                        d="M352 320c-28.6 0-54.2 12.5-71.8 32.3l-95.5-59.7c9.6-23.4 9.7-49.8 0-73.2l95.5-59.7c17.6 19.8 43.2 32.3 71.8 32.3 53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 13 2.6 25.3 7.2 36.6l-95.5 59.7C150.2 172.5 124.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c28.6 0 54.2-12.5 71.8-32.3l95.5 59.7c-4.7 11.3-7.2 23.6-7.2 36.6 0 53 43 96 96 96s96-43 96-96c-.1-53-43.1-96-96.1-96zm0-288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  <button
                    class="close-social-menu-btn"
                    type="button"
                    data-ember-action=""
                    data-ember-action-1001="1001"
                    onClick={changeSocialStyle}
                    style={{ opacity: socialIcons ? 0 : 1 }}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      focusable="false"
                      aria-hidden="true"
                      data-icon="arrow-right"
                      data-prefix="fal"
                      id="ember1002"
                      class="svg-inline--fa fa-arrow-right fa-w-14 fa-lg ember-view"
                    >
                      <path
                        fill="currentColor"
                        d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlide;
