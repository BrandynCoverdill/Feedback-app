import PropTypes from 'prop-types';

import Card from './shared/Card';

export default function FeedbackItem({ feedback }) {
	return (
		<Card>
			<div className='num-display'>{feedback.rating}</div>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};
