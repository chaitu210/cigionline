import React, { useRef, useState, useEffect } from "react";
import { debounce } from "lodash";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  useLocation,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import AnnualReportMenu from "./AnnualReportMenu";
import TableOfContents from "./TableOfContents";
import {
  language,
  siteUrl,
  currentSlug,
  lightBackgroundSlugs,
} from "./AnnualReportConstants";
import HomeSlide from "./HomeSlide";

// Import Swiper styles

import Slide from "./Slide";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, Keyboard]);

const AnnualReportPage = ({ slides, slideindex, otherLangSlug, year }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const setActiveTab = (e) => {
    e.preventDefault();
    this.context.router.push(e.target.href);
  };

  const goToNextSlide = (e) => {
    const nextSlug = slides[slideindex + 1]["value"]["slug"];
    window.location.href = `${siteUrl}/${language}/${nextSlug}`;
  };

  const goToPrevSlide = (e) => {
    if (slideindex == 0) {
      window.location.href = `${siteUrl}/${language}/`;
    }
    const prevSlug = slides[slideindex - 1]["value"]["slug"];
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
    if (e.key == "ArrowDown" && slideindex < slides.length - 1) {
      goToNextSlide();
    } else if (e.key == "ArrowUp" && slideindex > 0) {
      goToPrevSlide();
    }
  }

  function handleScroll(e) {
    const pathArray = location.pathname.split("/").filter((slug) => slug);
    const currentSlug = pathArray[pathArray.length - 1];
    const currentSlide = slides.filter(
      (slide) => slide.slug === currentSlug
    )[0];
    console.log(e);
  }

  return (
    <div
      onWheel={debounce(handleWheel, 100)}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <AnnualReportMenu
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        otherLangSlug={otherLangSlug}
        slides={slides}
        slideindex={slideindex}
      />
      {isOpen ? (
        <TableOfContents slide={slides[0]} slides={slides} />
      ) : (
        <>
          {slideindex >= 0 ? (
            <Swiper
              rebuildOnUpdate={true}
              initialSlide={slideindex}
              direction={"vertical"}
              spaceBetween={30}
              centeredSlides={true}
              keyboard={{ enabled: true }}
              onKeyPress={function (swiper, keyCode) {
                if (keyCode == 40 && slideindex < slides.length - 1) {
                  goToNextSlide();
                } else if (keyCode == 38 && slideindex > 0) {
                  goToPrevSlide();
                }
              }}
              pagination={{
                clickable: true,
                type: "custom",
                paginationElement: "div",
                renderCustom: function (swiper, current, total) {
                  var text = `<ul class="dot-nav show-for-large${
                    lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                      ? " light-background"
                      : ""
                  }">`;
                  if (slideindex >= 0) {
                    text += `<li class="link-item">
                                    <div class="dot-nav-tooltip">
                                        <span>Home</span>
                                    </div>
                                    <a href="${siteUrl}/${language}" onClick={setActiveTab} class="link-dot">
                                        <div class="dot-circle"></div>
                                    </a>
                                </li>`;
                  }

                  for (let i = 0; i <= total - 1; i++) {
                    if (slideindex >= 0) {
                      if (current - 1 == i) {
                        text += `<li class="link-item"><div class="dot-nav-tooltip"><span>${slides[i].value.title}</span></div><div class="current-page"><div class="dot-circle"></div></div></li>`;
                      } else {
                        text += `<li class="link-item">
                                      <div class="dot-nav-tooltip">
                                          <span>${slides[i].value.title}</span>
                                      </div>
                                      <a href="${siteUrl}/${language}/${slides[i].value.slug}" onClick={setActiveTab} class="link-dot">
                                          <div class="dot-circle"></div>
                                      </a>
                                  </li>`;
                      }
                    }
                  }
                  text += "</ul>";
                  return text;
                },
              }}
              navigation={false}
              className="mySwiper"
            >
              {slides.map(function (slide, index) {
                return (
                  <SwiperSlide>
                    <Slide
                      slide={slide}
                      slides={slides}
                      goToNextSlide={goToNextSlide}
                      goToPrevSlide={goToPrevSlide}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <HomeSlide year={year} />
          )}
          {slideindex >= 0 ? (
            <button
              className={
                "scroll-arrow scroll-arrow-up-btn" +
                (slideindex >= 0 &&
                lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                  ? " light-background"
                  : "")
              }
              type="button"
              onClick={goToPrevSlide}
            ></button>
          ) : (
            ""
          )}
          {slideindex != slides.length - 1 ? (
            <button
              className={
                "scroll-arrow scroll-arrow-down-btn scroll-arrow-after-content" +
                (slideindex >= 0 &&
                lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                  ? " light-background"
                  : "")
              }
              onClick={goToNextSlide}
              type="button"
            ></button>
          ) : (
            ""
          )}
          <p
            className={
              "vertical-title" +
              (slideindex >= 0 &&
              lightBackgroundSlugs.indexOf(slides[slideindex].type) > -1
                ? " light-background"
                : "")
            }
          >
            2020 Annual Report
          </p>
        </>
      )}
    </div>
  );
};
export default AnnualReportPage;
