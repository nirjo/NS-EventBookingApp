import React from 'react';

import EventInfos from '../EventInfos/EventInfos';
import styles from './EventInfoContainer.module.css';

import styled from 'styled-components';
const Wrapper = styled.section `
  background: palevioletred;
`;
const Title = styled.h1 `
  font-size: 1em;
 
  color: blueviolet; 
  
`;
const EventInfoContainer = (props) => (
 <Title>
 <EventInfos an_event={props.an_event}/>
 </Title>
  
	

);

EventInfoContainer.propTypes = {};

EventInfoContainer.defaultProps = {};

export default EventInfoContainer;
