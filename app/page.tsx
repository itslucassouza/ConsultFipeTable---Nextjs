"use client";

import { Box, Grid, Paper, Typography } from '@mui/material'
import SelectBrand from './components/SelectBrand'
import SelectModel from './components/SelectModel'
import SelectYear from './components/SelectYear'
import ConsultButton from './components/ConsultButton'
import { useAppSelector } from './store'

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
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" component="h2">
          Tabela Fipe
        </Typography>
        <Typography component="h2" fontWeight="bold">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <Paper
           sx={{
            padding: '15px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Grid item xs={12} sm={12} md={12}>
              <SelectBrand />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SelectModel />
            </Grid>
            {model && (
              <>
                <Grid item xs={12} sm={12} md={12}>
                  <SelectYear />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ConsultButton />
                </Grid>
              </>
            )}
        </Paper>
      </Box>
    </>
  )
}
