import PropTypes from 'prop-types';

export default function FeedbackStats({feedback, handleFilterChange}) {
	// Calculate ratings average
	const avg = (
		feedback.reduce((acc, curr) => {
			return acc + curr.rating;
		}, 0) / feedback.length
	)
		.toFixed(1)
		.replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(avg) ? '0' : avg}</h4>
			{/* TODO: Add a filter option to filter reviews by rating */}
			<select
				name='filter'
				id='filter'
				onChange={(e) => handleFilterChange(e.target.value)}
			>
				<option value='newest'>Newest to Oldest</option>
				<option value='oldest'>Oldest to Newest</option>
				<option value='highest'>Highest to Lowest Rated</option>
				<option value='lowest'>Lowest to Highest Rated</option>
			</select>
		</div>
	);
}

FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
};
