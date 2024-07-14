import { Parallax } from "swiper/modules";

const Cover = ({ img, menutitle, subtitle }) => {

    return (
             <div
            className="hero min-h-[50vh]"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{menutitle}</h1>
                    <p className="mb-5">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
     
        
    );
};

export default Cover;