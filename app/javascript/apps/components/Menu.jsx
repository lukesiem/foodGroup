import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class  Menu extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

	render() {
		return (
			<div >
			  
			
			  <Link to="/potlucks"  className="book2" >Potlucks</Link> <br/>
			  <Link to="/groceries" className="book1">Grocery List</Link>
			  <Link to="/pantry" className="book3">Pantry</Link>
			 
			


		     </div>
		)
	}
}









export default Menu