import React  from 'react';
import styles from './EventSeacrhContainer.module.css';



const EventSeacrhContainer = (props) => {
	
	 const onSearchStringChanged = (e) =>{
		 
		
			 
		     // dispatch(searchChanged(e.target.value))
			 // dispatch(filterEvents(e.target.value))
			 props.onSearchStringChanged(e.target.value)
		  // setTitle(e.target.value)
	 }
	return (
  <div className={styles.EventSeacrhContainer}>
    <input type="text" placeholder = {"SEARCH EVENTS"} onChange={onSearchStringChanged}/>
  </div>
);
}
EventSeacrhContainer.propTypes = {};

EventSeacrhContainer.defaultProps = {};

export default EventSeacrhContainer;
