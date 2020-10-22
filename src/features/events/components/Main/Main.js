import React from 'react';

import styles from './Main.module.css';
import EventListContainer from '../EventListContainer/EventListContainer';

const Main = () =>{
	
	return (


		<div className={styles.Main} data-testid="Main">

			<EventListContainer />
		</div>
);
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
