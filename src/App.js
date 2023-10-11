import Header from './components/Header';
import {useState} from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	function deleteFeedback(id) {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((f) => id !== f.id));
			console.log(`Deleted feedback id: ${id}`);
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}
