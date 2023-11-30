'use client'

import { useAppSelector } from "@/app/store";
import { Button, ButtonProps, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useRouter } from "next/router";

export default function ConsultButton() {
    const router = useRouter()
    const year = useAppSelector((state) => state.year);

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#5D00BF"),
        backgroundColor: "#5D00BF",
        '&:hover': {
            backgroundColor: "#5D00BF",
        },
        width: "80%",
        fontSize: "12px",
        padding: "10px 30px",
        textTransform: "none"
    }));

    return (
        <ColorButton
            onClick={() => router.push("/result")}
            disabled={!year} variant="contained"
        >
            Consultar preço
        </ColorButton>
    )
}