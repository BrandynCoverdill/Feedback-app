export default function FeedbackItem({ feedback }) {
	return (
		<div className='card'>
			<div className='num-display'>{feedback.rating}</div>
			<div className='text-display'>{feedback.text}</div>
		</div>
	);
}
