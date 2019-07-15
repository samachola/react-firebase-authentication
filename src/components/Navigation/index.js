import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../constants/routes';

const Navigation = () => (
	<div className="navbar">
		<ul className="navbar-nav">
			<li className="nav-item">
				<Link to={Routes.SIGN_IN}>Sign In</Link>
			</li>

			<li className="nav-item">
				<Link to={Routes.LANDING}>Landing</Link>
			</li>

			<li className="nav-item">
				<Link to={Routes.HOME}>Home</Link>
			</li>

			<li className="nav-item">
				<Link to={Routes.ACCOUNT}>Account</Link>
			</li>

			<li className="nav-item">
				<Link to={Routes.ADMIN}>Admin</Link>
			</li>
		</ul>
	</div>
);

export default Navigation;