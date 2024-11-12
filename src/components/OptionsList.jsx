import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CardGiftcard from "@mui/icons-material/CardGiftcard";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import Hotel from "@mui/icons-material/Hotel";
import Restaurant from "@mui/icons-material/Restaurant";
import InfoSharp from "@mui/icons-material/InfoSharp";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

function OptionsList({ toggleTheme, isDarkMode }) {
  const [currentTheme, setCurrentTheme] = useState(isDarkMode ? 'dark' : 'light');

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    toggleTheme(selectedTheme); // Enviar el tema seleccionado a `App`
  };

  return (
    <StyledList component="nav">
      <ListItem button component={Link} to="/">
        <StyledListItemIcon><EmojiPeopleIcon /></StyledListItemIcon>
        <StyledListItemText primary="Inicio" />
      </ListItem>

      <ListItem button component={Link} to="/salary">
        <StyledListItemIcon><MonetizationOn /></StyledListItemIcon>
        <StyledListItemText primary="Sueldo" />
      </ListItem>

      <ListItem button component={Link} to="/bonus">
        <StyledListItemIcon><MonetizationOn /></StyledListItemIcon>
        <StyledListItemText primary="Aguinaldo" />
      </ListItem>

      <ListItem button component={Link} to="/present">
        <StyledListItemIcon><CardGiftcard /></StyledListItemIcon>
        <StyledListItemText primary="Canasta Navideña" />
      </ListItem>

      <ListItem button component={Link} to="/end-of-year-party">
        <StyledListItemIcon><Restaurant /></StyledListItemIcon>
        <StyledListItemText primary="Fiesta de fin de año" />
      </ListItem>

      <ListItem button component={Link} to="/next-holiday">
        <StyledListItemIcon><Hotel /></StyledListItemIcon>
        <StyledListItemText primary="Próximo Feriado" />
      </ListItem>

      <ListItem button component={Link} to="/info">
        <StyledListItemIcon><InfoSharp /></StyledListItemIcon>
        <StyledListItemText primary="Informaciones" />
      </ListItem>

      <ListItem button component={Link} to="/bonus-calc">
        <StyledListItemIcon><CalculateIcon /></StyledListItemIcon>
        <StyledListItemText primary="Calcular Aguinaldo" />
      </ListItem>

      <ListItem button component={Link} to="/request-dj">
        <StyledListItemIcon><LibraryMusicIcon /></StyledListItemIcon>
        <StyledListItemText primary="Pedidos al DJ" />
      </ListItem>

      <ListItem>
        <StyledListItemIcon>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </StyledListItemIcon>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Elegir tema</InputLabel>
          <Select
            value={currentTheme}
            onChange={handleThemeChange}
            label="Elegir tema"
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="lightChristmas">Light Navideño</MenuItem>
            <MenuItem value="darkChristmas">Dark Navideño</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </StyledList>
  );
}

export default OptionsList;
