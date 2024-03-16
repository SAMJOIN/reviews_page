import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "../types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
	// const babelLoader = {
	// 	test: /\.ts?/,
	// 	loader: "babel-loader",
	// 	options: {
	// 		presets: [
	// 			"@babel/preset-react",
	// 			"@babel/preset-env",
	// 			"@babel/preset-stage-2",
	// 		],
	// 	},
	// };

	const cssLoaderWithModules = {
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: "[path][name]__[local]",
			},
		},
	};

	const cssLoader = {
		test: /\.css$/i,
		use: [MiniCssExtractPlugin.loader, cssLoaderWithModules],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [cssLoader, tsLoader];
}
