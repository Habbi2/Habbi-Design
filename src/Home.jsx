import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Home = () => {
    return <Box component="main" sx={{ p: 3, width: "70vw", maxHeight: "95vh" }}>
        <Toolbar />
        <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>¿Necesitás tu propia página web, rápida y en poco tiempo? Somos un equipo especializado en crear tu página, a medida en poco tiempo.</Typography>
        <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", textAlign: "center"  }}>¿Sabías que si una página tarda mas de dos segundos en cargar, el visitante la cierra y pasa al próximo resultado de Google?</Typography>
        <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", textAlign: "center"  }}>Esta página fue hecha con las últimas tecnologías del mercado, usando React no tarda en cargar y Material UI para adaptarse a todos los diferentes dispositivos.</Typography>
        <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", textAlign: "center"  }}>Si quiere la suya, póngase en contacto.</Typography>
    </Box>
}

export default Home