import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { searchQueryProps } from "../../model/SearchQueryProps";

const SearchQuery: React.FC<searchQueryProps> = ({
  queryParams,
  setQueryParams,
}) => {
  function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;

    const value = e.currentTarget.value;

    if (!value.trim()) return;

    setQueryParams([...queryParams, value]);

    e.currentTarget.value = "";
  }

  function clearSearchQuery(currentIndex: number) {
    setQueryParams(
      queryParams.filter((el: string, index: number) => index !== currentIndex)
    );
  }

  return (
    <Box
      data-testid="nav-bar-search-field"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "25%",
      }}
    >
      <TextField
        label="Filter Ingredients"
        InputProps={{
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) =>
            onKeyDownHandler(e),
        }}
      />
      {queryParams.map((queryParam: string, index: number) => (
        <Box
          data-testid="nav-bar-search-field-dropdown"
          sx={{
            display: "flex",
            mt: 15,
            p: 2.25,
            boxShadow: 2,
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            minWidth: "19.8%",
            borderRadius: "3.5px",
          }}
          key={`search-query-params-${index}`}
        >
          <Box
            data-testid="search-field-tick-icon-container"
            sx={{ pt: 0.2, cursor: "pointer", minWidth: "1%" }}
            onClick={() => clearSearchQuery(index)}
          >
            {<img src="./ticked-icon.png" alt="ticked-icon" />}
          </Box>
          <Box data-testid="search-field-query-container" sx={{ pl: 1 }}>
            <Typography
              data-testid="search-field-query-content"
              fontSize="small"
            >
              {queryParam}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SearchQuery;
