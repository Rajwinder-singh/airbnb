import Image from "next/image";
import { 
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <img src="https://drive.google.com/uc?export=view&id=1BUnpRr2c4e-Sj7eru7E6_kebBUCvbNLE" 
                className='object-contain object-left h-full'
            />

        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input type='text' placeholder='Start your search' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        <div className='flex items-center justify-end text-gray-400 space-x-4'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer' />
            <div className='flex rounded-full items-center space-x-2 border-2 p-2 cursor-pointer'>
                <Bars3Icon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>
    </header>
  )
}

export default Header;