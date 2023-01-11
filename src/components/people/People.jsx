import React from "react";
import fetchPeople from "./PeopleHelper";
import { useQuery } from "react-query";
import StatusInfo from "../../containers/StatusInfo";
import DataDisplay from "../../containers/DataDisplay";

const Planets = (props) => {
  const { data, status, error } = useQuery("people", fetchPeople);
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
    </>
  );
};

export default Planets;
