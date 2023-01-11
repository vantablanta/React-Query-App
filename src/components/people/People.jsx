import React from "react";
import StatusInfo from "../../containers/StatusInfo";
import DataDisplay from "../../containers/DataDisplay";
import { usePeople } from "../../hooks/CustomHooks";
import { PeopleForm } from "./PeopleForm";

const Planets = (props) => {
  const { data, status, error } = usePeople();

  console.log(data);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "gender",
      headerName: "Gender",
      width: 200,
    },
    {
      field: "birth_year",
      headerName: "YOB",
      width: 200,
    },
    {
      field: "skin_color",
      headerName: "Skin Color",
      width: 200,
    },
    {
      field: "hair_color",
      headerName: "Hair Color",
      width: 200,
    },
  ];

  return (
    <>
      <h2>People</h2>
      <StatusInfo status={status} error={error} data={data} />
      <DataDisplay data={data} columns={columns} />
      <PeopleForm />
    </>
  );
};

export default Planets;
