import React, { useState } from "react";
import Footer from "./Footer";

const MessageSlide = ({ slide }) => {
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);
  const originUrl = window.location.origin;
  const location = window.location.href;

  function firstHalfBody() {
    const half = Math.ceil(slide.value.body.length / 2);
    const firstHalf = slide.value.body.slice(0, half);
    return firstHalf
      .map(function (paragraph, index) {
        return paragraph.value;
      })
      .join("");
  }

  function secondHalfBody() {
    const half = Math.ceil(slide.value.body.length / 2);
    const secondHalf = slide.value.body.slice(-half);
    return secondHalf
      .map(function (paragraph, index) {
        return paragraph.value;
      })
      .join("");
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

  return (
    <div className="liquid-container" style={{}}>
      <div
        className="liquid-child"
        style={{ top: 0, left: 0, opacity: 1 }}
      >
        <div>
          <div
            className="liquid-child"
            style={{ top: 0, left: 0, opacity: 1 }}
          >
            <div
              className="background-row chairs-message-background show-for-medium"
              style={{}}
            ></div>
            <div
              className="hover-reveal hover-reveal-gradient-right chairs-message-background-img show-for-medium"
              style={{
                backgroundImage: slide.value.background_image
                  ? `url(${originUrl}${slide.value.background_image.original})`
                  : "",
              }}
            >
              <div
                className="quote quote-right"
                style={{ opacity: contentOpacity ? 0 : 1 }}
              >
                <h3
                  className="hover-reveal-quote"
                  style={{ opacity: contentOpacity ? 0 : 1 }}
                  dangerouslySetInnerHTML={{
                    __html: slide.value.quote ? slide.value.quote.message : "",
                  }}
                ></h3>
                <h4
                  className="hover-reveal-quote-source"
                  style={{ opacity: contentOpacity ? 0 : 1 }}
                  dangerouslySetInnerHTML={{
                    __html: slide.value.quote ? slide.value.quote.subtitle : "",
                  }}
                ></h4>
                <div
                  className="hover-reveal-quote-line"
                  style={{ opacity: contentOpacity ? 0 : 1 }}
                ></div>
              </div>
            </div>
            <div
              className="chairs-message"
              style={{ opacity: contentOpacity ? 1 : 0 }}
            >
              <div className="grid-container">
                <div className="grid-x grid-margin-x hover-reveal-hide">
                  <div className="cell">
                    <h1>{slide.value.title}</h1>
                  </div>
                </div>
                <div className="grid-x grid-margin-x">
                  <div
                    className="cell medium-6 hover-reveal-hide"
                    dangerouslySetInnerHTML={{ __html: firstHalfBody() }}
                  ></div>
                  <div
                    className="cell medium-6 hover-reveal-hide"
                    dangerouslySetInnerHTML={{ __html: secondHalfBody() }}
                  ></div>
                  <div className="cell medium-6 hover-reveal-hide"></div>
                  <div className="cell medium-6 hover-reveal-hide">
                    <div className="cigi-red-line"></div>
                    <p className="chair-name">
                      <b>{slide.value.author.title}</b>
                      <br />
                      <em>{slide.value.author.position}</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Footer slide={slide} socialIcons={socialIcons} contentOpacity={contentOpacity} changeStyle={changeStyle} changeSocialStyle={changeSocialStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSlide;
