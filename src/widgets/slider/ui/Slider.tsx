import { Slide } from '@/features/slide'
import { ButtonWithEffect } from '@/shared/ui/button-with-effect'
import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { useGetAllCategoriesWordsQuery } from '@/entities/content/api/content.api'

import 'swiper/css/bundle'

export const Slider = () => {
	const { data } = useGetAllCategoriesWordsQuery(null)

	const [swiper, setSwiper] = useState<SwiperClass | null>(null)

	const nextSlideHandle = () => {
		swiper?.slideNext()
	}

	const prevSlideHandle = () => {
		swiper?.slidePrev()
	}

	return (
		<div className='relative'>
			<Swiper
				onSwiper={swiper => setSwiper(swiper)}
				watchSlidesProgress
				slidesPerView={3}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={50}
				loop={true}
				className='h-[600px] w-[1000px] cursor-grab p-[0px_30px]'
				wrapperClass='items-center'
			>
				{data &&
					data.map(category => (
						<SwiperSlide key={category} className='h-[calc(70%)]'>
							{slideProps => <Slide {...slideProps} category={category} />}
						</SwiperSlide>
					))}
			</Swiper>

			<div className='absolute top-[35%] flex items-center justify-between w-full'>
				<ButtonWithEffect
					className={'relative left-[-150px] z-30'}
					onClick={prevSlideHandle}
				>
					click
				</ButtonWithEffect>
				<ButtonWithEffect
					className={'relative right-[-150px] z-30'}
					onClick={nextSlideHandle}
				>
					click
				</ButtonWithEffect>
			</div>
		</div>
	)
}
