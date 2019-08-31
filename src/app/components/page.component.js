import React from 'react';

function Page({ children }) {
    return (
        <div className="bg-gray-200 absolute w-full h-full">
            { children }
        </div>
    )
}  

export default Page;