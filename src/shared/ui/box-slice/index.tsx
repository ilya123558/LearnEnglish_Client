import { PropsWithChildren } from 'react'
import { joinClasses } from '@/shared/lib/joinClasses'
import styles from './index.module.scss'

interface IProps {
	isActive: boolean
	countSlices: number
	className?: string
}

export const BoxSlice: React.FC<PropsWithChildren<IProps>> = ({
	children,
	isActive,
	countSlices,
	className = '',
}) => {
	let result = children

	for (let i = 0; i < countSlices; i++) {
		result = (
			<div
				className={joinClasses(styles.slice, [
					[isActive, styles.active, ''],
					[isActive && Boolean(className), className, ''],
				])}
			>
				{result}
			</div>
		)
	}

	return result
}
