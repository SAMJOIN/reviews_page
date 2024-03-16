import React from "react";
import styles from './Review.module.css'

interface Props {
	name: string;
	review: string;
	date: string;
}

interface State {}

class Review extends React.Component<Props, State> {
	name = this.props.name.split(" ");

	render() {
		return (
			<div className={styles.container}>
				<p>
					{this.name[0] +
						" " +
						(this.name.length > 1 ? this.name[1].split("")[0] : "")}
				</p>
				<p>{this.props.review}</p>
				<p>{this.props.date}</p>
			</div>
		);
	}
}

export default Review;
