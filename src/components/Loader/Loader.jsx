import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-white via-teal-50 to-emerald-100'>
                <span className="loading loading-spinner loading-xl text-teal-600"></span>
            </div>
        </div>
    );
};

export default Loader;