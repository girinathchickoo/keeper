import react from "react";

import "../App.css";

function saved(p){
	return <div className="saved">
		<h1>{p.title}</h1>
		<p>{p.content}</p>
		<button onClick={()=>p.handle(p.index)}><i class="fas fa-trash"></i></button>
	</div>
}







export default saved;