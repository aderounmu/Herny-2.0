import React from 'react'
import MultipleTab from '../Components/General/MultipleTab'
import PageHeading from '../Components/General/PageHeading'
import Card from '../Components/General/Card'
import {PersonPlus , ThreeDotsVertical} from "react-bootstrap-icons"

export const Roster = () => {
  return (
    <div>
        <PageHeading>Roster</PageHeading>
        <MultipleTab
        tabs={['Artist' , 'Users']}
        />
        <div className='mt-10 grid grid-cols-6 gap-y-3'>
            <Card className={'w-40 h-48'}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <PersonPlus className='w-8 h-8 mb-2 text-teal-500'/>
                    <span className='text-center text-base text-teal-500'>New Tracks</span>
                </div>
            </Card>
            {
                [1,2,3,4,5].map(()=> <Card className={'w-40 h-48'}>
                <div className='flex flex-col justify-between h-full px-5 py-6'>
                    <div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold text-sm'>P-Square</p>
                            </div>
                            <ThreeDotsVertical className='text-gray-300'/>
                        </div>
                        <p className='text-xs mt-1 text-gray-300'>5 tracks 5 Releases</p>
                    </div>
                    
                    <div className='flex'>
                        <img class="w-6 h-6 rounded-full -mx-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <img class="w-6 h-6 rounded-full -mx-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <img class="w-6 h-6 rounded-full -mx-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <img class="w-6 h-6 rounded-full -mx-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <span class="w-6 h-6 pt-1 text-xs text-center rounded-full -mx-1.5 bg-slate-200 text-black">
                            6
                        </span>
                    </div>
                </div>
            </Card>)
            }
        </div>
    </div>
  )
}
