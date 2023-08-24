import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href={"/"}>
                    <h1>LOGO HERE</h1>
                    {/* Insert Image here TODO */}
                    {/* <Image
                        src={""}
                        alt='My logo'
                        className='rounded-full'
                        width={50}
                        height={50}
                    />  */}
                </Link>
                <h1 className='text-2xl'>Tech Tribe</h1>
            </div>

        </header>
    )
}

export default Header