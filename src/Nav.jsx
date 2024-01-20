import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const navItems = ["Home", "Sobre Nosotros", "Contacto"];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", width: "50vw" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Habbi Design
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        {item === "Home" ? <Link to={"/"}>
                            <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link> : <Link to={item}>
                            <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <Link to={"/"} style={{ textDecoration: 'none', color: "#fff" }}>
                            Habbi Design
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => {
                            return item === "Home" ? <Link to={"/"}>
                                <Button key={item} sx={{ color: "#fff" }}>
                                    {item}
                                </Button>
                            </Link> : <Link to={item}>
                                <Button key={item} sx={{ color: "#fff" }}>
                                    {item}
                                </Button>
                            </Link>
                        }
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "50vw",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box >
    );
}

export default DrawerAppBar;