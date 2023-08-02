// export const Logo = (props) => {
// 	if (props.size == 'S') return <h4>React 05</h4>;
// 	else if (props.size == 'M') return <h3>React 05</h3>;
// 	else if (props.size == 'L') return <h2>React 05</h2>;

// 	return <h5>React 05</h5>;
// };

import { Component } from 'react';
import PropTypes from 'prop-types';

export class Logo extends Component {
	render() {
		const { size } = this.props;

		if (size == 'S') return <h4>React 05</h4>;
		else if (size == 'M') return <h3>React 05</h3>;
		else if (size == 'L') return <h2>React 05</h2>;

		return <h5>React 05</h5>;
	}
}

Logo.propTypes = {
	size: PropTypes.string,
};
