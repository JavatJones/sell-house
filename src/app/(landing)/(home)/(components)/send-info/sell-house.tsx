"use client"

import React from 'react';


import {
  Command,

  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,

} from "@/components/ui/command"


const SellHouse = () => {

  return (
    <div>




      {/* Auto commplete */}
      <Command>
        <CommandInput placeholder="Type your house location..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" >

            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>

          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>

    </div>
  );
};

export default SellHouse

