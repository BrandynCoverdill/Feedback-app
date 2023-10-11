import Card from './shared/Card';
import {useState} from 'react';
import Button from './shared/Button';

export default function FeedbackForm() {
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				{/* @todo - rating select component */}
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={handleChange}
						value={text}
					/>
					<Button version='secondary' type='submit'>
						Send
					</Button>
				</div>
			</form>
		</Card>
	);
}
