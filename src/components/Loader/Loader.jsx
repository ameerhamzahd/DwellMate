import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <span className="text-primary loading loading-spinner loading-xl"></span>
            </div>
        </div>
    );
};

export default Loader;