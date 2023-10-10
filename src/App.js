import Header from './components/Header';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	function deleteFeedback(id) {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedbackData.filter((f) => id !== f.id));
			console.log(`Deleted feedback id: ${id}`);
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}
