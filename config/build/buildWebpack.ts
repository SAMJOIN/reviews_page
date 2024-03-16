import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildePlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "../types/types";

export function buildWebpack(options: BuildOptions): Configuration {
	const isDev = options.mode === "development";

	return {
		mode: options.mode ?? "development",
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: "[name].[contenthash].js",
			clean: true,
		},
		plugins: buildePlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev ? "inline-source-map" : false,
		devServer: buildDevServer(options),
	};
}
