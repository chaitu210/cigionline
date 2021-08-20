import React, { useState } from 'react';

import HomeSlide from './HomeSlide';
import TableOfContents from './TableOfContents';
import MessageSlide from './MessageSlide';
import ContentSlide from './ContentSlide';
import OutputsAndActivities from './OutputsAndActivities';
import Financials from './Financials';
import Timeline from './Timeline';
import Quote from './Quote';
import Footer from './Footer';

const Slide = ({ slide, slides, goToNextSlide, goToPrevSlide }) => {
  const [touchStart, setTouchStart] = useState(NaN);
  const [touchEnd, setTouchEnd] = useState(NaN);
  const [contentOpacity, updatecontentOpacity] = useState(true);
  const [socialIcons, updatesocialIcons] = useState(true);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    const touchDiff = touchStart - touchEnd;
    if (touchDiff > 150 && slide.next_slide) {
      goToNextSlide();
    }

    if (touchDiff < -150 && slide.prev_slide) {
      goToPrevSlide();
    }
    setTouchStart(NaN);
    setTouchEnd(NaN);
  }

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

  const getComponent = () => {
    if (slide.type === '') {
      return <HomeSlide />;
    } else if (slide.type === 'summaryslidepage') {
      return (
        <TableOfContents
          slide={slide}
          slides={slides}
          contentOpacity={contentOpacity}
        />
      );
    } else if (slide.type === 'messageslidepage') {
      return <MessageSlide slide={slide} contentOpacity={contentOpacity} />;
    } else if (slide.type === 'contentslidepage') {
      return <ContentSlide slide={slide} contentOpacity={contentOpacity} />;
    } else if (slide.type === 'outputsandactivitiesslidepage') {
      return (
        <OutputsAndActivities slide={slide} contentOpacity={contentOpacity} />
      );
    } else if (slide.type === 'timelineslidepage') {
      return <Timeline slide={slide} contentOpacity={contentOpacity} />;
    } else if (slide.type === 'tabbedslidepage') {
      return <Financials slide={slide} contentOpacity={contentOpacity} />;
    }
    return <HomeSlide />;
  };

  return (
    <div
      className="liquid-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="liquid-child" style={{ top: 0, left: 0, opacity: 1 }}>
        <Quote slide={slide} contentOpacity={contentOpacity} />

        {getComponent()}
        <Footer
          slide={slide}
          socialIcons={socialIcons}
          contentOpacity={contentOpacity}
          changeStyle={changeStyle}
          changeSocialStyle={changeSocialStyle}
        />
      </div>
    </div>
  );
};

export default Slide;
