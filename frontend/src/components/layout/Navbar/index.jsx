import './style.css';
import PropTypes from 'prop-types';
import { Logo } from './Logo';

export const Navbar = (props) => {
	// const { color, textColor } = props;

	return (
		<div className="navbar-container" style={{ backgroundColor: props.color }}>
			<Logo size={props.logoSize} />
			<ul className="ul-navbar">{props.children}</ul>
		</div>
	);
};

Navbar.propTypes = {
	color: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	logoSize: PropTypes.string,
	children: PropTypes.any,
};
