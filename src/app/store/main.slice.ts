import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../interfaces/index.interface'
import { initialState } from '../const'

const mainSlice = createSlice({
	name: 'mainSlice',
	initialState: initialState,
	reducers: {
		setActiveLanguage: (
			state,
			action: PayloadAction<IInitialState['activeLanguage']>
		) => {
			state.activeLanguage = action.payload
		},
		setActiveSide: (
			state,
			action: PayloadAction<IInitialState['activeSide']>
		) => {
			state.activeSide = action.payload
		},
		setActiveCategory: (
			state,
			action: PayloadAction<IInitialState['activeCategory']>
		) => {
			state.activeCategory = action.payload
		},
		setIsStart: (state, action: PayloadAction<IInitialState['isStart']>) => {
			state.isStart = action.payload
		},
		setInputValue: (
			state,
			action: PayloadAction<IInitialState['inputValue']>
		) => {
			state.inputValue = action.payload
		},
		setIsMistake: (
			state,
			action: PayloadAction<IInitialState['isMistake']>
		) => {
			state.isMistake = action.payload
		},
		setTotalWords: (
			state,
			action: PayloadAction<IInitialState['totalWords']>
		) => {
			state.totalWords = action.payload
		},
		setValidateWords: (
			state,
			action: PayloadAction<IInitialState['validateWords']>
		) => {
			state.validateWords = action.payload
		},
		setPrevData: (state, action: PayloadAction<IInitialState['prevData']>) => {
			state.prevData = action.payload
		},
		reset: state => {
			state.totalWords = initialState.totalWords
			state.validateWords = initialState.validateWords
			state.inputValue = initialState.inputValue
			state.isMistake = initialState.isMistake
			state.prevData = initialState.prevData
		}
	}
})

export const {
	setActiveLanguage,
	setActiveSide,
	setActiveCategory,
	setIsStart,
	setInputValue,
	setIsMistake,
	setTotalWords,
	setValidateWords,
	setPrevData,
	reset
} = mainSlice.actions
export const mainReducer = mainSlice.reducer
