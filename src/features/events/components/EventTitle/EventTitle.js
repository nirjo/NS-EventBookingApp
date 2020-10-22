import React from 'react';

import styles from './EventTitle.module.css';

const EventTitle = (props) => (
  <div className={styles.EventTitle}>
	  {props.event_name}
  </div>
);

EventTitle.propTypes = {};

EventTitle.defaultProps = {};

export default EventTitle;
