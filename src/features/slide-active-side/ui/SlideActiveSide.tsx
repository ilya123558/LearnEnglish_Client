import { BoxSlice } from '@/shared/ui/box-slice'
import { Content } from '@/entities/content'
import styles from '../style/index.module.scss'
import { useAppSelector } from '@/app/store'

interface IProps {
	isActive: boolean
}

export const SlideActiveSide: React.FC<IProps> = ({ isActive }) => {
	const countSlices = useAppSelector(state => state.main.countSlices)

	return (
		<div className={styles.active_side}>
			<BoxSlice isActive={false} countSlices={countSlices}>
				<Content isActive={isActive} />
			</BoxSlice>
		</div>
	)
}
