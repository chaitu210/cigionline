import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AnnualReportPage from '../../js/components/AnnualReportPage';
import "swiper/components/navigation/navigation.min.css"


import "./css/styles.css";
import "./css/vendor.css";
import "./css/annual_report.css";


window.annualReport = JSON.parse(document.getElementById('annual-report-json').textContent);

const annualReport = JSON.parse(document.getElementById('annual-report-json').textContent);
const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
const slides = annualReport['value'][language]['slides'];
const year = annualReport['value'][language]['year'];
const otherLangSlides = language == 'en' ? annualReport['value']['fr']['slides'] : annualReport['value']['en']['slides'];
var slideIndex = -1;
var translation_key = '';
var otherLangSlug = '';
const location = window.location.href;
const splitUrl = location.split('/'); 
const currentSlug = splitUrl.length == 10 ? splitUrl[splitUrl.length-2] : splitUrl[splitUrl.length-1];

slides.forEach( function (slide, index) {
            if(currentSlug == ''){
              if(slide['value']['slug'] == currentSlug){
                slideIndex = index;
                translation_key = slide['translation_key']
              }

            }else{
              if(slide['value']['slug'].indexOf(currentSlug) > -1){
                slideIndex = index;
                translation_key = slide['translation_key']
              }

            }
        });

otherLangSlides.forEach( function (slide) {
              if(slide['translation_key'] == translation_key){
                otherLangSlug = slide['value']['slug']
              }
        });


ReactDOM.render(
  <Router>
    <AnnualReportPage
      slides={slides}
      slideindex={slideIndex}
      otherLangSlug={otherLangSlug}
      year={year}
    />
  </Router>,
  document.getElementById('annual-report-interactives'),
);
