import React from 'react'
import MultipleTab from '../Components/General/MultipleTab'
import PageHeading from '../Components/General/PageHeading'
import Card from '../Components/General/Card'
import {PersonPlus , ThreeDotsVertical} from "react-bootstrap-icons"
const Catalogue = () => {
  return (
    <div>
         <PageHeading>Catalogue</PageHeading>
        <MultipleTab
        tabs={['Tracks' , 'Releases']}
        />
        {/* grid-flow-col auto-cols-fr */}
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
                            <p className='font-bold text-sm'>Kingdom Come</p>
                            </div>
                            <ThreeDotsVertical className='text-gray-300'/>
                        </div>
                        <p className='text-xs text-gray-300'>ISN23ER567899</p>
                    </div>

                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                </div>
            </Card>)
            }
        </div>
    </div>
  )
}

export default Catalogue