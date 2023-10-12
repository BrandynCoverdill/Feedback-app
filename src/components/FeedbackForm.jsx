import Card from './shared/Card';
import {useState} from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

export default function FeedbackForm({handleAdd}) {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	const handleTextChange = (e) => {
		if (e.target.value === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (e.target.value !== '' && e.target.value.trim().length <= 10) {
			setMessage('Message must be at least 10 characters');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	function handleSumbit(e) {
		e.preventDefault();
		if (text.trim().length >= 10) {
			const newFeedback = {
				text,
				rating,
			};
			handleAdd(newFeedback);
			setText('');
			setBtnDisabled(true);
			setRating(10);
		}
	}

	return (
		<Card>
			{/* TODO: Add a thank you message after posting a review. Add a button that goes back to enter a new review. */}
			<form onSubmit={handleSumbit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button version='secondary' type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}
