import {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';
import Card from './shared/Card';

export default function FeedbackItem({feedback, handleDelete}) {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	});

	return (
		<div ref={ref}>
			<motion.div
				key={feedback.id}
				variants={{hidden: {opacity: 0, x: 75}, visible: {opacity: 1, x: 0}}}
				initial='hidden'
				animate={mainControls}
				transition={{duration: 0.75, delay: 0.25}}
			>
				<Card>
					<div className='num-display'>{feedback.rating}</div>
					<button className='close' onClick={() => handleDelete(feedback.id)}>
						<FaTimes color='purple' />
					</button>
					<div className='text-display'>{feedback.text}</div>
					<div className='date-display'>{feedback.date}</div>
				</Card>
			</motion.div>
		</div>
	);
}

FeedbackItem.propTypes = {
	feedback: PropTypes.object.isRequired,
};
