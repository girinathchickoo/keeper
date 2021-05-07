import React,{useState} from 'react';
import "../App.css";
import Saved from "./saved";


function Note(){
	const [value,setValue]=useState({title:"",
									 content:"",});
	const [items,setItems]=useState([])
	const [isHovered,setHover]=useState(false);
	function handleVal(event){
		var formValue=event.target.value;
		var fieldName=event.target.name; 
		setValue((prevVal)=>{
			if(fieldName === "title"){
				return({...prevVal,
						title:formValue})
			}else if(fieldName === "content"){
				return({...prevVal,
						content:formValue})}
			})}
function handleClick(event){
	setItems((prevVal)=>{
		return [...prevVal,value]
			
			})
	setValue({title:"",content:"",});
	event.preventDefault();
}
function handleDelete(k){
	setItems((prevVal)=>{
		prevVal.splice(k,1);
		return [...prevVal]

	})

}
	return <div>
	<div className="note" onMouseOver={()=>{setHover(true)}}>
		<form>
			<input name="title" placeholder="title" onChange={handleVal} value={value.title}/>
			{! isHovered ? <textarea name="content" onChange={handleVal} placeholder="content" value={value.content} />
			<button type="submit" onClick={handleClick}>+</button>
 	
		</form>
		</div>
		<div className="flex">
		{!(items.length===0) && items.map((item,index)=><Saved index={index} handle={handleDelete}key={index} title={item.title} content={item.content} />)}
		</div>
	</div>
}

export default Note;