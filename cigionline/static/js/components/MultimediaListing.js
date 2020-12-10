import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';

import '../../css/components/MultimediaListing.scss';

function MultimediaListing(props) {
  const { row } = props;

  return (
    <div className="col multimedia-list-col">
      <a href={row.url} className="multimedia-card-image">
        <div className="img-wrapper" style={{ backgroundImage: `url(${row.image_hero_url})` }} />
        <div className="multimedia-image-type">
          <i className="fas fa-play" />
        </div>
      </a>
      <ul className="custom-text-list multimedia-card-topic-list">
        {row.topics.map((topic) => (
          <li key={topic.id}>
            <a href={topic.url} className="table-content-link">
              {topic.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="multimedia-card-title">
        <a href={row.url}>
          {row.title}
        </a>
      </p>
      <ul className="custom-text-list multimedia-card-speakers-list">
        {row.speakers.slice(0, 3).map((speaker) => (
          <li key={speaker.id}>
            {speaker.type === 'speaker'
              ? (
                <a href={speaker.value.url}>
                  {speaker.value.title}
                </a>
              )
              : speaker.value}
          </li>
        ))}
        {row.speakers.length > 3 && (
          <li key="more">And more</li>
        )}
      </ul>
      <p className="multimedia-card-date">
        {DateTime.fromISO(row.publishing_date).toLocaleString(DateTime.DATE_FULL)}
      </p>
    </div>
  );
}

MultimediaListing.propTypes = {
  row: PropTypes.shape({
    image_hero_url: PropTypes.string,
    publishing_date: PropTypes.string,
    speakers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.any,
    })),
    title: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MultimediaListing;