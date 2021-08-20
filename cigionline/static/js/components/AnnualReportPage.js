import React, { useState } from 'react';
import { debounce } from 'lodash';
import AnnualReportMenu from './AnnualReportMenu';
import {
  language,
  siteUrl,
  lightBackgroundSlugs,
} from './AnnualReportConstants';
import HomeSlide from './HomeSlide';
import Quote from './Quote';
import Footer from './Footer';

import Slide from './Slide';

const AnnualReportPage = ({
  slides, slideindex, otherLangSlug, year,
}) => {
  const [touchStart, setTouchStart] = useState(NaN);
  const [touchEnd, setTouchEnd] = useState(NaN);
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);

  const changeStyle = () => {
    if (contentOpacity) {
      updatecontentOpacity(false);
    } else {
      updatecontentOpacity(true);
    }
  };

  const changeSocialStyle = () => {
    if (socialIcons) {
      updatesocialIcons(false);
    } else {
      updatesocialIcons(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToNextSlide = () => {
    const nextSlug = slides[slideindex + 1].value.slug;
    window.location.href = `${siteUrl}/${language}/${nextSlug}`;
  };

  const goToPrevSlide = () => {
    if (slideindex === 0) {
      window.location.href = `${siteUrl}/${language}/`;
    }
    const prevSlug = slides[slideindex - 1].value.slug;
    window.location.href = `${siteUrl}/${language}/${prevSlug}`;
  };

  function handleWheel(e) {
    if (e.deltaY > 0 && slideindex < slides.length - 1) {
      goToNextSlide();
    }
    if (e.deltaY < 0 && slideindex > 0) {
      goToPrevSlide();
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'ArrowDown' && slideindex < slides.length - 1) {
      goToNextSlide();
    } else if (e.key === 'ArrowUp' && slideindex > 0) {
      goToPrevSlide();
    }
  }

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    const touchDiff = touchStart - touchEnd;
    if (touchDiff > 150 && slides[slideindex].next_slide) {
      goToNextSlide();
    }

    if (touchDiff < -150 && slides[slideindex].prev_slide) {
      goToPrevSlide();
    }
    setTouchStart(NaN);
    setTouchEnd(NaN);
  }

  return (
    <div
      onWheel={debounce(handleWheel, 100)}
      onKeyDown={handleKeyPress}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex="0"
      role="button"
    >
      <AnnualReportMenu
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        otherLangSlug={otherLangSlug}
        slides={slides}
        slideindex={slideindex}
      />
      <>
        <div className="liquid-container">
          <div className="liquid-child" style={{ top: 0, left: 0, opacity: 1 }}>
            {slideindex >= 0 && (
              <Quote
                slide={isOpen ? slides[0] : slides[slideindex]}
                contentOpacity={contentOpacity}
              />
            )}

            {slideindex >= 0 ? (
              <Slide
                slide={isOpen ? slides[0] : slides[slideindex]}
                slides={slides}
                contentOpacity={contentOpacity}
              />
            ) : (
              <HomeSlide year={year} />
            )}
            {slideindex >= 0 && (
              <Footer
                slide={isOpen ? slides[0] : slides[slideindex]}
                socialIcons={socialIcons}
                contentOpacity={contentOpacity}
                changeStyle={changeStyle}
                changeSocialStyle={changeSocialStyle}
              />
            )}
          </div>
        </div>
        {!isOpen ? (
          <>
            {slideindex >= 0 ? (
              <ul
                className={`dot-nav show-for-large 
              ${
              lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                ? ' light-background'
                : ''
              }
            `}
              >
                {slideindex >= 0 ? (
                  <li className="link-item">
                    <div className="dot-nav-tooltip">
                      <span>Home</span>
                    </div>
                    <a href={`${siteUrl}/${language}`} className="link-dot">
                      <div className="dot-circle" />
                    </a>
                  </li>
                ) : (
                  ''
                )}
                {slides.map(function(slide, index) {
                  return slideindex === index ? (
                    <li className="link-item">
                      <div className="dot-nav-tooltip">
                        <span>{slide.value.title}</span>
                      </div>
                      <div className="current-page">
                        <div className="dot-circle" />
                      </div>
                    </li>
                  ) : (
                    <li className="link-item">
                      <div className="dot-nav-tooltip">
                        <span>{slide.value.title}</span>
                      </div>
                      <a
                        href={`${siteUrl}/${language}/${slide.value.slug}`}
                        className="link-dot"
                      >
                        <div className="dot-circle" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ''
            )}

            {slideindex >= 0 ? (
              // eslint-disable-next-line react/button-has-type
              <button
                className={`scroll-arrow scroll-arrow-up-btn${
                  slideindex >= 0
                  && lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                    ? ' light-background'
                    : ''
                }`}
                aria-label="Prev"
                onClick={goToPrevSlide}
              />
            ) : (
              ''
            )}
            {slideindex !== slides.length - 1 ? (
              // eslint-disable-next-line react/button-has-type
              <button
                className={`scroll-arrow scroll-arrow-down-btn scroll-arrow-after-content${
                  slideindex >= 0
                  && lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                    ? ' light-background'
                    : ''
                }`}
                aria-label="Next"
                onClick={goToNextSlide}
              />
            ) : (
              ''
            )}
            <p
              className={`vertical-title${
                slideindex >= 0
                && lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                  ? ' light-background'
                  : ''
              }`}
            >
              2020 Annual Report
            </p>
          </>
        ) : (
          ''
        )}
      </>
    </div>
  );
};
export default AnnualReportPage;
