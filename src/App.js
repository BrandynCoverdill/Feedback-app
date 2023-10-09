import Header from './components/Header';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}
