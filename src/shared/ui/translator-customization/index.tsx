import styles from './index.module.scss'
import { joinClasses } from '@/shared/lib/joinClasses'
import {
	setActiveLanguage,
	setIsStart,
	useAppDispatch,
	useAppSelector
} from '@/app/store'

export const TranslatorCustomization = () => {
	const languages: ['en', 'ru'] = ['en', 'ru']

	const dispatch = useAppDispatch()
	const activeLanguage = useAppSelector(state => state.main.activeLanguage)

	const setActiveLanguageHandle = (language: 'en' | 'ru') => {
		dispatch(setActiveLanguage(language))
	}

	const setActiveSideHandle = () => {
		dispatch(setIsStart(true))
	}

	return (
		<div className={styles.container}>
			<p className={styles.text}>Translate from</p>
			<div className={styles.button_container}>
				{languages.map(language => (
					<button
						key={language}
						onClick={() => setActiveLanguageHandle(language)}
						className={joinClasses(styles.button, [
							[language === activeLanguage, styles.button__active, '']
						])}
					>
						{language}
					</button>
				))}
			</div>
			<button onClick={setActiveSideHandle} className={styles.button__start}>
				start
			</button>
		</div>
	)
}
