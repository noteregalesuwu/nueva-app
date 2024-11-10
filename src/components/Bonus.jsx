import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import confetti from "canvas-confetti";

const Bonus = () => {
    const [timeRemaining, setTimeRemaining] = useState({});
    const [isToday, setIsToday] = useState(false);
    const [isTomorrow, setIsTomorrow] = useState(false);

    useEffect(() => {
        fetch("feriados.json")
            .then(response => response.json())
            .then(data => {
                const feriados = Array.isArray(data.feriados) ? data.feriados : [];
                const aguinaldoFecha = data.aguinaldoFecha;
                updateCountDownAguinaldo(feriados, aguinaldoFecha);
            })
            .catch(error => console.error("Error al cargar los datos:", error));
    }, []);

    const esFeriado = (fecha, feriados) => {
        const mesDiaStr = `${fecha.getMonth() + 1}-${fecha.getDate()}`;
        return feriados.some(feriado => feriado.fecha === mesDiaStr);
    };

    const getNextBusinessDay = (date, feriados) => {
        while (date.getDay() === 0 || date.getDay() === 6 || esFeriado(date, feriados)) {
            date.setDate(date.getDate() + 1);
        }
        return date;
    };

    const updateCountDownAguinaldo = (feriados, aguinaldoFecha) => {
        const now = new Date();
        const [aguinaldoMonth, aguinaldoDay] = aguinaldoFecha.split("-").map(Number);
        let aguinaldoDate = new Date(now.getFullYear(), aguinaldoMonth - 1, aguinaldoDay);

        if (now > aguinaldoDate) {
            aguinaldoDate.setFullYear(aguinaldoDate.getFullYear() + 1);
        }

        aguinaldoDate = getNextBusinessDay(aguinaldoDate, feriados);
        aguinaldoDate.setHours(22, 0, 0, 0);

        const timeRemaining = aguinaldoDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });

        if (days < 1) {
            setIsToday(true);
            setIsTomorrow(false);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        } else if (days === 1 && hours > 1) {
            setIsToday(false);
            setIsTomorrow(true);
        } else {
            setIsToday(false);
            setIsTomorrow(false);
        }

        setTimeout(() => updateCountDownAguinaldo(feriados, aguinaldoFecha), 1000);
    };

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" style={{ marginBottom: "2.5%" }}>
                <img 
                    src="/img/nutria-aguinaldo.jpg" 
                    alt="Nutria con Aguinaldo"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", margin: "auto", display: "block" }}
                />
            </Box>
            <Box
                id="countdown-aguinaldo"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                p={2}
                style={{
                    backgroundColor: '#1de9b6',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    maxHeight: '100px',
                    margin: '0 auto',
                }}
            >
                {["días", "horas", "minutos", "segundos"].map((unit, index) => {
                    const timeValues = [timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds];
                    return (
                        <Box key={unit} p={3} textAlign="center">
                            <Typography variant="h4" color="secondary">
                                {timeValues[index]}
                            </Typography>
                            <Typography variant="body2" color="secondary">
                                {unit}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
            <Box style={{ marginTop: "3%", textAlign: "center" }}>
                {isToday && <Typography variant="h6" color="primary">¡Hoy es el día de aguinaldo!</Typography>}
                {isTomorrow && <Typography variant="h6" color="secondary">¡Mañana es el día de aguinaldo!</Typography>}
                {!isToday && !isTomorrow && <Typography variant="h6" color="textSecondary">Nutrias Chambeadoras si ya tuvieran el aguinaldo</Typography>}
            </Box>
        </Fragment>
    );
};

export default Bonus;