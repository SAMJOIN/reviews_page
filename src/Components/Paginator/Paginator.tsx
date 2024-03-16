import React from "react";
import styles from "./Paginator.module.css";

interface Props {
	setCurrentPage: (page: number) => void;
	reviewCount: number;
	currentPage: number;
}

interface State {}

class Paginator extends React.Component<Props, State> {
	pageCount = Math.ceil(this.props.reviewCount / 10);
	currentPage = this.props.currentPage;

	setCurrentPage(page: number) {
		this.props.setCurrentPage(page);
		this.currentPage = page;
	}

	render() {
		return (
			<div className={styles.container}>
				{Array.from({ length: this.pageCount }, (v, k) => k + 1).map(
					(el) => (
						<button
							className={
								this.currentPage == el
									? styles.btnActive
									: styles.btn
							}
							onClick={() => this.setCurrentPage(el)}
						>
							{el}
						</button>
					)
				)}
			</div>
		);
	}
}

export default Paginator;
