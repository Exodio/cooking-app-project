import { Box, Typography } from "@mui/material";

export const HeaderContent = () => {
  return (
    <Box
      data-testid="nav-bar-logo-container"
      sx={{ display: "flex", justifyContent: "center", pb: 2 }}
    >
      <Box
        data-testid="nav-bar-logo-icon-content"
        sx={{ pl: 1.18, pt: 0.8, pr: 2 }}
      >
        <img src="./navigation-logo.png" alt="navigation-logo" />
      </Box>
      <Box
        data-testid="nav-bar-logo-header-content"
        sx={{
          fontSize: "16px",
          lineHeight: "20px",
          letterSpacing: "0.6px",
          pt: 1.13,
        }}
      >
        <Typography
          data-testid="nav-bar-logo-header-content-app-name"
          fontSize="medium"
        >
          CookWell
        </Typography>
        <Typography
          data-testid="nav-bar-logo-header-content-app-by"
          fontSize="12px"
          lineHeight="16px"
          letterSpacing="0.8px"
          fontStyle="italic"
        >
          by Devexperts
        </Typography>
      </Box>
    </Box>
  );
};
