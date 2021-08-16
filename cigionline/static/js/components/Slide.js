import React, { Component } from 'react';

import HomeSlide from "./HomeSlide";
import TableOfContents from "./TableOfContents";
import MessageSlide from "./MessageSlide";
import ContentSlide from "./ContentSlide";
import OutputsAndActivities from "./OutputsAndActivities";
import Financials from "./Financials";
import Timeline from "./Timeline";


const Hello = ({ rootUrl, slide, slides }) => {
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
			return <OutputsAndActivities />
		}else if(slide.type == 'timelineslidepage'){
			return <Timeline />
		}else if(slide.type == 'tabbedslidepage'){
			return <Financials />
		}
		


	}

    return (
      	<>
	        <div>{getComponent()}</div>
  		</>
    );
}

export default Hello;