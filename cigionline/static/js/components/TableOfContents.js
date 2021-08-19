import React, { useState } from "react";
import queryString from 'query-string';
import Footer from "./Footer";


const TableOfContents = ({ rootUrl, slide, slides }) => {
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);
  const originUrl = window.location.origin;
  const currentPath = window.location.pathname;
  const location = window.location.href;
  const params = queryString.parse(window.location.search);
  const isAcknowledgements = (params.acknowledgements == 'true' || params.remerciements == 'true') ? true : false;
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

  function loadAcknowledgements() {
    return slide.value.acknowledgement.groups
      .map(function (group, index) {
        return (
          <>
            <div class="grid-x credits-content">
              <div class="cell full">
                <h4 class="credits-title">{ group.value.title }</h4>
              </div>
            </div>
            <div class="grid-x credits-content">
            {group.value.people.map(function (person, index) {
                return (
                  <div class="cell medium-3 small-4 credits-block">
                    <h5>{ person.value.title }</h5>
                    <h6>{ person.value.position }</h6>
                    <div></div>
                  </div>
                );
              })}
            </div>
            <div class="grid-x credits-content credits-border">
              {group.value.people.map(function (person, index) {
                return (
                  <div class="cell small-4 credits-block show-for-small-only">
                    <h5>{ person.value.title }</h5>
                    <h6>{ person.value.position }</h6>
                    <div></div>
                  </div>
                );
              })}
            </div>

          </>);
      });
  }

  function firstHalfSlides() {
    var slidesExceptTOC = slides.filter(function (iterslide) {
      return iterslide.value.slug != slide.value.slug;
    });
    var first_half =
      (slidesExceptTOC.length - 1) % 2 == 0
        ? slidesExceptTOC.length / 2
        : slidesExceptTOC.length / 2 + 1;
    return slidesExceptTOC.map(function (slide, index) {
      let hrefUrl = rootUrl + "/" + slide.value.slug + "/";
      return index < first_half ? (
        <div className="grid-x slide-link">
          <div className="cell small-1 medium-1">
            <p className="slide-number ">{index + 1}</p>
          </div>
          <div className="cell small-11 medium-11">
            <a href={hrefUrl}>
              {slide.value.title}
            </a>
          </div>
        </div>
      ) : (
        ""
      );
    });
  }

  function secondHalfSlides() {
    var slidesExceptTOC = slides.filter(function (iterslide) {
      return iterslide.value.slug != slide.value.slug;
    });
    var first_half =
      (slidesExceptTOC.length - 1) % 2 == 0
        ? slidesExceptTOC.length / 2
        : slidesExceptTOC.length / 2 + 1;
    console.log(first_half);
    return slidesExceptTOC.map(function (slide, index) {
      let hrefUrl = rootUrl + "/" + slide.value.slug + "/";
      return index > first_half ? (
        <div className="grid-x slide-link">
          <div className="cell small-1 medium-1">
            <p className="slide-number ">{index + 1}</p>
          </div>
          <div className="cell small-11 medium-11">
            <a href={hrefUrl}>
              {slide.value.title}
            </a>
          </div>
        </div>
      ) : (
        ""
      );
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

  console.log(firstHalfSlides());

  return (
    <div class="liquid-container" style={{}}>
      <div
        class="liquid-child"
        style={{ top: 0, left: 0, opacity: 1 }}
      >
        <div>
          <div
            className="background-row background-table-of-contents"
            style={{}}
          >
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
          </div>
          <div
            className="table-of-contents"
            style={{ opacity: contentOpacity ? 1 : 0 }}
          >
            <div className="grid-container">
              <div
                className="grid-x grid-margin-x hover-reveal-hide"
                style={{ opacity: 1 }}
              >
                <div className="cell">
                  <h1>2021 Annual Report</h1>
                </div>
              </div>
              <div
                className="grid-x grid-margin-x hover-reveal-hide"
                style={{ opacity: 1 }}
              >
                <div className="cell">
                  <div className="toc-content">
                    { isAcknowledgements ?
                    <div class="toc-menu">
                      <a class="hide-acknowledgements-btn" type="button" href={originUrl+currentPath}>{ slide.value.title }</a>
                      <span>/</span>
                        { language == 'en' ? 'Acknowledgements' : 'Remerciements' }
                    </div>
                    : 
                    <div className="toc-menu">
                      { slide.value.title }
                      <span>/</span>
                      { language == 'en' ?
                      <a
                        className="show-acknowledgements-btn"
                        type="button"
                        href="?acknowledgements=true"
                      >
                        Acknowledgements
                      </a> : 
                      <a
                        className="show-acknowledgements-btn"
                        type="button"
                        href="?remerciements=true"
                      >
                        Remerciements
                      </a>
                      }
                    </div>
                    }
                    { isAcknowledgements ? 
                      <>
                        <div class="grid-x credits-content credits-border">
                          <div class="cell full">
                            <p class="credits-message" dangerouslySetInnerHTML={{
                        __html: slide.value.acknowledgement.message[0].value}}>
                            </p>
                          </div>
                        </div>
                        {loadAcknowledgements()}
                      </> :
                    <div className="grid-x slide-content">
                      <div className="cell medium-5">{firstHalfSlides()}</div>
                      <div className="cell medium-2"></div>
                      <div className="cell medium-5">{secondHalfSlides()}</div>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Footer slide={slide} socialIcons={socialIcons} contentOpacity={contentOpacity} changeStyle={changeStyle} changeSocialStyle={changeSocialStyle} />
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
