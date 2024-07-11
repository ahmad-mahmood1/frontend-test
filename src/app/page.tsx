'use client'

import StickDeals from "@/components/common/stick-deals/stick-deals";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group/radio-group";

export default function Home() {
  const [value, setValue] = useState<string>('1')

  return (
    <main className="min-h-screen p-24">
      Basic Implementation
      <RadioGroup value={value} onValueChange={setValue} className="mb-12">
        <div className="flex gap-2 items-center flex-wrap">
          <RadioGroupItem value="1" className="flex items-center gap-1">
            <p>Alpha</p>
          </RadioGroupItem>
          <RadioGroupItem value="2" className="flex items-center gap-1" disabled>
            <p>Bravo</p>
          </RadioGroupItem>
          <RadioGroupItem value="3" className="flex items-center gap-1">
            <p>Charlie</p>
          </RadioGroupItem>
        </div>

      </RadioGroup>


      <StickDeals />
    </main>
  );
}
