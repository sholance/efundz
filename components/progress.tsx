// import React from "react";


// export type progressPercentage {
//     percent: number;
// };
//  const FundProgress = ((percent: progressPercentage) => {

//     return (<>
//         <div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
//             <div
//                 id="progress-bar"
//                 style={{ width: `${percent}%` }}
//                 className={`h-full ${Number(percent) < 99 ? 'bg-green-600' : 'bg-grey-600'
//                     }`}>
//             </div>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full"
//                 style={{ width: `45%` }}>
//             </div>
//         </div>
//     </>
//     );
// };

// export default FundProgress;

// ProgressBar.tsx

export type ProgressBarProps = {
    progress: number;
    progressText?: string;
};

const FundProgress = ({ progress, progressText = "" }: ProgressBarProps) => {
    // Make sure our value stays between 0 and 100.
    const _progress = Math.min(Math.max(0, progress), 100);
    return (
        <div className="flex flex-col items-center justify-center py-1">
            <div className="w-full border-2 border-indigo-700 h-6 rounded-md">
                <div
                    className={`h-full transition-all duration-500 ${_progress < 99 ? 'bg-indigo-300' : 'bg-indigo-800'}`}
                    style={{ width: `${_progress}%` }}
                ></div>
            </div>
            <span>{progressText}</span>
        </div>
    );
};

export default FundProgress;