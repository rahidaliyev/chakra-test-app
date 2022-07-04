import React from 'react'
import { Switch,FormControl,FormLabel } from '@chakra-ui/react'

export default function DarkMode() {
  return (
    <div>
<FormControl display='flex' alignItems='center'>
  <FormLabel size='lg' htmlFor='email-alerts' mb='0'>
    Enable email alerts?
  </FormLabel>
  <Switch id='email-alerts' />
</FormControl>
    </div>
  )
}
