import React from 'react';
import { lightBackgroundSlugs } from './AnnualReportConstants';

const Quote = ({ slide, contentOpacity }) => {
  const originUrl = window.location.origin;

  return (
    <div
      className={
        'background-row show-for-medium' +
        (lightBackgroundSlugs.indexOf(slide.type) > -1
          ? ' background-white'
          : '')
      }
      style={{}}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: slide.value.background_image
            ? `url(${originUrl}${slide.value.background_image.original})`
            : '',
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
                __html: slide.value.quote ? slide.value.quote.message : '',
              }}
            />
            <h4
              className="hover-reveal-quote-source"
              style={{ opacity: contentOpacity ? 0 : 1 }}
              dangerouslySetInnerHTML={{
                __html: slide.value.quote ? slide.value.quote.subtitle : '',
              }}
            />
            <div
              className="hover-reveal-quote-line"
              style={{ width: contentOpacity ? 0 : 100 }}
            />
          </div>
        </div>
      </div>
      <div>
        {slide.value.background_video ? (
          <video
            playsinline=""
            autoPlay=""
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
          ''
        )}
      </div>
      {lightBackgroundSlugs.indexOf(slide.type) > -1 ? (
        ''
      ) : (
        <>
          <div className="background-overlay hover-reveal-hide" />
          <div className="background-gradient-overlay hover-reveal-hide" />
        </>
      )}
    </div>
  );
};

export default Quote;
