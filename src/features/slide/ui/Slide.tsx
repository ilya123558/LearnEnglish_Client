import { useEffect, useState } from 'react'
import { joinClasses } from '@/shared/lib/joinClasses'
import { SlideActiveSide } from '@/features/slide-active-side'
import { SlideInactiveSide } from '@/features/slide-inactive-side'
import styles from '../style/index.module.scss'
import {
	setActiveCategory,
	setActiveSide,
	setIsStart,
	useAppDispatch,
	useAppSelector
} from '@/app/store'

interface IProps {
	isActive: boolean
	isNext: boolean
	isPrev: boolean
	isVisible: boolean
	category: string
}

export const Slide: React.FC<IProps> = ({
	isActive,
	isPrev,
	isNext,
	category
}) => {
	const dispatch = useAppDispatch()
	const { activeSide, isStart } = useAppSelector(state => state.main)

	const [isSpread, setIsSpread] = useState(true)
	const duration = 700

	useEffect(() => {
		if (isStart) {
			setIsSpread(false)

			setTimeout(() => {
				dispatch(setActiveSide('back'))
			}, duration)
		}
	}, [isStart])

	useEffect(() => {
		if (isActive) {
			dispatch(setActiveSide('front'))
			dispatch(setActiveCategory(category))
			dispatch(setIsStart(false))
			setIsSpread(true)
		}
	}, [isActive])

	return (
		<div
			className={joinClasses(styles.container, [
				[
					isActive,
					isSpread ? styles.container__active : styles.container__inactive,
					''
				],
				[isPrev, styles.container__prev, ''],
				[isNext, styles.container__next, '']
			])}
		>
			<div
				className={joinClasses(styles.inner, [
					[activeSide === 'back' && isActive, styles.inner__active, '']
				])}
			>
				<SlideActiveSide isActive={isActive} />
				<SlideInactiveSide
					isActive={isActive}
					isSpread={isSpread}
					category={category}
				/>
			</div>
		</div>
	)
}
