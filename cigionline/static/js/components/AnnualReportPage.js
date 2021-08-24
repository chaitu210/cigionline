import React, { useState } from 'react';
import { debounce } from 'lodash';
import {
  isMobile
} from "react-device-detect";
import MobileDetect from 'mobile-detect'
import AnnualReportMenu from './AnnualReportMenu';
import {
  lightBackgroundSlugs,
} from './AnnualReportConstants';
import {
  getLanguage,
  getSiteUrl,
  getCurrentSlug,
} from './AnnualReportUtils';
import HomeSlide from './HomeSlide';
import Quote from './Quote';
import Footer from './Footer';

import Slide from './Slide';

const AnnualReportPage = ({
  annualReport,
}) => {
  const [touchStart, setTouchStart] = useState(NaN);
  const [touchEnd, setTouchEnd] = useState(NaN);
  const [isOpen, setIsOpen] = useState(false);
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);
  const [slideindex, setSlideIndex] = useState(NaN);
  const [language, setLanguage] = useState(getLanguage());

  const siteUrl = getSiteUrl();
  const currentSlug = getCurrentSlug();

  let translationKey = '';
  let otherLangSlug = '';

  const slides = annualReport.value[language].slides;
  const year = annualReport.value[language].year;

  const otherLangSlides = language === 'en'
    ? annualReport.value.fr.slides
    : annualReport.value.en.slides;

  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile() || md.tablet();

  if (isNaN(slideindex)) {
    // eslint-disable-next-line array-callback-return, consistent-return
    slides.some(function(slide, index) {
      if (currentSlug === '') {
        setSlideIndex(-1);
        return false;
      } if (slide.value.slug.indexOf(currentSlug) > -1) {
        setSlideIndex(index);
        return false;
      }
    });
  }

  if (slideindex > -1) {
    translationKey = slides[slideindex].translation_key;
  }

  otherLangSlides.forEach(function(slide) {
    if (slide.translation_key === translationKey) {
      otherLangSlug = slide.value.slug;
    }
  });

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

  const setLanguageCode = (e) => {
    e.preventDefault();
    if (language === 'en') {
      setLanguage('fr');
      window.history.pushState({}, '', `${siteUrl}/fr/${otherLangSlug}/`);
    } else {
      setLanguage('en');
      window.history.pushState({}, '', `${siteUrl}/en/${otherLangSlug}/`);
    }
  };

  const goToNextSlide = () => {
    const nextSlug = slides[slideindex + 1].value.slug;
    setSlideIndex(slideindex + 1);
    window.history.pushState({}, '', `${siteUrl}/${language}/${nextSlug}/`);
  };

  const goToPrevSlide = () => {
    if (slideindex === 0) {
      setSlideIndex(slideindex - 1);
      window.history.pushState({}, '', `${siteUrl}/${language}/`);
    } else {
      const prevSlug = slides[slideindex - 1].value.slug;
      setSlideIndex(slideindex - 1);
      window.history.pushState({}, '', `${siteUrl}/${language}/${prevSlug}/`);
    }
  };

  function handleWheel(e) {
    if (e.deltaY > 0 && slideindex < slides.length - 1) {
      goToNextSlide();
    }
    if (e.deltaY < 0 && slideindex >= 0) {
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
  console.log(isOpen, 'isOpen', isMobile);

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
      { isMobile ? 
      <div class="background-row show-for-small-only">
        <div class="background-image" style={slideindex >=0 && lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1 ? {backgroundColor: '#fff'} : {}}></div>
      </div> : ''
      }
      
      <AnnualReportMenu
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        slides={slides}
        slideindex={slideindex}
        setLanguage={setLanguageCode}
      />
      <>
        <div className="liquid-container" style={isOpen ? { height: '100vh' } : {}}>
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
                isOpen={isOpen}
                contentOpacity={contentOpacity}
              />
            ) : (
              isOpen ? (
                <Slide
                  slide={slides[0]}
                  slides={slides}
                  isOpen={isOpen}
                  contentOpacity={contentOpacity}
                />
              ) : <HomeSlide year={year} />
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
              {window.annualReport.value[language].title}
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
