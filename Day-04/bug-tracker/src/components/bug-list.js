import React from 'react';
import BugItem from './bug-item';

function BugList({bugs, removeClosed, toggle}){
	let bugItems = bugs.map((bug,index) => <BugItem bug={bug} key={index} toggle={toggle}></BugItem>);
	return (
		<section className="list">
	 		<ol>
	 			{bugItems}
	 		</ol>
	 		<input type="button" value="Remove Closed" onClick={removeClosed}/>
	 	</section>
	)
}
export default BugList;