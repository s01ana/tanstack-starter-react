// import { createConfig } from '@wagmi/core'
import { http,  } from "viem"
import React, { type ReactNode } from 'react'
import { createConfig, WagmiProvider } from 'wagmi'
import { mainnet } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";

const queryClient = new QueryClient()

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    dedicatedWalletConnector({
      chains: [mainnet],
      options: {
        networks: ["mainnet"],
        apiKey: 'pk_live_D7AF79D0DEF9C83F',
        isDarkMode: true,
        magicSdkConfiguration: {
          network: "mainnet",
        },
      },
    }),
  ],
});

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider
    