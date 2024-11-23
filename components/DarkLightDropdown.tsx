import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MonitorIcon, MoonIcon, MoonStarIcon, SunIcon } from 'lucide-react'

const DarkLightDropdown = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger><MoonStarIcon /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Dark Mode</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem><MoonIcon />Dark Mode</DropdownMenuItem>
      <DropdownMenuItem><SunIcon />Light Mode</DropdownMenuItem>
      <DropdownMenuItem><MonitorIcon /> System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default DarkLightDropdown