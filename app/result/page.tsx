'use client'

import { useAppSelector } from "../store";
import { Chip, Container, Skeleton, Typography } from "@mui/material";
import { useGetResult } from "../queries/useGetResult";

export default function Result() {
    const { brand, model, year } = useAppSelector((state) => state);
    const { data: result, isLoading } = useGetResult(brand, model, year)

    if (isLoading) {
        return (
            <Skeleton
                data-testid="skeleton-result"
                variant="rectangular"
                height={60}
            />
        )
    }

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                background: "#DCF5F2",
                padding: "40px 20px",
                width: "100%"
            }}
        >
            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: "15px"
                }}
            >
                Tabela Fipe: Preço {result?.Modelo} {result?.AnoModelo}
            </Typography>
            <Chip label={`R$: ${result?.Valor}`}
                sx={{
                    background: "#00A48C",
                    color: "white",
                    textTransform: "uppercase"
                }}
            />
            <Typography
                sx={{
                    color: "#AAB3B5",
                    fontSize: "12px"
                }}
            >
                este é o preço de compra do veículo
            </Typography>
        </Container>
    )
}