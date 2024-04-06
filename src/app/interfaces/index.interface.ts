export interface IInitialState {
	activeLanguage: 'ru' | 'en'
	activeSide: string
	activeCategory: string
	isStart: boolean
	inputValue: string
	isMistake: boolean
	totalWords: number
	validateWords: number
	prevData: {
		totalWords: number
		validateWords: number
		word: string
		translateWord: string
	}
	countSlices: number
}
