import React , { useState }from 'react';
import {FaStar} from "react-icons/fa";

const StarRating = () =>{

	const [rating,setRating]= useState(null);
	return(
		<div>
			<br />
			{[...Array(5)].map((star,i) =>{
				const ratingValue=i+1;
				return (
					<label>
						<input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
						<FaStar className="star" color={ratingValue<=rating? "rgb(0,145,186,0.8)":"#e4e5e9"}size={50}/>
					</label>
				)
			})}
			
		</div>
	)
}

export default StarRating;