import React from "react";
import { connect } from "react-redux";
import Review from "./../Review/Review";
import { Client, Clients } from "../../Redux/reducer";
import Paginator from "../Paginator/Paginator";

interface Props {
	reviews: Client;
}

interface State {
	currentPage: number;
	reviewCount: number;
}

class MainPage extends React.Component<Props, State> {
	state = {
		currentPage: 1,
		reviewCount: Object.keys(this.props.reviews).length,
	};

	setCurrentPage = (page: number) => {
		this.setState({
			currentPage: page,
		});
	};

	render() {
		return (
			<div>
				{Object.keys(this.props.reviews)
					.slice(
						(this.state.currentPage - 1) * 10,
						this.state.currentPage * 10
					)
					.map((clientId: string) => (
						<Review
							key={clientId}
							name={this.props.reviews[clientId].name}
							review={this.props.reviews[clientId].review}
							date={this.props.reviews[clientId].date}
						/>
					))}
				<Paginator
					setCurrentPage={this.setCurrentPage}
					reviewCount={this.state.reviewCount}
					currentPage={this.state.currentPage}
				/>
			</div>
		);
	}
}

type StateType = {
	reviews: Clients;
	currentLangReviews: Client;
};

const mapStateToProps = (state: StateType) => {
	return {
		reviews: state.currentLangReviews,
	};
};

export default connect(mapStateToProps)(MainPage);
