import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Appointment } from './pages/Appointment';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Navbar } from './components/layout/Navbar';

function App() {
	return (
		<div className="app">
			<Navbar color="#19A7CE" logoSize="L">
				<li>
					<Link className="link" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="link" to="/services">
						Services
					</Link>
				</li>
				<li>
					<Link className="link" to="/appointment">
						Book now
					</Link>
				</li>
				<li>
					<Link className="link" to="/contact">
						Contact
					</Link>
				</li>
			</Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/appointment" element={<Appointment />} />
			</Routes>
		</div>
	);
}

export default App;
