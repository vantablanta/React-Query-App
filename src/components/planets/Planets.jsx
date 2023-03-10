import React from "react";
import StatusInfo from "../../containers/StatusInfo";
import DataDisplay from "../../containers/DataDisplay";
import { usePlanets } from "../../hooks/CustomHooks";

const Planets = (props) => {
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "orbital_period",
      headerName: "Orbital Period",
      width: 200,
    },
    {
      field: "population",
      headerName: "Population",
      width: 200,
    },
    {
      field: "terrain",
      headerName: "Terrain",
      width: 200,
    },
    {
      field: "surface_water",
      headerName: "Suraface Water",
      width: 200,
    },
  ];

  const { data, status, error } = usePlanets();

  return (
    <>
      <h2>Planets</h2>
      <StatusInfo status={status} error={error} />
      <DataDisplay data={data} columns={columns} />
    </>
  );
};

export default Planets;
