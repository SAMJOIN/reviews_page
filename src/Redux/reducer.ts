import data from "./data.json";

const CHANGE_LANGUAGE = "CHANGE-LANGUAGE";

export type Client = {
	[key: string]: {
		name: string;
		review: string;
		date: string;
	};
};

export type Clients = {
	ru: Record<string, Client>;
	en: Record<string, Client>;
};

const initState = {
	reviews: data,
	currentLangReviews: data.ru,
};

interface ChangeLanguageActionType {
	type: string;
	language: string;
}

const Reducer = (state = initState, action: ChangeLanguageActionType) => {
	switch (action.type) {
		case CHANGE_LANGUAGE: {
			return {
				...state,
				currentLangReviews:
					action.language === "ru"
						? state.reviews.ru
						: state.reviews.en,
			};
		}
		default:
			return state;
	}
};

export const changeLanguage = (language: string) => {
	return {
		type: CHANGE_LANGUAGE,
		language,
	};
};

export default Reducer;
