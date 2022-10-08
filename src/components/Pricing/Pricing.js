import React from 'react';
import PricingOption from '../PricingOption.js/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', Price: 0 , benefits:[
            'Lifetime free',
             'Unlimited deals',
             
        ]},
        { id: 2, name: 'Half-free', Price: 10, benefits:[
            'Lifetime free',
             'Unlimited deals',
             'Localized deals',
             
        ]},
        { id: 3, name: 'Regular', Price: 20, benefits:[
            'Lifetime free',
             'Unlimited deals',
             'Localized deals',
             'Free Api'
        ]},
        { id: 4, name: 'Premium', Price: 30 ,benefits:[
            'Lifetime free',
             'Unlimited deals',
             'Localized deals',
             'Fantastic deals',
             'crazy deals',
             'Free Api'
        ]},
        { id: 4, name: 'Luxury', Price: 40, benefits:[
            'Lifetime free',
             'Unlimited deals',
             'Localized deals',
             'Fantastic deals',
             'crazy deals',
             'Free every cli',
             'Free Dom',
             'Free Courses'
        ]},
    ]
    return (
        <div className='bg-indigo-100 p-4 mt-8  '>
            <h1 className='text-6xl font-bold '>Best Deals of the Town</h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quam sunt facere ratione pariatur quibusdam ipsa ullam dolore illo molestiae.</p>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    pricingOptions.map(pricingOption => <PricingOption
                        key={pricingOption.id}
                        pricingOption={pricingOption}

                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;