import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";

function App() {
  return (
    <>
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          px: 2
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Введите что-нибудь:
          </Typography>
          <TextField fullWidth variant="outlined" size="medium" />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            pb: 2,
            pt: 1,
            backgroundColor: "#fff",
          }}
        >
          <Button variant="contained" fullWidth sx={{ mb: 1 }} onClick={() => { }}>
            Кнопка 1
          </Button>
          <Button variant="outlined" fullWidth onClick={() => { }}>
            Кнопка 2
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
