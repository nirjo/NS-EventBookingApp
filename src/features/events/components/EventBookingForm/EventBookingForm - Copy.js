import React,{useState} from 'react';
import {getBookedSeatCountByEvent,addNewBooking } from '../../bookingSlice';
// import {getBookedSeatCountByEvent,addNewBooking } from '../../bookingSlice';
import { useSelector,useDispatch } from 'react-redux';
import styles from './EventBookingForm.module.css';
 
 
const EventBookingForm = (props) => {
	const [inputList, setInputList] = useState([]);
	const dispatch = useDispatch()
	const updateNumberOfTextBox = () =>{
		
	 const x =  inputList.map((number) =>
	<div className={styles.formRow} key={number}>
		<div className={styles.formLabel}>Attendees #{number+1}: </div>
		<div className={styles.formInput}><input type="text" id={"userName_"+number}/></div>
		<div id={"error_user_name_"+number} className={styles.formError}></div>
	</div>);
		return x;
	}
	const add_error_msg= (parent_elem,msg) =>{
		 document.getElementById(parent_elem).innerHTML =msg;
	}
	const submitClicked = async (event) =>{ // this change event of select differnt from datamodel event
	
		event.preventDefault();
		
		var form_verified = true;
		
		var event_id = props.event_item.id;
		var userName =  document.getElementById("userName").value;
		if(userName.trim("")==""){
			form_verified = false
			add_error_msg("error_user_name","*Please Fill-in User Name")
		}else{
			add_error_msg("error_user_name","")
		}
		var userEmail =  document.getElementById("userEmail").value;
		if(userEmail.trim()=="" || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail)) ){
			form_verified = false
			add_error_msg("error_user_email","*Please Fill-in User Email in Correct Format")
		}else{
			add_error_msg("error_user_email","")
		}
		var userPhoneNo =  document.getElementById("userPhoneNo").value;
		 var number_format = /^[0-9]+$/;
		if(userEmail.trim()==""  || !userPhoneNo.match(number_format) || userPhoneNo.length < 6){
			form_verified = false
			add_error_msg("error_user_phone","*Please Use minimum 6 digit Phone No")
		}else{
			add_error_msg("error_user_phone","")
		}
		if (inputList.length>1){
			
			inputList.forEach((elem)=>{
				// participants.push(document.getElementById("userName_"+elem).value)
				if(document.getElementById("userName_"+elem).value.trim()==""){
					form_verified = false
					add_error_msg("error_user_name_"+elem,"*Please Fill-in User Name at #"+(elem+1))
				}else{
					add_error_msg("error_user_name_"+elem,"")
				}
			})
			
		}
		
		
		var participants = []
		participants.push(userName)
		inputList.forEach((elem)=>{
			participants.push(document.getElementById("userName_"+elem).value)
		})
		
		
		// //*****IMPORTANT REMOVE THIS
		// form_verified = false;
		// //*****IMPORTANT REMOVE ABOVE THIS
		if(form_verified){
			var payload = {
				"event_id": event_id,
				"user_email": userEmail,
				"user_name": userName,			
				"user_phone_no": userPhoneNo,			
				"participants":participants
			}
			  
			  const resultAction = await dispatch(
			  addNewBooking(payload)
			)
		}
		
	}
	const onNumberOfSeatChange = (event) =>{ // this change event of select differnt from datamodel event
	
		if(parseInt(event.target.value) > 1)
			setInputList( Array.from({length: parseInt(event.target.value)-1}, (_, index) => index + 1))
		else
			setInputList([])
	}
	 var available_seats =   (props.event_item!==undefined ? props.event_item.total_seats:0) -  useSelector((state) => getBookedSeatCountByEvent(state,  props.event_item))
	 const create_options = (num)=>{
		 const arr = Array.from({length: num}, (_, index) => index + 1);

		 const x =  arr.map((number) =>
				<option key = {number} value={number}>{number}</option>)
		return x;
	 }
	return( 															
	
  <div className={styles.EventBookingForm} data-testid="EventBookingForm">
		<div className={styles.formRow} ><div  className={styles.formLabel}>Name : </div><div className={styles.formInput}><input type="text" id="userName"/></div><div id="error_user_name" className={styles.formError}></div></div>
		<div className={styles.formRow} ><div  className={styles.formLabel}>Email : </div><div className={styles.formInput}><input type="text" id="userEmail"/></div><div id="error_user_email" className={styles.formError}></div></div>
		<div className={styles.formRow} ><div  className={styles.formLabel}>Phone No. : </div><div className={styles.formInput}><input type="text" id="userPhoneNo"/></div><div id="error_user_phone" className={styles.formError}></div></div>
		<div className={styles.formRow} ><div className={styles.formLabel}>Number of Seats : </div>
		<div  className={styles.formInput} >
			<select onChange={onNumberOfSeatChange}>
				{create_options(available_seats)}
			</select>
			</div><div  className={styles.formError}></div></div>
		{updateNumberOfTextBox()}
			{/*
		<div className={styles.formRow} ><div className={styles.formLabel}>Name Of attendees : </div><div className={styles.formInput}><input type="text"/></div></div>
			*/}
		
		<div id="buttonDiv" className={styles.formRow} ><div className={styles.buttonDivLeft}><a className= {styles.buttonLink} onClick={submitClicked} href="/">Submit</a></div><div  className={styles.buttonDivRight}><a className= {styles.buttonLink}href="/">Cancel</a></div></div>
  </div>
	);
}
EventBookingForm.propTypes = {};

EventBookingForm.defaultProps = {};

export default EventBookingForm;
