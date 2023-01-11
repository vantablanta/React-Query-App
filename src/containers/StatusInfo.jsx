import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

export default function StatusInfo({ status, error, data }) {
  return (
    <>
      {status === "loading" && (
        <>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </>
      )}

      {status === "error" && (
        <>
          <Alert severity="error">There is an error loading data</Alert>
        </>
      )}
    </>
  );
}
