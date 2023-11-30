'use client'
import { Box, Typography } from '@mui/material'
import ReduxProvider from './provider'
import { Global } from '@emotion/react';
import globalStyles from './globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <html lang="en">
          <body>
            <Box>
              <Global styles={globalStyles} />
              {children}
            </Box>
          </body>
        </html>
      </ReduxProvider>
    </QueryClientProvider>
  )
}
