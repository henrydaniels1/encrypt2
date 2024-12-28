import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom'

export default function WalletComponent() {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (account) {
      navigate('/home')
    }
  }, [account, navigate])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)

        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
        setIsConnected(true)
        navigate('/home') // Navigate immediately after connection is successful
      } catch (e) {
        console.error('Failed to connect wallet:', e)
      }
    } else {
      console.log('Please install MetaMask!')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-[350px] bg-white rounded shadow-lg p-6'>
        <h2 className='text-xl font-semibold text-center'>
          Connect Your Wallet
        </h2>
        <p className='text-center text-gray-600 mb-4'>
          Click the button below to connect your MetaMask wallet.
        </p>
        <button
          onClick={connectWallet}
          className='w-full py-2 bg-blue-500 text-white rounded disabled:bg-gray-400'
          disabled={isConnected}>
          {isConnected ? 'Connected' : 'Connect MetaMask'}
        </button>
        {account && (
          <p className='mt-4 text-sm text-center text-gray-500'>
            Connected Account: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        )}
      </div>
    </div>
  )
}
