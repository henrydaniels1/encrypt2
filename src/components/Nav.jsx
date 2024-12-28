import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers'
import '../style/Nav.css'

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [account, setAccount] = useState(null)

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const signer = await provider.getSigner()
          const address = await signer.getAddress()
          setAccount(address)
        } catch (e) {
          console.error('Failed to get wallet address:', e)
        }
      }
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setAccount(null) // User has disconnected the wallet
      } else {
        setAccount(accounts[0]) // Update to the first account
      }
    }

    checkWalletConnection()

    // Event listener for account changes
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
    }

    // Cleanup event listener on unmount
    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
      } catch (e) {
        console.error('Failed to connect wallet:', e)
      }
    } else {
      console.log('Please install MetaMask!')
    }
  }

  return (
    <div className='bg-gray-900'>
      <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center'>
            <svg
              className='w-8 text-teal-400'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'>
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
              Criptify
            </span>
          </Link>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/'
                aria-label='Home'
                title='Home'
                className='font-medium nav-link tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/feature'
                aria-label='Features'
                title='Features'
                className='font-medium nav-link tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400'>
                Features
              </Link>
            </li>
            <li>
              <Link
                to='/blog'
                aria-label='Blog'
                title='Blog'
                className='font-medium nav-link tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400'>
                Blog
              </Link>
            </li>
          </ul>
          <div className='flex items-center space-x-4'>
            {account ? (
              <p className='text-sm text-gray-100'>
                Connected: {account.slice(0, 6)}...{account.slice(-4)}
              </p>
            ) : (
              <button
                onClick={connectWallet}
                className='border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-gray-900 transition'>
                Connect Wallet
              </button>
            )}
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='lg:hidden p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}>
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-50 bg-white'>
              <div className='p-5 border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <Link
                    to='/'
                    aria-label='Company'
                    title='Company'
                    className='inline-flex items-center'>
                    <svg
                      className='w-8 text-teal-400'
                      viewBox='0 0 24 24'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      stroke='currentColor'
                      fill='none'>
                      <rect x='3' y='1' width='7' height='12' />
                      <rect x='3' y='17' width='7' height='6' />
                      <rect x='14' y='1' width='7' height='6' />
                      <rect x='14' y='11' width='7' height='12' />
                    </svg>
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                      Company
                    </span>
                  </Link>
                  <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                    onClick={() => setIsMenuOpen(false)}>
                    <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <div className='space-y-4 flex flex-col'>
                    <Link
                      to='/'
                      className='font-medium text-gray-700 hover:text-teal-400'>
                      Home
                    </Link>
                    <Link
                      to='/feature'
                      className='font-medium text-gray-700 hover:text-teal-400'>
                      Features
                    </Link>
                    <Link
                      to='/blog'
                      className='font-medium text-gray-700 hover:text-teal-400'>
                      Blog
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
