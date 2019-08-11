import React from 'react';
import Plus from './../icons/plus.svg';
import Left from './../icons/left.svg';

function NavigationHeader(props) {

    return (
        <div className="w-full max-w-xl m-auto px-4 pb-2 bg-transparent">
            <div className="h-12 mb-4 pt-6 text-blue-500 flex justify-between items-center">
                <div>
                <div onClick={props.onBackButtonClicked} className={`flex justify-center cursor-pointer ${props.backButton ? '' : 'hidden'}`}>
                    <div className="w-3 mr-1 flex justify-center">
                        <img className="w-full h-auto" src={Left} alt="Left"></img>
                    </div>
                    <span className="text-lg font-medium">{props.backButton}</span>
                </div>
                </div>

                <div className="cursor-pointer">
                    <img className="w-full h-auto" src={Plus} alt="Plus"></img>
                </div>
            </div>
            <h1 className="text-4xl font-bold leading-tight">{props.title}</h1>
        </div>
    );
}

export default NavigationHeader;