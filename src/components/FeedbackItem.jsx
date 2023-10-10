import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

export default function FeedbackItem({ feedback, handleDelete }) {
	return (
		<Card>
			<div className='num-display'>{feedback.rating}</div>
			<button className='close' onClick={() => handleDelete(feedback.id)}>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	feedback: PropTypes.object.isRequired,
};
