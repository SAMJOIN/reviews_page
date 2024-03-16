import React from "react";
import styles from "./Watch.module.css";

interface WatchProps {
	time: Date;
}
interface WatchState {
	time: Date;
}

class Watch extends React.Component<WatchProps, WatchState> {
	private interval: NodeJS.Timeout;
	state = { time: new Date() };

	componentDidMount() {
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		return () => clearInterval(this.interval);
	}
	tick() {
		this.setState({
			time: new Date(),
		});
	}

	render() {
		return (
			<div className={styles.watch}>
				{this.state.time.toLocaleTimeString('ru-RU')}
			</div>
		);
	}
}

export default Watch;
