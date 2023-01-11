import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataDisplay({ data, columns }) {
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      {data && (
        <>
          <DataGrid
            rows={data.results}
            getRowId={(row) => row.name + row.orbital_period}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </>
      )}
    </Box>
  );
}
