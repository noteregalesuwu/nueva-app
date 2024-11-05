import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";

const NextHoliday = () => {
    const [timeRemaining, setTimeRemaining] = useState({});
    const [nextHolidayName, setNextHolidayName] = useState("");
    const [isTodayHoliday, setIsTodayHoliday] = useState(false);

    useEffect(() => {
        fetch("feriados.json")
            .then(response => response.json())
            .then(data => {
                const feriados = Array.isArray(data.feriados) ? data.feriados : [];
                calculateNextHolidayCountdown(feriados);
            })
            .catch(error => console.error("Error al cargar los datos:", error));
    }, []);

    const calculateNextHolidayCountdown = (feriados) => {
        const now = new Date();
        let closestHoliday = null;

        for (const feriado of feriados) {
            const [month, day] = feriado.fecha.split("-").map(Number);
            let holidayDate = new Date(now.getFullYear(), month - 1, day);

            if (holidayDate < now) {
                holidayDate.setFullYear(now.getFullYear() + 1);
            }

            if (!closestHoliday || holidayDate < closestHoliday.date) {
                closestHoliday = { date: holidayDate, name: feriado.nombre };
            }
        }

        if (closestHoliday) {
            const timeRemaining = closestHoliday.date - now;
            setNextHolidayName(closestHoliday.name);
            setTimeRemaining({
                days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
            });

            setIsTodayHoliday(timeRemaining <= 24 * 60 * 60 * 1000); // Si el feriado es hoy
            setTimeout(() => calculateNextHolidayCountdown(feriados), 1000);
        }
    };

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" style={{marginBottom:"2.5%"}}>
                <Box style={{ marginBottom:"1%", textAlign: "center" }}>
                <Typography variant="h6" color="textSecondary">Las nutrias Chambeadoras esperando el proximo feriado:</Typography>
                </Box>
                <img 
                    src="/img/nutria-feriado.jpg" 
                    alt="Nutria con feriado"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", margin: "auto", display: "block" }}
                />
                
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                mt={3}
                p={2}
                style={{
                    backgroundColor: '#FFEB3B',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
            >
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    {["días", "horas", "minutos", "segundos"].map((unit, index) => {
                        const timeValues = [timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds];
                        return (
                            <Grid item key={unit}>
                                <Box p={2}>
                                    <Typography variant="h4" color="secondary" style={{ textAlign: "center" }}>
                                        {timeValues[index]}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: 'secondary', textAlign: "center" }}>
                                        {unit}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Box style={{ marginTop: "3%", textAlign: "center" }}>
                {isTodayHoliday ? (
                    <Typography variant="h6" color="primary">
                        ¡Hoy es {nextHolidayName}!
                    </Typography>
                ) : (
                    <Typography variant="h6" color="textSecondary">
                        Faltan {timeRemaining.days} días para {nextHolidayName}
                    </Typography>
                )}
            </Box>
        </Fragment>
    );
};

export default NextHoliday;
