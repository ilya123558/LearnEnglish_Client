import { useRef } from 'react'
import { FakeCard } from '@/shared/ui/fake-card'
import { joinClasses } from '@/shared/lib/joinClasses'
import { useCastomHook } from '../hooks/castom.hook'
import styles from '../style/index.module.scss'

interface IProps {
	isActive: boolean
}

export const Content: React.FC<IProps> = ({ isActive }) => {
	const ref = useRef<HTMLInputElement>(null)
	const {
		activeWord,
		isShowFakeCard,
		activeLanguage,
		reverseLanguage,
		inputValue,
		isMistake,
		prevData,
		totalWords,
		validateWords,
		onChangeHandle,
		onClickHandle
	} = useCastomHook({ isActive, ref })

	return (
		<div className={styles.container}>
			{activeWord && (
				<>
					<form
						className={styles.form}
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<div className={styles.counter}>
							{validateWords} / {totalWords}
						</div>
						<div className={styles.title}>
							<h3>Translate the word</h3>
							<p className={styles.word}>{activeWord}</p>
							<h3>into {reverseLanguage === 'en' ? 'English' : 'Russian'}</h3>
						</div>
						<input
							value={inputValue}
							disabled={isMistake}
							onChange={onChangeHandle}
							ref={ref}
							type='text'
							className={joinClasses(styles.input, [
								[isMistake, styles.input__mistake, '']
							])}
						/>
						<button onClick={onClickHandle} className={styles.button}>
							{isMistake ? 'next' : 'answer'}
						</button>
					</form>
					{isShowFakeCard && (
						<FakeCard language={activeLanguage} {...prevData} />
					)}
				</>
			)}
		</div>
	)
}
