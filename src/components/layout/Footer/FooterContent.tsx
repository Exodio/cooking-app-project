import { Box, Divider, Typography } from "@mui/material";

export const FooterContent = () => {
  return (
    <Box data-testid="footer-container" sx={{ width: "100%" }}>
      <Divider data-testid="recipes-bottom-separator" sx={{ pt: 2.5 }} />
      <Box
        data-testid="footer-container-content"
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          p: 5.25,
          alignItems: "center",
        }}
      >
        <Typography
          data-testid="footer-container-content-info"
          variant="subtitle1"
          paddingBottom="8px"
        >
          Please don’t try these recipes at home. We hope that they will inspire
          you to cook more, but consider that their main idea is your coding
          task for Devexperts.
        </Typography>
        <Typography
          data-testid="footer-container-content-rights"
          variant="subtitle1"
        >
          Copyright &copy; 2022. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};
