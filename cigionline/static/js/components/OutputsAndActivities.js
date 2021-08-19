import React, { useState } from "react";
import Footer from "./Footer";

const OutputsAndActivities = ({ slide }) => {

    const [contentOpacity, updatecontentOpacity] = useState(true);
    const [socialIcons, updatesocialIcons] = useState(true);

  const changeStyle = (e) => {
    if (contentOpacity) {
      updatecontentOpacity(false);
    } else {
      updatecontentOpacity(true);
    }
  };

  const changeSocialStyle = (e) => {
    if (socialIcons) {
      updatesocialIcons(false);
    } else {
      updatesocialIcons(true);
    }
  };
  
    return (
      <div className="App">
        <div id="ember13" className="liquid-container ember-view" style={{}}>
          <div
            id="ember2004"
            className="liquid-child ember-view"
            style={{ top: 0, left: 0, opacity: 1 }}
          >
            <div id="ember1402" classNameName="ember-view">
              <div
                class="background-row background-outputs-activities"
                style={{}}
              ></div>
              <div class="outputs-activities">
                <div class="grid-container">
                  <div class="grid-x grid-margin-x">
                    <div class="cell">
                      <h1>Outputs and Activities</h1>
                    </div>
                  </div>
                  <div class="grid-x grid-margin-x outputs-activities-content">
                    <div class="cell">
                      <div class="outputs-activities-header clearfix">
                        <div class="publications-menu">
                          Publications
                          <span>/</span>
                          <button
                            class="view-opinions-btn"
                            type="button"
                            data-ember-action=""
                            data-ember-action-1406="1406"
                          >
                            Opinions
                          </button>
                          <span>/</span>
                          <button
                            class="view-events-btn"
                            type="button"
                            data-ember-action=""
                            data-ember-action-1407="1407"
                          >
                            Events
                          </button>
                        </div>
                        <div class="outputs-activities-pagination">
                          <button
                            class="page-arrow page-arrow-previous "
                            type="button"
                            data-ember-action=""
                            data-ember-action-1408="1408"
                          >
                            <svg
                              viewBox="0 0 256 512"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              focusable="false"
                              aria-hidden="true"
                              data-icon="chevron-left"
                              data-prefix="fal"
                              id="ember1409"
                              class="svg-inline--fa fa-chevron-left fa-w-8 fa-sm ember-view"
                            >
                              <path
                                fill="currentColor"
                                d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                              ></path>
                            </svg>
                          </button>
                          <button
                            class="page-number"
                            type="button"
                            data-ember-action=""
                            data-ember-action-1548="1548"
                          >
                            1
                          </button>
                          <button
                            class="page-number"
                            type="button"
                            data-ember-action=""
                            data-ember-action-1549="1549"
                          >
                            2
                          </button>
                          <span class="page-number current">3</span>
                          <button
                            class="page-number"
                            type="button"
                            data-ember-action=""
                            data-ember-action-1550="1550"
                          >
                            4
                          </button>
                          <button
                            class="page-arrow page-arrow-next "
                            type="button"
                            data-ember-action=""
                            data-ember-action-1413="1413"
                          >
                            <svg
                              viewBox="0 0 256 512"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              focusable="false"
                              aria-hidden="true"
                              data-icon="chevron-right"
                              data-prefix="fal"
                              id="ember1414"
                              class="svg-inline--fa fa-chevron-right fa-w-8 fa-sm ember-view"
                            >
                              <path
                                fill="currentColor"
                                d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-x grid-margin-x outputs-activities-content">
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/standards-digital-cooperation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          January 16, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Standards for Digital Cooperation
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1551="1551"
                      >
                        <h6>
                          January 16, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Standards for Digital Cooperation
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/kiskinohamatowin-international-academic-forum-human-rights-indigenous-peoples"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          January 18, 2020<span>|</span>Conference Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Kiskinohamatowin: An International Academic Forum on
                            the Human Rights of Indigenous Peoples
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1552="1552"
                      >
                        <h6>
                          January 18, 2020<span>|</span>Conference Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Kiskinohamatowin: An International Academic Forum on
                            the Human Rights of Indigenous Peoples
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/macro-foundations-macroprudential-policy-survey-and-assessment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          January 21, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Macro Foundations for Macroprudential Policy: A
                            Survey and Assessment
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1553="1553"
                      >
                        <h6>
                          January 21, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Macro Foundations for Macroprudential Policy: A
                            Survey and Assessment
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/undrip-implementation-comparative-approaches-indigenous-voices-canzus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          March 10, 2020<span>|</span>Special Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            UNDRIP Implementation: Comparative Approaches,
                            Indigenous Voices from CANZUS
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1554="1554"
                      >
                        <h6>
                          March 10, 2020<span>|</span>Special Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            UNDRIP Implementation: Comparative Approaches,
                            Indigenous Voices from CANZUS
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/getting-beyond-forced-technology-transfers-analysis-and-recommendations-intangible"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          March 17, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Getting beyond Forced Technology Transfers: Analysis
                            of and Recommendations on Intangible Economy
                            Governance in China
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1555="1555"
                      >
                        <h6>
                          March 17, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Getting beyond Forced Technology Transfers: Analysis
                            of and Recommendations on Intangible Economy
                            Governance in China
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/competing-artificial-intelligence-chips-chinas-challenge-amid-technology-war"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          March 26, 2020<span>|</span>Special Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Competing in Artificial Intelligence Chips: China’s
                            Challenge amid Technology War
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1556="1556"
                      >
                        <h6>
                          March 26, 2020<span>|</span>Special Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Competing in Artificial Intelligence Chips: China’s
                            Challenge amid Technology War
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/pluralisme-normatif-etat-de-droit-et-developpement-durable-au-soudan-du-sud"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 9, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Pluralisme normatif, État de droit et développement
                            durable au Soudan du Sud
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1557="1557"
                      >
                        <h6>
                          April 9, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Pluralisme normatif, État de droit et développement
                            durable au Soudan du Sud
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/open-finance-game-changing-reform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 9, 2020<span>|</span>Conference Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Open Finance: A Game-changing Reform
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1558="1558"
                      >
                        <h6>
                          April 9, 2020<span>|</span>Conference Reports
                        </h6>
                        <h5>
                          <span class="underline">
                            Open Finance: A Game-changing Reform
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/toward-robust-architecture-regulation-data-and-digital-trade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 15, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Toward a Robust Architecture for the Regulation of
                            Data and Digital Trade
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1559="1559"
                      >
                        <h6>
                          April 15, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Toward a Robust Architecture for the Regulation of
                            Data and Digital Trade
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/data-dangerous-comparing-risks-united-states-canada-and-germany-see-data-troves"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 15, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Data Is Dangerous: Comparing the Risks That the
                            United States, Canada and Germany See in Data Troves
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1560="1560"
                      >
                        <h6>
                          April 15, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Data Is Dangerous: Comparing the Risks That the
                            United States, Canada and Germany See in Data Troves
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/managed-retreat-high-risk-flood-areas-design-considerations-effective-property-buyout"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 28, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Managed Retreat from High-risk Flood Areas: Design
                            Considerations for Effective Property Buyout
                            Programs
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1561="1561"
                      >
                        <h6>
                          April 28, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Managed Retreat from High-risk Flood Areas: Design
                            Considerations for Effective Property Buyout
                            Programs
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/indigenous-reserve-lands-canada-face-high-flood-risk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          April 30, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Indigenous Reserve Lands in Canada Face High Flood
                            Risk
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1562="1562"
                      >
                        <h6>
                          April 30, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            Indigenous Reserve Lands in Canada Face High Flood
                            Risk
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/modernizing-world-trade-organization"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          May 11, 2020<span>|</span>Essay Series
                        </h6>
                        <h5>
                          <span class="underline">
                            Modernizing the World Trade Organization
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1563="1563"
                      >
                        <h6>
                          May 11, 2020<span>|</span>Essay Series
                        </h6>
                        <h5>
                          <span class="underline">
                            Modernizing the World Trade Organization
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/new-directions-mining-governance-and-sustainable-development-goals-africa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          May 14, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            New Directions in Mining Governance and the
                            Sustainable Development Goals in Africa
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1564="1564"
                      >
                        <h6>
                          May 14, 2020<span>|</span>Policy Briefs
                        </h6>
                        <h5>
                          <span class="underline">
                            New Directions in Mining Governance and the
                            Sustainable Development Goals in Africa
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/top-level-design-supremacy-economic-policy-making-china-under-president-xi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          May 28, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Top-level Design for Supremacy: Economic Policy
                            Making in China under President Xi
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1565="1565"
                      >
                        <h6>
                          May 28, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Top-level Design for Supremacy: Economic Policy
                            Making in China under President Xi
                          </span>
                        </h5>
                      </button>
                    </div>
                    <div class="cell small-12 medium-3">
                      <a
                        class="outputs-activities-listing show-for-small-only"
                        href="https://www.cigionline.org/publications/ensuring-respect-indigenous-cultures-moral-rights-approach"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6>
                          May 29, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Ensuring Respect for Indigenous Cultures: A Moral
                            Rights Approach
                          </span>
                        </h5>
                      </a>
                      <button
                        class="outputs-activities-listing show-for-medium"
                        type="button"
                        data-ember-action=""
                        data-ember-action-1566="1566"
                      >
                        <h6>
                          May 29, 2020<span>|</span>CIGI Papers
                        </h6>
                        <h5>
                          <span class="underline">
                            Ensuring Respect for Indigenous Cultures: A Moral
                            Rights Approach
                          </span>
                        </h5>
                      </button>
                    </div>
                  </div>
                  <div class="grid-x outputs-activities-content">
                    <div class="cell">
                      <p class="page-count">Page 3 of 4</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Footer slide={slide} socialIcons={socialIcons} contentOpacity={contentOpacity} changeStyle={changeStyle} changeSocialStyle={changeSocialStyle} />

            </div>
          </div>
        </div>
      </div>
    );
}

export default OutputsAndActivities;
