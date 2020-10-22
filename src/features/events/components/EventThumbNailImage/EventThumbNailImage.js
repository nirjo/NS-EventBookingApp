import React from 'react';

import styles from './EventThumbNailImage.module.css';

const EventThumbNailImage = (props) => {
	
	return (
  <div className={styles.EventThumbNailImage} data-testid="EventThumbNailImage">
   
	<img className={styles.circularSquare} src={props.events_thumbnail_image} alt="" />
  </div>
);
}

EventThumbNailImage.propTypes = {};

EventThumbNailImage.defaultProps = {};

export default EventThumbNailImage;
