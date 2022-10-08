import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, Price, benefits } = props.pricingOption;
    return (
        <div className='bg-white  mt-6 rounded-md relative pb-12'>
            <h2 className='bg-indigo-400 py-2 rounded text-2xl -bold' >{name}</h2>

            <p className='text-5xl'><span>{Price}</span>
                <span className='text-xl'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left mt-2'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}

                    ></Benefit>)
                }
            </div>

            
            <button className=
            
            
            'bg-green-600 flex justify-center w-full py-2 rounded  text-white hover:text-green-700 hover:bg-green-300 absolute bottom-0 '
            
            
            
            >Buy Now
                
                
                
                <ArrowRightIcon className='h-6 w-6 ml-2'></ArrowRightIcon></button>
        
        </div>


    );
};

export default PricingOption;