import {v4 as uuidv4} from 'uuid';
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

	function addFeedback(newFeedback) {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	}

	function changeFilter(filter) {
		const filteredList = [...feedback];

		switch (filter) {
			case 'newest':
				filteredList.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
				setFeedback(filteredList);
				break;

			case 'oldest':
				filteredList.sort((a, b) => {
					return new Date(a.date) - new Date(b.date);
				});
				setFeedback(filteredList);
				break;

			case 'highest':
				filteredList.sort((a, b) => {
					return +b.rating - +a.rating;
				});
				setFeedback(filteredList);
				break;

			case 'lowest':
				filteredList.sort((a, b) => {
					return +a.rating - +b.rating;
				});
				setFeedback(filteredList);
				break;

			default:
				break;
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} handleFilterChange={changeFilter} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}
