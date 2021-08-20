import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AnnualReportPage from '../../js/components/AnnualReportPage';
import {
  language,
  currentSlug,
} from '../../js/components/AnnualReportConstants';
import 'swiper/components/navigation/navigation.min.css';

import './css/styles.css';
import './css/vendor.css';
import './css/annual_report.css';

let slideIndex = -1;
let translationKey = '';
let otherLangSlug = '';

window.annualReport = JSON.parse(
  document.getElementById('annual-report-json').textContent
);

const annualReport = JSON.parse(
  document.getElementById('annual-report-json').textContent
);

const slides = annualReport.value.language.slides;
const year = annualReport.value.language.year;
const otherLangSlides = language === 'en'
  ? annualReport.value.fr.slides
  : annualReport.value.en.slides;

slides.forEach(function (slide, index) {
  if (currentSlug === '') {
    if (slide.value.slug === currentSlug) {
      slideIndex = index;
      translationKey = slide.translation_key;
    }
  } else {
    if (slide.value.slug.indexOf(currentSlug) > -1) {
      slideIndex = index;
      translationKey = slide.translation_key;
    }
  }
});

otherLangSlides.forEach(function(slide){
  if (slide.translation_key === translationKey) {
    otherLangSlug = slide.value.slug;
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
  document.getElementById('annual-report-interactives')
);
