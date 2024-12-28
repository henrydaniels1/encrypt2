// import enc from '/enc.jpg';
import enc from '/enc4.jpg';
import { Link } from 'react-router-dom';
import '../style/Nav.css'


export const Header = () => {
  return (
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col items-center justify-between lg:flex-row  space-y-6'>
        <div className='space-y-6 lg:max-w-lg lg:pr-5 '>
          <div className='animate-slidein ... max-w-xl'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl '>
              Secure Your Data with Our
              <br className='hidden md:block' />
              <span className='inline-flex gap-2 text-deep-purple-accent-400 justify-center items-center'>
                <span className='text-teal-400'>Encryption</span> and
                <span className='text-teal-400'>Decryption</span>
              </span>{' '}
              Tool
            </h2>

            <p className='text-base text-gray-800 md:text-lg'>
              Effortlessly encrypt and decrypt your sensitive data with our
              easy-to-use online tool.
            </p>
          </div>
          <div>
            <Link to='/encryption'>
              <div>
                <button className='btn-6 p-4 rounded-2xl font-bold'>
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className=' lg:w-1/2 w-full md:w-[90%]'>
          <img
            className='object-cover w-full h-56 rounded sm:h-[30rem]'
            src={enc}
            alt='encryption pic'
          />
        </div>
      </div>
    </div>
  )
};
