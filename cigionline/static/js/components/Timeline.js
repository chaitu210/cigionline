import React, { useState } from "react";
import Footer from "./Footer";

const Timeline  = ({ slide }) => {

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
        <div className="liquid-container" style={{}}>
          <div
            className="liquid-child"
            style={{ top: 0, left: 0, opacity: 1 }}
          >
            <div>
              <div
                className="liquid-child"
                style={{ top: 0, left: 0, opacity: 1 }}
              >
                <div
                  class="background-row timeline-background"
                  style={{}}
                ></div>
                <div class="timeline-container show-for-large">
                  <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                      <div class="cell medium-8">
                        <h1>Explore Timeline</h1>
                      </div>
                      <div class="cell medium-4">
                        <div class="grid-x">
                          <div class="cell clearfix opinions-label">
                            <div class="timeline-bubble-preview opinion float-right"></div>
                            <span class="timeline-bubble-label float-right">
                              Opinions
                            </span>
                          </div>
                        </div>
                        <div class="grid-x">
                          <div class="cell clearfix publications-label">
                            <div class="timeline-bubble-preview publication float-right"></div>
                            <span class="timeline-bubble-label float-right">
                              Publications
                            </span>
                          </div>
                        </div>
                        <div class="grid-x">
                          <div class="cell clearfix events-label">
                            <div class="timeline-bubble-preview event float-right"></div>
                            <span class="timeline-bubble-label float-right">
                              Events
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-search-container show-for-large">
                  <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                      <div class="cell medium-4 timeline-search">
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          focusable="false"
                          aria-hidden="true"
                          data-icon="search"
                          data-prefix="fal"
                          class="svg-inline--fa fa-search fa-w-16 fa-sm"
                        >
                          <path
                            fill="currentColor"
                            d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                          ></path>
                        </svg>
                        <input
                          placeholder="Search"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-container hide-for-large mobile">
                  <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                      <div class="cell medium-8">
                        <h1>Explore Timeline</h1>
                        <p>
                          The interactive timeline cannot be displayed on your
                          mobile device. For the best experience, please view on
                          a desktop browser.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="show-for-large">
                  <div>
                    <div class="timeline show-for-large">
                      <p class="date-marker date-marker-beg">2019</p>
                      <p class="date-marker date-marker-end">2020</p>
                      <div class="timeline-line line-start"></div>
                      <div class="ticks">
                        <div class="tick">AUG</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">SEP</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">OCT</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">NOV</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">DEC</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">JAN</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">FEB</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">MAR</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">APR</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">MAY</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">JUN</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick line">JUL</div>
                        <div class="tick line">&nbsp;</div>
                        <div class="tick">AUG</div>
                      </div>
                      <div class="timeline-line line-end"></div>
                      <div
                        class="timeline-bubble node-15400 opinion search-match"
                        style={{ left: 1, top: 294 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1, 2019</h6>
                          </div>
                        </div>
                      </div>

                      <div
                        class="timeline-bubble node-15400 publication search-match"
                        style={{ left: 12, top: 384 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1, 2019</h6>
                          </div>
                        </div>
                      </div>

                      <div
                        class="timeline-bubble node-15400 event search-match"
                        style={{ left: 23, top: 594 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1, 2019</h6>
                          </div>
                        </div>
                      </div>

                      <div
                        class="timeline-bubble node-15400 event search-match"
                        style={{ left: 41, top: 214 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1, 2019</h6>
                          </div>
                        </div>
                      </div>

                      <div
                        class="timeline-bubble node-15400 opinion search-match"
                        style={{ left: 34, top: 194 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1, 2019</h6>
                          </div>
                        </div>
                      </div>
                      <div
                        class="timeline-bubble node-15400 opinion search-match"
                        style={{ left: 45, top: 494 }}
                      >
                        <div class="preview">
                          <div class="preview-image-container">
                            <div class="preview-image timeline-15400-thumbnail"></div>
                          </div>
                          <div class="preview-line"></div>
                          <div class="preview-text preview-text-right">
                            <h6>Opinion</h6>
                            <h5>What You Need to Know about Libra</h5>
                            <h6 class="pub-date">August 1}} 2019</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-search-container">
                    <div class="grid-container">
                      <div class="grid-x grid-margin-x">
                        <div class="cell"></div>
                      </div>
                    </div>
                  </div>

                  <Footer slide={slide} socialIcons={socialIcons} contentOpacity={contentOpacity} changeStyle={changeStyle} changeSocialStyle={changeSocialStyle} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Timeline;
