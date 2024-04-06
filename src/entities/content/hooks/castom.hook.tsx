import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	reset,
	setInputValue,
	setIsMistake,
	setPrevData,
	setTotalWords,
	setValidateWords,
	useAppSelector
} from '@/app/store'
import {
	useCheckWordMutation,
	useLazyGetWordByCategoryQuery
} from '../api/content.api'

interface IProps {
	isActive: boolean
	ref: React.RefObject<HTMLInputElement>
}

export const useCastomHook = ({ isActive, ref }: IProps) => {
	const dispatch = useDispatch()
	const [getWordByCategory, { data }] = useLazyGetWordByCategoryQuery()
	const [checkWord, { data: checkWordData, isSuccess }] = useCheckWordMutation()

	const {
		activeCategory,
		activeLanguage,
		activeSide,
		inputValue,
		isMistake,
		prevData,
		totalWords,
		validateWords
	} = useAppSelector(state => state.main)
	const reverseLanguage = activeLanguage === 'ru' ? 'en' : 'ru'
	const isShowFakeCard = isSuccess && checkWordData?.isValidate
	const activeWord = data?.[activeLanguage][0] || ''
	const translateWord = data?.[reverseLanguage][0] || ''

	const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue(event.target.value))
	}

	const onClickHandle = () => {
		if (!data) return

		dispatch(
			setPrevData({
				totalWords,
				validateWords,
				word: activeWord,
				translateWord: inputValue
			})
		)

		checkWord({
			category: activeCategory,
			language: reverseLanguage,
			translatedWord: inputValue,
			word: activeWord
		})

		if (!isMistake) {
			setTimeout(() => {
				dispatch(setTotalWords(totalWords + 1))
			})
		}

		dispatch(setInputValue(''))
	}

	useEffect(() => {
		if (isActive && activeSide === 'back') {
			getWordByCategory(activeCategory)
			dispatch(reset())
		}
	}, [activeSide])

	useEffect(() => {
		if (!checkWordData) return

		if (isSuccess && checkWordData.isValidate) {
			getWordByCategory(activeCategory)

			if (!isMistake) {
				dispatch(setValidateWords(validateWords + 1))
			}

			dispatch(setIsMistake(false))
			setTimeout(() => ref.current?.focus(), 300)
		}

		if (data && isSuccess && !checkWordData.isValidate) {
			dispatch(setIsMistake(true))
			dispatch(setInputValue(translateWord))
		}
	}, [isSuccess])

	return {
		activeWord,
		isShowFakeCard,
		activeCategory,
		activeLanguage,
		reverseLanguage,
		activeSide,
		inputValue,
		isMistake,
		prevData,
		totalWords,
		validateWords,
		onChangeHandle,
		onClickHandle
	}
}
