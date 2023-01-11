import React, { useState } from "react";
import Navbar from "./components/navigation/Navbar";
import People from "./components/people/People";
import Planets from "./components/planets/Planets";
import Box from '@mui/material/Box';

function App() {
  const [page, setPage] = useState("planets")

  return (
    <>
      <Box>
        <Navbar setPage={setPage} />
        {page === "planets" ? <Planets /> : <People />}
      </Box>
    </>

  );
}

export default App;

