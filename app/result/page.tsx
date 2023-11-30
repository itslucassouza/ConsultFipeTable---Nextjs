'use client'

import { resetBrand, resetModel, useAppSelector } from "../store";
import { Box, Button, Chip, CircularProgress, Container, Skeleton, Typography } from "@mui/material";
import { useGetResult } from "../queries/useGetResult";
import { formatCarValue } from "../utils/formatCarValu";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Result() {
    const dispatch = useDispatch();
    const { brand, model, year } = useAppSelector((state) => state);
    const { data: result, isLoading } = useGetResult(brand, model, year)
    const router = useRouter()

    const handleSearchNewCar = () => {
        router.push("/")
        dispatch(resetBrand());
        dispatch(resetModel());
    }

    useEffect(() => {
        if (!brand || !model || !year) {
            router.push("/")
        }
    }, [brand, model, year])

    if (isLoading) {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <CircularProgress />
            </Box>
        )
    }

    const value = formatCarValue(result?.Valor)

    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContet: "center"
        }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    background: "#DCF5F2",
                    padding: "40px 20px",
                    width: "100%",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "18px"
                    }}
                >
                    Tabela Fipe: Preço {result?.Modelo} {result?.AnoModelo}
                </Typography>
                <Chip
                    label={`R$: ${value}`}
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

                <Button
                    onClick={() => handleSearchNewCar()}
                    variant="contained"
                    size="small"
                    sx={{
                        background: "#00A48C",
                        '&:hover': {
                            backgroundColor: "#00A48C",
                        },
                    }}
                >
                    Consultar outro Carro
                </Button>
            </Container>
        </Box>
    )
}