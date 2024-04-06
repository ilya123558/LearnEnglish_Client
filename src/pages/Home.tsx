import { Slider } from '@/widgets/slider'
import '@/app/assets/styles/Home.scss'
import 'swiper/css/bundle'

export const Home = () => {
	return (
		<section className='w-screen h-screen flex items-center justify-center flex-col bg-[#4f4f4f]'>
			<Slider />
		</section>
	)
}
