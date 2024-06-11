import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import "../style/Header.scss";
const Header = () => {
	return (
		<>
			<div className="header-container">
				<div className="header-content">
					<Link to="/">
						<img className="header-img" src={Logo}></img>
					</Link>
					<p className="header-sign-in">Sign In</p>
				</div>
			</div>

		</>

	)
}
export default Header;
