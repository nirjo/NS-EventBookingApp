import React from 'react';

import styles from './EventBookingFormThumbnailContainer.module.css';
import EventThumbNailImage from '../EventThumbNailImage/EventThumbNailImage';
const EventBookingFormThumbnailContainer = (props) =>{ 

return (
  <div className={styles.EventBookingFormThumbnailContainer} data-testid="EventBookingFormThumbnailContainer">
    <EventThumbNailImage events_thumbnail_image = {props.event_item!==undefined?props.event_item.events_thumbnail_image:""}/>
  </div>
)};

EventBookingFormThumbnailContainer.propTypes = {};

EventBookingFormThumbnailContainer.defaultProps = {};

export default EventBookingFormThumbnailContainer;
