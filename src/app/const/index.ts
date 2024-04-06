import { IInitialState } from "../interfaces/index.interface";

export const initialState: IInitialState = {
	activeLanguage: 'en',
	activeSide: 'front',
	activeCategory: '',
	isStart: false,
	inputValue: '',
	isMistake: false,
	totalWords: 0,
	validateWords: 0,
	prevData: {
		totalWords: 0,
		validateWords: 0,
		word: '',
		translateWord: ''
	},
	countSlices: 8
}