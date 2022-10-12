
export type Hero = {
    heroText?: string;
    heroSubText?: string;

};

const Hero = ({ heroText = "", heroSubText = "" }: Hero) => {
    // Make sure our value stays between 0 and 100.
    return (
        <div className="bg-pink-500 py-5 w-full block">
            <div className="flex">
                <div className="max-w-xl p-8">
                    <p className="text-3xl font-medium p-4 leading-normal text-gray-100"> {heroText} </p>
                    <div className="py-5 ">
                        <p className="text-xl font-medium p-3 bg-black text-gray-100 rounded-3xl border-4 border-indigo-200"> {heroSubText} </p>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Hero;