import React, { useState } from 'react';

import HomeSlide from "./HomeSlide";
import TableOfContents from "./TableOfContents";
import MessageSlide from "./MessageSlide";
import ContentSlide from "./ContentSlide";
import OutputsAndActivities from "./OutputsAndActivities";
import Financials from "./Financials";
import Timeline from "./Timeline";


const Slide = ({ rootUrl, slide, slides, goToNextSlide, goToPrevSlide }) => {
	const [touchStart, setTouchStart] = useState(NaN);
  const [touchEnd, setTouchEnd] = useState(NaN);

  function handleTouchStart(e) {
  	console.log('touch start');
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

	const path = slide.type;
	const getComponent = () => {
		if (slide.type == ''){
			return <HomeSlide />
		}else if(slide.type == 'summaryslidepage'){
			return <TableOfContents rootUrl={rootUrl} slide={slide} slides={slides} />
		}else if(slide.type == 'messageslidepage'){
			return <MessageSlide slide={slide} />
		}else if(slide.type == 'contentslidepage'){
			return <ContentSlide slide={slide} />
		}else if(slide.type == 'outputsandactivitiesslidepage'){
			return <OutputsAndActivities slide={slide} />
		}else if(slide.type == 'timelineslidepage'){
			return <Timeline  slide={slide} />
		}else if(slide.type == 'tabbedslidepage'){
			return <Financials slide={slide} />
		}
		


	}

    return (
      	<>
	        <div onTouchStart={handleTouchStart}
      			 onTouchMove={handleTouchMove}
      			 onTouchEnd={handleTouchEnd}>
      			{getComponent()}
      		</div>
  		</>
    );
}

export default Slide;