import React from 'react';
import "../App.css"
let date=new Date();
let year=date.getFullYear();
console.log(year)
function footer(){
	return <footer>

	<p>Copyright © {year}</p>

	</footer>
}


export default footer;