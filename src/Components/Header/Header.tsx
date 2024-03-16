import React from "react";
import Watch from "../Watch/Watch";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { changeLanguage } from "../../Redux/reducer";


interface Props {
    changeLanguage: (value: string) => void
}
 
interface State {
    
}

class Header extends React.Component<Props, State> {
	state = { language: "ru" };

	changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
		this.setState({
			language: value,
		});
        this.props.changeLanguage(value);
	}

	render() {
		return (
			<div className={styles.container}>
				<img
					className={styles.img}
					src="https://eatfdnqxqwo.exactdn.com/wp-content/uploads/edd/2021/12/reviews-product-download-image.png"
				/>
				<select
					className={styles.selector}
					defaultValue={this.state.language}
					onChange={this.changeLanguage.bind(this)}
				>
					<option value="ru">Ru</option>
					<option value="en">En</option>
				</select>
				<Watch time={new Date()} />
			</div>
		);
	}
}

export default connect(null, {changeLanguage})(Header);
