import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import confetti from "canvas-confetti";

const Salary = () => {
    const [timeRemaining, setTimeRemaining] = useState({});
    const [isToday, setIsToday] = useState(false);
    const [isTomorrow, setIsTomorrow] = useState(false);

    useEffect(() => {
        fetch("feriados.json")
            .then(response => response.json())
            .then(data => {
                const feriados = Array.isArray(data.feriados) ? data.feriados : [];
                updateCountDownSalary(feriados);
            })
            .catch(error => console.error("Error al cargar los datos:", error));
    }, []);

    const esFeriado = (fecha, feriados) => {
        const mesDiaStr = `${fecha.getMonth() + 1}-${fecha.getDate()}`;
        return feriados.some(feriado => feriado.fecha === mesDiaStr);
    };

    const getLastBusinessDayOfMonth = (year, month, feriados) => {
        let date = new Date(year, month + 1, 0);
        while (date.getDay() === 0 || date.getDay() === 6 || esFeriado(date, feriados)) {
            date.setDate(date.getDate() - 1);
        }
        return date;
    };

    const updateCountDownSalary = (feriados) => {
        const now = new Date();
        const lastBusinessDay = getLastBusinessDayOfMonth(now.getFullYear(), now.getMonth(), feriados);
        lastBusinessDay.setHours(17, 0, 0, 0);

        const timeRemaining = lastBusinessDay - now;

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

        setTimeout(() => updateCountDownSalary(feriados), 1000);
    };

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" style={{ marginBottom: "2.5%" }}>
                <img 
                    src="/img/nutria-chambeadora.jpg" 
                    alt="Nutria con salario"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", margin: "auto", display: "block" }}
                />
            </Box>
            <Box
                id="countdown-salary"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
                p={2}
                style={{
                    backgroundColor: '#1de9b6',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '300px',
                    maxHeight: '80px',
                    margin: '0 auto',
                }}
            >
                {["días", "horas", "minutos", "segundos"].map((unit, index) => {
                    const timeValues = [timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds];
                    return (
                        <Box key={unit} p={1} textAlign="center">
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
                {isToday && <Typography variant="h6" color="primary">¡Hoy es día de salario!</Typography>}
                {isTomorrow && <Typography variant="h6" color="secondary">¡Mañana es día de salario!</Typography>}
                {!isToday && !isTomorrow && <Typography variant="h6" color="textSecondary">Aguarda el salario con emoción</Typography>}
            </Box>
        </Fragment>
    );
};

export default Salary;