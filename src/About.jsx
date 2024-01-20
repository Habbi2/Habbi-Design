import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const About = () => {
    return <Box component="main" sx={{ p: 3, width: "70vw", maxHeight: "90vh" }}>
        <Toolbar />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
            ¿Quiénes somos? Somos un equipo que se especializa en crear estrategias automatizadas de Cryptomonedas, Paper trading bots, landing pages, E-Commerce y videojuegos 2D.
        </Typography>
    </Box>
}

export default About