import React from 'react';
import { useState } from 'react';

export function LikeButton () {
	const [ counter, setCounter] = useState(0);
	const [ counter2, setCounter2] = useState(0);
	const add = () => setCounter(prev => prev += 1);
	const plus = () => setCounter2(prev => prev += 1);
  
  return ( <div className="div">
	
	<h1> You clicked { counter } times </h1>
	<button className="buttons" onClick={add}>{ counter }Likes</button>
	<button className="buttons" onClick={plus}>{ counter2 }Likes</button>

	</div>

	  )
}
