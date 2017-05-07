import React  from 'react';

function BugItem({bug, toggle}){
	var styles = 'bugname ' + (bug.isClosed ? 'closed' : '');
	return (
		<li>
			<span className={styles} onClick={() => toggle(bug)}>{bug.name}</span>
			<div><i>{bug.isClosed.toString()}</i></div>
		</li>
	)
}
export default BugItem;