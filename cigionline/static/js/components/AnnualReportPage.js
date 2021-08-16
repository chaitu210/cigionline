
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, withRouter, useLocation , Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import AnnualReportMenu from './AnnualReportMenu';
import TableOfContents from "./TableOfContents";
import HomeSlide from "./HomeSlide";

// Import Swiper styles

import Slide from "./Slide";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const AnnualReportPage = ({ slides, slideindex, otherLangSlug, year }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';

  const location = window.location.href;
  const splitUrl = location.split('/'); 
  const rootUrl = splitUrl.length == 10 ? splitUrl.slice(0, splitUrl.length-2).join('/') : splitUrl.slice(0, splitUrl.length-1).join('/');
  const siteUrl = splitUrl.length == 10 ? splitUrl.slice(0, splitUrl.length-3).join('/') : splitUrl.slice(0, splitUrl.length-2).join('/');


    const setActiveTab = (e) => {
        e.preventDefault();
        console.log(e.target);
        this.context.router.push(e.target.href);

    }

  const goToNextSlide = (e) => {
    const nextSlug = slides[slideindex + 1]['value']['slug']
    window.location.href = `${siteUrl}/${language}/${nextSlug}`;
  }

  const goToPrevSlide = (e) => {
    if(slideindex == 0){
      window.location.href = `${siteUrl}/${language}/`;  
    }
    const prevSlug = slides[slideindex - 1]['value']['slug']
    window.location.href = `${siteUrl}/${language}/${prevSlug}`;
  }  

  return (

    <>  
        <AnnualReportMenu toggleMenu={toggleMenu} isOpen={isOpen} otherLangSlug={otherLangSlug} language={language} slides={slides} />
        { isOpen ? <TableOfContents rootUrl={rootUrl} slide={slides[0]} slides={slides} /> :
        <>{ slideindex >= 0 ? 
        <Swiper  rebuildOnUpdate={true} initialSlide={slideindex} direction={'vertical'} spaceBetween={30} centeredSlides={true} pagination={{
              clickable: true,
              type: "custom",
              paginationElement: 'div',
                renderCustom: function(swiper, current, total) {
                    let nonFriends = slides.filter( function (user) {
                          return user.index == current
                    });
                  var text = `<ul class="dot-nav show-for-large">`;
                  for (let i = 1; i <= total-1; i++) {
                    if (current == i) {
                      text += `<li class="link-item"><div class="dot-nav-tooltip"><span>${slides[i].value.title}</span></div><div class="current-page"><div class="dot-circle"></div></div></li>`;
                    } else {
                      text += `<li class="link-item">
                                    <div class="dot-nav-tooltip">
                                        <span>${slides[i].value.title}</span>
                                    </div>
                                    <a href="${rootUrl}/${slides[i].value.slug}" onClick={setActiveTab} class="ember-view link-dot">
                                        <div class="dot-circle"></div>
                                    </a>
                                </li>`;
                    }
                  }
                  text += "</ul>";
                  return text;
                }

            }} navigation={false} className="mySwiper">
              {slides.map(function(slide, index){return <SwiperSlide><Slide rootUrl={rootUrl} slide={slide} slides={slides}/></SwiperSlide>})}

        </Swiper> : <HomeSlide year={year} language={language} />
    }
    { slideindex >= 0 ? <button class="scroll-arrow scroll-arrow-up-btn" type="button" onClick={goToPrevSlide}></button> : ''}

      <button class="scroll-arrow scroll-arrow-down-btn  scroll-arrow-after-content"  onClick={goToNextSlide} type="button"></button>    
      <p class="vertical-title ">2020 Annual Report</p>
     </> 
    }
    </>

  )
}
export default AnnualReportPage;