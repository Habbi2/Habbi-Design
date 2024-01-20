import { Button, Typography, Box } from "@mui/material";

function Contact() {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "60vw"
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contáctenos
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "30vw", minWidth: "300px" }}>
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              <a href="https://wa.me/541130599215" style={{ textDecoration: 'none', color: "green" }}>
              Whatsapp
              </a>
            </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact