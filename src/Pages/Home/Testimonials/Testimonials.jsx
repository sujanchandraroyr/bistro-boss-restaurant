import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-14'>
            <SectionTitle
                heading={'What Our Clients Say'}
                subHeading={'TESTIMONIALS'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='px-12 text-center space-y-5'>
                                <div className='flex justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                </div>
                                <p className='text-3xl font-bold'>||</p>
                                <p>{review.details}</p>
                                <p className='text-2xl text-orange-400'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;