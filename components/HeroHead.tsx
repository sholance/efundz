

export type HeroHeadProps = {
    heroText?: string;
};

const HeroHead = ({ heroText = "" }: HeroHeadProps) => {
    // Make sure our value stays between 0 and 100.
    return (
        <div className="bg-blue-50 py-5 w-full block">
            <div className="flex justify-center">
                <h4 className="text-3xl font-bold p-3"> {heroText} </h4>
            </div>
        </div>
    );
};

export default HeroHead;