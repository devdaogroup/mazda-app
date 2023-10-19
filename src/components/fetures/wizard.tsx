import React from 'react';


type TProps = { step: number };

function Wizard({step = 0}: TProps) {
    return (
        <div className="w-full py-6">
            <div className="flex">
                <div className="w-1/3">
                    <div className="relative mb-2">
                        <div
                            className="w-10 h-10 mx-auto bg-purple-500 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-white w-full">
           {/* put icon svg here */}
          </span>
                        </div>
                    </div>

                    <div className="text-xs text-center md:text-base">Basic Information</div>
                </div>

                <div className="w-1/3">
                    <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center"
                             style={{
                                 width: 'calc(100% - 2.5rem - 1rem)',
                                 top: '50%',
                                 transform: "translate(-50%, -50%)"
                             }}>
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="w-0 bg-purple-300 py-1 rounded" style={{width: '100%'}}></div>
                            </div>
                        </div>

                        <div
                            className="w-10 h-10 mx-auto bg-purple-500 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-white w-full">
                {/* put icon svg here */}
          </span>
                        </div>
                    </div>

                    <div className="text-xs text-center md:text-base">Pricing</div>
                </div>

                <div className="w-1/3">
                    <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center"
                             style={{
                                 width: 'calc(100% - 2.5rem - 1rem)',
                                 top: '50%',
                                 transform: "translate(-50%, -50%)"
                             }}
                        >
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="w-0 bg-purple-300 py-1 rounded" style={{width: '33%'}}></div>
                            </div>
                        </div>

                        <div
                            className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-gray-600 w-full">
            {/* put icon svg here */}
          </span>
                        </div>
                    </div>

                    <div className="text-xs text-center md:text-base">Gallery</div>
                </div>

            </div>
        </div>
    );
}

export default Wizard;