import futeredimg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Fetured = () => {
    return (
        <div className="min-h-[60vh] border mb-24 bg-[url('/featured.jpg')] bg-cover relative">
            <div className='h-full w-full border-orange-600 absolute bg-black bg-opacity-50 text-white py-10 px-20 '>
                <SectionTitle
                heading={'Check it out'}
                subHeading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <img src={futeredimg} alt="fetured" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-lg font-semibold'>March 20, 2024</h2>
                        <h3 className='text-xl font-semibold'>Where can i get some?</h3>
                        <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse amet commodi, incidunt quia autem quibusdam et natus voluptatum cum exercitationem sit fugit nemo labore minus nihil. Ut, iste voluptas? Quasi beatae, quam ea repudiandae tempora nisi expedita obcaecati in, iste placeat culpa, dolorum recusandae? Inventore dolor maiores earum dolorum architecto!</p>
                    
                    <button className='btn btn-outline text-white border-none  border-orange-700'>Buy Now</button>
                   
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Fetured;