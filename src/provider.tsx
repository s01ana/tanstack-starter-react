import { cookieStorage, createStorage } from '@wagmi/core'
import { createAppKit } from '@reown/appkit/react' 
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

import { mainnet, arbitrum, avalanche, base, optimism, polygon } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const projectId = '9904afd44f42117adce3be3491ef5017'

export const networks = [mainnet, arbitrum, avalanche, base, optimism, polygon]

const queryClient = new QueryClient()

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'Tanstack-Starter',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon],
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    socials: false,
    email: false,
    swaps: false,
    send: false,
    
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': "#ffffff",
    '--w3m-accent': '#1b1718',
    "--w3m-color-mix-strength": 50,
    '--w3m-font-family': 'ui-sans-serif, system-ui',
    '--w3m-font-size-master': '9px',
    '--w3m-border-radius-master': '0.5px'
  }
})

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider
    