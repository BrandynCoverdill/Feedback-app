import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <h2>No feedback was given yet.</h2>;
	} else {
		return (
			<div className='feedback-list'>
				{feedback.map((f) => (
					<FeedbackItem key={f.id} feedback={f} />
				))}
			</div>
		);
	}
}
