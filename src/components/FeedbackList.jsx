import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

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

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};
