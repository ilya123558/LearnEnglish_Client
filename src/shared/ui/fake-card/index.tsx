import styles from './index.module.scss'

interface IProps {
	validateWords: number
	totalWords: number
	word: string
	language: string
	translateWord: string
}

export const FakeCard: React.FC<IProps> = ({
	language,
	validateWords,
	totalWords,
	word,
	translateWord,
}) => {
	return (
		<div className={styles.fake_card}>
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
					<p className={styles.word}>{word}</p>
					<h3>into {language === 'en' ? 'Russian' : 'English'}</h3>
				</div>
				<input
					value={translateWord}
					onChange={() => {}}
					className={styles.input}
				/>
				<button className={styles.button}>answer</button>
			</form>
		</div>
	)
}
