import React from "react";
import styles from "./App.module.css";
import Header from "./Header/Header";
import MainPage from "./Main/MainPage";
interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
	render() {
		return (
			<div className={styles.content}>
				<Header />
				<MainPage />
			</div>
		);
	}
}
