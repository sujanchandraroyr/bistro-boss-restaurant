import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ img, menutitle, subtitle }) => {
    

    return (
        
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
            className="hero min-h-[50vh]"
            >
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
    </Parallax>
       
        
     
    );
};

Cover.propTypes = {
    img: PropTypes.string,
    menutitle: PropTypes.string,
    subtitle: PropTypes.string
}

export default Cover;