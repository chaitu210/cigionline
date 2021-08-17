import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import MenuPortal from "./MenuPortal";

const AnnualReportMenu = ({
  toggleMenu,
  isOpen,
  otherLangSlug,
  language,
  slides,
  slideindex,
}) => {
  const history = useHistory();

  const setLanguage = (e) => {
    const location = window.location.href;
    const splitUrl = location.split("/");
    const siteUrl =
      splitUrl.length == 10
        ? splitUrl.slice(0, splitUrl.length - 3).join("/")
        : splitUrl.slice(0, splitUrl.length - 2).join("/");
    if (language == "en") {
      localStorage.setItem("language", "fr");
      window.location.href = `${siteUrl}/fr/${otherLangSlug}`;
    } else {
      localStorage.setItem("language", "en");
      window.location.href = `${siteUrl}/en/${otherLangSlug}`;
    }
  };

  return (
    <MenuPortal>
      <div className={"cigi-top-bar" + (slideindex >= 0 && slides[slideindex].type == 'messageslidepage' ? ' light-background' : '')} style={{ opacity: 1 }}>
        <div className="cigi-logo">
          <a href="https://www.cigionline.org">
            <svg
              className="show-for-large"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129.4 37.8"
            >
              <path d="M7.6,14v1.6a4,4,0,0,0-2.5-1,3.1,3.1,0,0,0-2.4,1,3.63,3.63,0,0,0,0,5,3.1,3.1,0,0,0,2.4,1,4.3,4.3,0,0,0,1.2-.2A4.35,4.35,0,0,0,7,21a4.23,4.23,0,0,1,.7-.5v1.7a5.53,5.53,0,0,1-2.5.7,4.76,4.76,0,0,1-3.4-1.4A4.72,4.72,0,0,1,1.6,15a4.8,4.8,0,0,1,3.7-1.7A4.76,4.76,0,0,1,7.6,14Zm6.8,6.1H10.2a1.61,1.61,0,0,0,.5,1.1,1.5,1.5,0,0,0,1.1.4,1.88,1.88,0,0,0,.8-.2,3.11,3.11,0,0,0,.7-.9l1.1.6a4.17,4.17,0,0,1-.6.8,2.65,2.65,0,0,1-.6.5c-.2.1-.5.2-.7.3a2.49,2.49,0,0,1-.8.1A3.23,3.23,0,0,1,9.6,22a3.49,3.49,0,0,1-.8-2.2,3,3,0,0,1,.8-2.2,2.17,2.17,0,0,1,2-.8,2.79,2.79,0,0,1,2,.8,2.93,2.93,0,0,1,.7,2.2ZM13,19a1.3,1.3,0,0,0-1.3-1,.9.9,0,0,0-.5.1.76.76,0,0,0-.4.2l-.3.3a.76.76,0,0,0-.2.5Zm2.9-2.1h1.4v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H19.6V19.5a2.54,2.54,0,0,0-.2-1.2.92.92,0,0,0-.9-.3,1.28,1.28,0,0,0-1,.4,4,4,0,0,0-.3,1.5v2.8H15.9ZM24,18.2v4.6H22.7V18.2h-.6V17h.6V14.9H24V17h1v1.2Zm2-1.3h1.3v.5a1.79,1.79,0,0,1,.7-.5.88.88,0,0,1,.7-.1,1.5,1.5,0,0,1,1.1.4l-.6,1.2a1.14,1.14,0,0,0-.8-.3c-.7,0-1.1.6-1.1,1.7v3H26Zm9.8,3.2H31.6a1.61,1.61,0,0,0,.5,1.1,1.5,1.5,0,0,0,1.1.4,1.88,1.88,0,0,0,.8-.2,3.11,3.11,0,0,0,.7-.9l1.1.6a4.17,4.17,0,0,1-.6.8,2.65,2.65,0,0,1-.6.5c-.2.1-.5.2-.7.3a2.49,2.49,0,0,1-.8.1,2.88,2.88,0,0,1-2.1-.9,3.43,3.43,0,0,1,0-4.4,3,3,0,0,1,4.1,0,2.93,2.93,0,0,1,.7,2.2ZM34.4,19A1.25,1.25,0,0,0,33,18a.9.9,0,0,0-.5.1.76.76,0,0,0-.4.2l-.3.3a.76.76,0,0,0-.2.5Zm8-.8v4.6H41V18.2h-.5V17H41V14.8a2.4,2.4,0,0,1,.4-1.6,1.72,1.72,0,0,1,1.5-.6,2.92,2.92,0,0,1,.9.2v1.4l-.1-.2a1.85,1.85,0,0,0-.7-.2.55.55,0,0,0-.5.3,1.73,1.73,0,0,0-.1,1V17h1.5v1.2Zm2.1,1.6a2.72,2.72,0,0,1,.9-2.1,3.11,3.11,0,1,1,4.4,4.4,3.14,3.14,0,0,1-4.4,0A3.52,3.52,0,0,1,44.5,19.8Zm1.4,0a1.87,1.87,0,0,0,.5,1.4,1.75,1.75,0,0,0,2.5,0,2.25,2.25,0,0,0,0-2.7,1.75,1.75,0,0,0-2.5,0,1.3,1.3,0,0,0-.5,1.3Zm6.2-2.9h1.3v.5a1.79,1.79,0,0,1,.7-.5.88.88,0,0,1,.7-.1,1.5,1.5,0,0,1,1.1.4l-.6,1.2a1.14,1.14,0,0,0-.8-.3c-.7,0-1.1.6-1.1,1.7v3H52.1Zm10-3.4v9.2H60.7V13.5Zm2,3.4h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H67.8V19.5a2.54,2.54,0,0,0-.2-1.2.86.86,0,0,0-.9-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8H64.1Zm8.1,1.3v4.6H70.9V18.2h-.6V17h.6V14.9h1.3V17h1v1.2Zm7.3,1.9H75.3a1.61,1.61,0,0,0,.5,1.1,1.5,1.5,0,0,0,1.1.4,1.88,1.88,0,0,0,.8-.2,3.11,3.11,0,0,0,.7-.9l1.1.6c-.2.3-.4.5-.6.8a2.65,2.65,0,0,1-.6.5c-.2.1-.5.2-.7.3a2.49,2.49,0,0,1-.8.1,3.23,3.23,0,0,1-2.1-.8,3,3,0,0,1-.7-2.3,3,3,0,0,1,.8-2.2,3,3,0,0,1,4.1,0,2.93,2.93,0,0,1,.7,2.2ZM78.2,19a1.33,1.33,0,0,0-1.4-1,.9.9,0,0,0-.5.1.76.76,0,0,0-.4.2l-.3.3a.76.76,0,0,0-.2.5ZM81,16.9h1.3v.5a1.79,1.79,0,0,1,.7-.5.88.88,0,0,1,.7-.1,1.5,1.5,0,0,1,1.1.4l-.6,1.2a1.14,1.14,0,0,0-.8-.3c-.7,0-1.1.6-1.1,1.7v3H81Zm5,0h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H89.7V19.5a2.54,2.54,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8H86Zm10.8,0h1.3v5.8H96.8v-.6a2.53,2.53,0,0,1-3.6,0l-.1-.1a3.42,3.42,0,0,1,0-4.4,2.52,2.52,0,0,1,2-.9,2.34,2.34,0,0,1,1.8.8Zm-3.2,2.9a2.3,2.3,0,0,0,.4,1.4,1.69,1.69,0,0,0,2.4,0,2.25,2.25,0,0,0,0-2.7,1.66,1.66,0,0,0-1.2-.5,1.85,1.85,0,0,0-1.2.5A2,2,0,0,0,93.6,19.8Zm7.7-1.6v4.6H100V18.2h-.6V17h.6V14.9h1.3V17h1v1.2Zm2-3.7a.9.9,0,0,1,.9-.9.71.71,0,0,1,.6.3.86.86,0,0,1,.3.6.71.71,0,0,1-.3.6.86.86,0,0,1-.6.3.71.71,0,0,1-.6-.3A.71.71,0,0,1,103.3,14.5Zm1.5,2.4v5.8h-1.3V16.9Zm1.2,2.9a2.72,2.72,0,0,1,.9-2.1,3.11,3.11,0,1,1,4.4,4.4,3.14,3.14,0,0,1-4.4,0A3.52,3.52,0,0,1,106,19.8Zm1.4,0a1.87,1.87,0,0,0,.5,1.4,1.75,1.75,0,0,0,2.5,0,2.25,2.25,0,0,0,0-2.7,1.75,1.75,0,0,0-2.5,0,1.54,1.54,0,0,0-.5,1.3Zm6.2-2.9h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6h-1.3V19.5a2.54,2.54,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8h-1.3Zm11,0h1.3v5.8h-1.3v-.6a2.53,2.53,0,0,1-3.6,0l-.1-.1a3.42,3.42,0,0,1,0-4.4,2.52,2.52,0,0,1,2-.9,2.34,2.34,0,0,1,1.8.8Zm-3.2,2.9a2.3,2.3,0,0,0,.4,1.4,1.69,1.69,0,0,0,2.4,0,2.25,2.25,0,0,0,0-2.7A1.66,1.66,0,0,0,123,18a1.85,1.85,0,0,0-1.2.5A2,2,0,0,0,121.4,19.8Zm7.6-7.2V22.7h-1.3V12.6ZM5.6,32.6H9.4v.3a11,11,0,0,1-.2,1.8,3.92,3.92,0,0,1-.8,1.4,3.77,3.77,0,0,1-3.3,1.4,4.37,4.37,0,0,1-3.3-1.4,4.77,4.77,0,0,1,0-6.8A4.94,4.94,0,0,1,5.2,28a4.48,4.48,0,0,1,2,.4A6.23,6.23,0,0,1,9,29.8l-1,1a3.45,3.45,0,0,0-6.3,2,3.25,3.25,0,0,0,1.1,2.5,3.1,3.1,0,0,0,2.2.9,2.41,2.41,0,0,0,1.8-.7,2.59,2.59,0,0,0,.9-1.7H5.6Zm5,1.9a3.1,3.1,0,0,1,.9-2.2,3.11,3.11,0,0,1,4.4,4.4,3.1,3.1,0,0,1-5.3-2.2Zm1.3,0a1.87,1.87,0,0,0,.5,1.4,1.9,1.9,0,0,0,1.3.5,2.11,2.11,0,0,0,1.3-.5,2.25,2.25,0,0,0,0-2.7,1.75,1.75,0,0,0-2.5,0,2,2,0,0,0-.6,1.3Zm6.8-2.9,1.5,3.3,1.5-3.3h1.5l-3,6.2-3-6.2Zm10.5,3.2H25a1.85,1.85,0,0,0,.5,1.2,1.5,1.5,0,0,0,1.1.4,1.88,1.88,0,0,0,.8-.2,3.11,3.11,0,0,0,.7-.9l1.1.6a4.17,4.17,0,0,1-.6.8,2.65,2.65,0,0,1-.6.5c-.2.1-.5.2-.7.3a2.49,2.49,0,0,1-.8.1,3.23,3.23,0,0,1-2.1-.8,3.49,3.49,0,0,1-.8-2.2,3,3,0,0,1,.8-2.2,3,3,0,0,1,4.1,0,2.93,2.93,0,0,1,.7,2.2Zm-1.4-1.1a1.32,1.32,0,0,0-1.4-1.1.9.9,0,0,0-.5.1.76.76,0,0,0-.4.2l-.3.3a.76.76,0,0,0-.2.5Zm2.9-2.1H32v.5a1.79,1.79,0,0,1,.7-.5.88.88,0,0,1,.7-.1,1.5,1.5,0,0,1,1.1.4L33.9,33a1.14,1.14,0,0,0-.8-.3c-.7,0-1.1.6-1.1,1.7v3H30.7Zm4.7,0h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H39.1V34.2a5,5,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1.28,1.28,0,0,0-1,.4,4,4,0,0,0-.3,1.5v2.8H35.4Zm11,0h1.3v5.8H46.4v-.6a2.53,2.53,0,0,1-3.6,0l-.1-.1a3.43,3.43,0,0,1,0-4.4,2.52,2.52,0,0,1,2-.9,2.34,2.34,0,0,1,1.8.8Zm-3.2,2.9a1.87,1.87,0,0,0,.5,1.4,1.69,1.69,0,0,0,2.4,0,2.25,2.25,0,0,0,0-2.7,1.66,1.66,0,0,0-1.2-.5,1.85,1.85,0,0,0-1.2.5A1.9,1.9,0,0,0,43.2,34.5Zm6.3-2.9h1.3v.5a2.36,2.36,0,0,1,1.6-.7A2.27,2.27,0,0,1,54,32a2.73,2.73,0,0,1,.5,1.8v3.6H53.1V34.2a5,5,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1.28,1.28,0,0,0-1,.4,4,4,0,0,0-.3,1.5v2.8H49.4V31.6Zm11.2.2v1.8a3,3,0,0,0-.8-.8,2.35,2.35,0,0,0-.8-.2,1.71,1.71,0,0,0-1.8,1.8,1.9,1.9,0,0,0,.5,1.3,1.46,1.46,0,0,0,1.2.5,1.88,1.88,0,0,0,.8-.2,3,3,0,0,0,.8-.8V37a3.17,3.17,0,0,1-1.6.4,3.34,3.34,0,0,1-2.3-.9,3.14,3.14,0,0,1,0-4.4,3.17,3.17,0,0,1,2.3-.9A16.19,16.19,0,0,1,60.7,31.8Zm7,3H63.5A1.85,1.85,0,0,0,64,36a1.5,1.5,0,0,0,1.1.4,1.88,1.88,0,0,0,.8-.2,3.11,3.11,0,0,0,.7-.9l1.1.6a4.17,4.17,0,0,1-.6.8,2.65,2.65,0,0,1-.6.5c-.2.1-.5.2-.7.3a2.49,2.49,0,0,1-.8.1,3.23,3.23,0,0,1-2.1-.8,3.49,3.49,0,0,1-.8-2.2,3,3,0,0,1,.8-2.2,3,3,0,0,1,4.1,0,2.93,2.93,0,0,1,.7,2.2Zm-1.4-1.1A1.38,1.38,0,0,0,65,32.6a.9.9,0,0,0-.5.1.76.76,0,0,0-.4.2l-.3.3a.76.76,0,0,0-.2.5Zm8.5-5.5v9.2H73.4V28.2Zm1.9,3.4H78v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H80.4V34.2a5,5,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8H76.8l-.1-5.8Zm6.6,0h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6H87V34.2a5,5,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8H83.4l-.1-5.8Zm6.2,2.9a3.1,3.1,0,0,1,.9-2.2,3.11,3.11,0,0,1,4.4,4.4,3.1,3.1,0,0,1-5.3-2.2Zm1.4,0a1.87,1.87,0,0,0,.5,1.4,1.75,1.75,0,0,0,2.5,0,2.25,2.25,0,0,0,0-2.7,1.75,1.75,0,0,0-2.5,0,1.9,1.9,0,0,0-.5,1.3Zm6.7-2.9,1.5,3.3,1.5-3.3h1.5l-3,6.2-3-6.2Zm9.6,0h1.3v5.8h-1.3v-.6a2.53,2.53,0,0,1-3.6,0l-.1-.1a3.42,3.42,0,0,1,0-4.4,2.52,2.52,0,0,1,2-.9,2.34,2.34,0,0,1,1.8.8ZM104,34.5a2.3,2.3,0,0,0,.4,1.4,1.69,1.69,0,0,0,2.4,0,2.25,2.25,0,0,0,0-2.7,1.66,1.66,0,0,0-1.2-.5,1.85,1.85,0,0,0-1.2.5A2.5,2.5,0,0,0,104,34.5Zm7.7-1.7v4.6h-1.3V32.8h-.6V31.5h.6V29.4h1.3v2.1h1v1.2Zm2.1-3.6a.9.9,0,0,1,.9-.9.71.71,0,0,1,.6.3.86.86,0,0,1,.3.6.71.71,0,0,1-.3.6.86.86,0,0,1-.6.3.71.71,0,0,1-.6-.3A.6.6,0,0,1,113.8,29.2Zm1.5,2.4v5.8H114V31.6Zm1.2,2.9a3.1,3.1,0,0,1,.9-2.2,3.11,3.11,0,0,1,4.4,4.4,3.1,3.1,0,0,1-5.3-2.2Zm1.4,0a1.87,1.87,0,0,0,.5,1.4,1.75,1.75,0,0,0,2.5,0,2.25,2.25,0,0,0,0-2.7,1.75,1.75,0,0,0-2.5,0,1.54,1.54,0,0,0-.5,1.3Zm6.2-2.9h1.3v.5a2.36,2.36,0,0,1,1.6-.7,2.27,2.27,0,0,1,1.6.6,2.73,2.73,0,0,1,.5,1.8v3.6h-1.3V34.2a2.54,2.54,0,0,0-.2-1.2.83.83,0,0,0-.8-.3,1,1,0,0,0-.9.4,4,4,0,0,0-.3,1.5v2.8h-1.3ZM0,0H129.4V3.6H0Z"></path>
            </svg>
            <svg
              className="hide-for-large"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 45.9 25.6"
              enable-background="new 0 0 45.9 25.6"
              xmlSpace="preserve"
            >
              <path d="M11.5,11.5v2.6c-1.3-1.1-2.6-1.6-3.9-1.6c-1.5,0-2.8,0.5-3.8,1.6S2.3,16.5,2.3,18s0.5,2.8,1.5,3.9s2.3,1.6,3.8,1.6c0.8,0,1.4-0.1,2-0.4c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.2,0.7-0.5,1-0.8v2.7c-1.3,0.7-2.6,1.1-4,1.1c-2.1,0-3.9-0.7-5.3-2.2C0.7,21.9,0,20.2,0,18.1c0-1.9,0.6-3.5,1.8-5c1.5-1.8,3.5-2.7,5.9-2.7C9,10.5,10.3,10.8,11.5,11.5z"></path>
              <path d="M18.9,10.7v14.6h-2.2V10.7H18.9z"></path>
              <path d="M32.3,17.7h6v0.5c0,1.1-0.1,2.1-0.4,2.9c-0.3,0.8-0.7,1.5-1.3,2.2c-1.4,1.5-3.1,2.3-5.2,2.3c-2,0-3.8-0.7-5.2-2.2c-1.5-1.5-2.2-3.3-2.2-5.3c0-2.1,0.7-3.9,2.2-5.4s3.3-2.2,5.4-2.2c1.1,0,2.2,0.2,3.2,0.7c0.9,0.5,1.9,1.2,2.8,2.3L36,15c-1.2-1.6-2.7-2.4-4.4-2.4c-1.5,0-2.8,0.5-3.9,1.6c-1,1-1.6,2.4-1.6,3.9c0,1.6,0.6,3,1.7,4s2.3,1.5,3.5,1.5c1.1,0,2.1-0.4,2.9-1.1c0.9-0.7,1.3-1.6,1.4-2.6H32v-2.2H32.3z"></path>
              <path d="M45.8,10.7v14.6h-2.2V10.7H45.8z"></path>
              <rect y="0" width="45.9" height="3.6"></rect>
            </svg>
          </a>
        </div>
        <div className="cigi-menu">
          {language == "en" ? (
            <>
              <span className="intl-selected">EN</span>
              <span>/</span>
              <a
                href="#"
                className="ember-view intl-link"
                onClick={setLanguage}
              >
                FR
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className="ember-view intl-link"
                onClick={setLanguage}
              >
                EN
              </a>
              <span>/</span>
              <span className="intl-selected">FR</span>
            </>
          )}
          <button
            className={`${isOpen ? "close-" : "open-"}menu-btn`}
            type="button"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                focusable="false"
                aria-hidden="true"
                data-icon="times"
                data-prefix="fal"
                id="ember1250"
                class="svg-inline--fa fa-times fa-w-10 fa-lg ember-view"
              >
                <path
                  fill="currentColor"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                ></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                focusable="false"
                aria-hidden="true"
                data-icon="bars"
                data-prefix="fal"
                id="ember1048"
                className="svg-inline--fa fa-bars fa-w-14 fa-lg ember-view"
              >
                <path
                  fill="currentColor"
                  d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </MenuPortal>
  );
};

AnnualReportMenu.propTypes = {};

export default AnnualReportMenu;
