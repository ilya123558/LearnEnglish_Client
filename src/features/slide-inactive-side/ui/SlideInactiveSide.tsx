import { BoxSlice } from '@/shared/ui/box-slice'
import { TranslatorCustomization } from '@/shared/ui/translator-customization'
import styles from '../style/index.module.scss'
import { useAppSelector } from '@/app/store'

interface IProps {
	isActive: boolean
	isSpread: boolean
	category: string
}

export const SlideInactiveSide: React.FC<IProps> = ({
	isActive,
	isSpread,
	category
}) => {
	const countSlices = useAppSelector(state => state.main.countSlices)

	return (
		<BoxSlice isActive={isActive && isSpread} countSlices={countSlices}>
			<div className={styles.slice}>
				<div className={styles.inner}>
					{isActive ? <TranslatorCustomization /> : category}
				</div>
				{isActive && isSpread && (
					<div className={styles.first_slice}>
						<div className={styles.inner}>{category}</div>
					</div>
				)}
			</div>
		</BoxSlice>
	)
}
