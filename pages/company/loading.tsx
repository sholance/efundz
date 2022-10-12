import React from 'react';

export default function LoadingList() {
    return (
        <>
            <div className="animate-pulse flex space-x-4" >
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        </div>
                        <div className="space-y-6 py-6 flex">
                            <button className="h-3 w-10 bg-slate-200 rounded">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
