import React from 'react';

import styles from './Main.module.css';
import EventListContainer from '../EventListContainer/EventListContainer';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Container = styled.div`
   width: 1280px;
   min-width: 1280px;
   margin: 0 auto;
   background: papayawhip ;
`;
const Main = () =>{
	
	return (

<Wrapper>
<Container>
<EventListContainer />
</Container>
</Wrapper>
		
			
		
);
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
