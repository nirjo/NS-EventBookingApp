import React  from 'react';
// import styles from './EventSeacrhContainer.module.css';
import styled from 'styled-components';


const Wrapper = styled.section`
  background: palevioletred;
`;
const Title = styled.h1`
  font-size: 0em;
  text-align:center;
  color: blueviolet; 
  
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  /* border: none; */
  border-radius: 3px;
`;

const Container = styled.div`
   width: 1280px;
   min-width: 1280px;
   margin: 0 auto;
`;

const EventSeacrhContainer = (props) => {
	
	 const onSearchStringChanged = (e) =>{
		 
		
			 
		     // dispatch(searchChanged(e.target.value))
			 // dispatch(filterEvents(e.target.value))
			 props.onSearchStringChanged(e.target.value)
		  // setTitle(e.target.value)
	 }
	return (
		<Wrapper>
		<Container>
		<Title>
		<Input defaultValue="SELECT EVENT" type="text"  onChange={onSearchStringChanged} inputColor="rebeccapurple" />
		</Title>
		</Container>
		</Wrapper>

);
}


export default EventSeacrhContainer;
