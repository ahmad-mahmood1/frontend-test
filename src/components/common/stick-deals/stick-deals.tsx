import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group";
import { cn } from '@/lib/utils';

const STICK_DEALS = [
    {
        title: '3 Sticks (-32%)',
        rate: '$64.00/each',
        bestDeal: true,
        value: '1',
    },
    {
        title: '2 Sticks (-22%)',
        rate: '$71.00/each',
        value: '2',
    },
    {
        title: '1 Stick (-15%)',
        rate: '$75.00',
        value: '3',
    }
]

function StickDeals() {
    const [value, setValue] = useState(STICK_DEALS[0].value)

    return (
        <RadioGroup value={value} onValueChange={setValue}>
            Custom Implementation
            <div className="flex flex-wrap items-start gap-2 mt-6">
                {STICK_DEALS.map(deal =>
                    <RadioGroupItem key={deal.value} value={deal.value} className={cn("flex gap-2 items-start border-2 border-mute px-5 py-4 bg-mute rounded-lg min-w-56", deal.bestDeal && 'border-primary')}>
                        <div className={cn('text-left relative')}>
                            {deal.bestDeal && <div className='absolute bottom-[50px] mx-auto bg-primary py-1 px-3 text-white capitalize rounded-lg'>
                                best deal
                            </div>}
                            <div className='font-bold text-lg'>
                                {deal.title}
                            </div>
                            <div className='font-light text-sm'>
                                {deal.rate}
                            </div>
                        </div>
                    </RadioGroupItem>
                )}
            </div>
        </RadioGroup>
    )
}

export default StickDeals
