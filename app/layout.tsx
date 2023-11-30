'use client'

import { Box, Typography } from '@mui/material'
import ReduxProvider from './provider'
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <html lang="en">
          <body>
            <Box
            sx={{
              height: "100vh",
            }}
            >
              {children}
            </Box>
          </body>
        </html>
      </ReduxProvider>
    </QueryClientProvider>
  )
}
