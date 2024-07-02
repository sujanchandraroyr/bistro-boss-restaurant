
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-6">
            <h3 className="text-yellow-700 mb-2">--- {heading} ---</h3>
            <h2 className="uppercase text-4xl font-semibold border-y-4 w-4/12 mx-auto py-2">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;