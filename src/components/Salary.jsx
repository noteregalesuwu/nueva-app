import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
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
        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth();

        let lastBusinessDay = getLastBusinessDayOfMonth(currentYear, currentMonth, feriados);
        lastBusinessDay.setHours(22, 0, 0, 0);

        let timeRemaining = lastBusinessDay - now;

        if (timeRemaining < 0) {
            if (currentMonth === 11) {
                currentYear++;
                currentMonth = 0;
            } else {
                currentMonth++;
            }
            lastBusinessDay = getLastBusinessDayOfMonth(currentYear, currentMonth, feriados);
            lastBusinessDay.setHours(20, 0, 0, 0);
            timeRemaining = lastBusinessDay - now;
        }

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
            <Box display="flex" justifyContent="center" style={{marginBottom:"2.5%"}}>
                <img 
                    src="/img/nutria-chambeadora.jpg" 
                    alt="Nutria Chambeadora"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", margin: "auto", display: "block" }}
                />
            </Box>
            <Box
                id="countdown-cobro"
                display="flex"
                justifyContent="center"
                mt={3}
                p={2}
                style={{
                    backgroundColor: '#1de9b6',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
            >
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    {["dias", "horas", "minutos", "segundos"].map((unit, index) => {
                        const timeValues = [timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds];
                        return (
                            <Grid item key={unit}>
                                <Box p={2}>
                                    <Typography variant="h4" color="secondary" style={{ textAlign: "center" }}>
                                        {timeValues[index]}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: 'secondary',textAlign: "center" }}>
                                        {unit}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Box style={{marginTop:"3%",textAlign:"center"}}>
                {isToday && <Typography variant="h6" color="primary">¡Hoy es el día de cobro!</Typography>}
                {isTomorrow && <Typography variant="h6" color="secondary">¡Mañana es el día de cobro!</Typography>}
                {!isToday && !isTomorrow && <Typography variant="h6" color="textSecondary">Nutrias Chambeadoras almorzando pan con hielo porque aún falta para el día de cobro.</Typography>}
            </Box>
        </Fragment>
    );
};

export default Salary;
