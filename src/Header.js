import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
	return (
		<div className="header">
			<div className="header__up">
				<div className="header__upLeft">
					<div className="header__links">
						<Link to="login">
							<span>
								Hi! <span className="header__link">Sign in</span>
							</span>
						</Link>
						<Link to="register">
							or <span className="header__link">register</span>
						</Link>
						<Link to="dailyDeals">
							<span>Daily Deals</span>
						</Link>
						<Link to="helpContact">
							<span>Help & Contact</span>
						</Link>
					</div>
				</div>
				<div className="header__upRight">
					<div className="header__nav">
						<div className="header__links">
							<Link to="shipTo">
								<span>Ship to</span>
							</Link>
							<Link to="sell">
								<span>Sell</span>
							</Link>
							{/* set select options */}
							<Link to="watchList">
								<span>WatchList</span>
							</Link>
							{/* set select options */}
							<Link to="/">
								<span>My Ebay</span>
							</Link>
							{/* DODAJ IKONICU ZA KORPU I ZVONCE */}
							<Link className="header__options" to="/">
								<NotificationsNoneIcon style={{ fontSize: 27 }} />
							</Link>
							<Link className="header__options" to="helpContact">
								<ShoppingCartOutlinedIcon style={{ fontSize: 27 }} />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="header__down">
				<Link to="/">
					<img
						className="header__logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt=""
					/>
				</Link>
				<Link to="/">Shop by Category</Link>
				<div className="header__search header__option">
					<input className="header__input header__option" type="text" />
					{/* look for beter select options */}
					<select class="header__categories">
						<option>All Categories</option>
					</select>
				</div>
				<button className="header__searchBtn">Search</button>
				<Link to="advanced">
					<span>Advanced</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
