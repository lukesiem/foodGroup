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
			  
			  <Link to="/potluck"  className="grocerylistButton" >Create Potluck</Link>
			  <Link to="/grocery-list" className="grocerylistButton">Create Grocery List</Link>

			  <form>
			    <textarea rows="2" cols="50" defaultValue="Input your food items here" />
               </form>

		     </div>
		)
	} 
}









export default Menu