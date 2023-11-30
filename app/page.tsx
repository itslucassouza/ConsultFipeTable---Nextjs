'use client'

import { Box, Paper, Stack, Typography } from '@mui/material'
import SelectBrand from './components/SelectBrand'
import SelectModel from './components/SelectModel'
import SelectYear from './components/SelectYear'
import { Global } from '@emotion/react'
import globalStyles from './globalStyles'
import { useAppSelector } from './store'
import ConsultButton from './components/ConsultButton'

export default function IndexPage() {
  const model = useAppSelector((state) => state.model);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: 1,
        }}>
        <Typography variant="h5" fontWeight="bold" component="h2">
          Tabela Fipe
        </Typography>
        <Typography component="h2" fontWeight="bold">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <Paper
          sx={{
            padding: "15px 40px",
          }}
        >
          <SelectBrand />
          <SelectModel />
          {model && (
            <Stack spacing={2} alignItems="center">
              <SelectYear />
              <ConsultButton />
            </Stack>
          )}

        </Paper>
      </Box>

    </>
  )
}


