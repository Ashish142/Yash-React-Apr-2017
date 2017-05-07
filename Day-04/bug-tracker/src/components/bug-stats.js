import React from 'react';

function BugStats ({bugs}){
	let closedCount = bugs.filter(bug => bug.isClosed).length;
	return (
		<section className="stats">
	 		<span className="closed">{closedCount}</span>
	 		<span> / </span>
	 		<span>{bugs.length}</span>
	 	</section>
	)
}

export default BugStats;