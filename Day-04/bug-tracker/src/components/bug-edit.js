import React, { Component } from 'react';

class BugEdit extends Component{
	render (){
		return (
			<section className="edit">
		 		<label htmlFor="">Bug Name :</label>
		 		<input type="text" ref="txtName"/>
		 		<input type="button" value="Add New" onClick={() => this.props.addNew(this.refs.txtName.value)}/>
		 	</section>
		)
	}
}

export default BugEdit;