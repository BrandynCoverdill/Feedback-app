import React from 'react'; // React Library
import ReactDOM from 'react-dom/client'; // ReactDOM Library
import './index.css'; // Imports global css file
import App from './App'; // Imports App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
); // Passing in our main app component and displaying it in html.
