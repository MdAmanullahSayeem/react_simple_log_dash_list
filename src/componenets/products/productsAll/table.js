import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { conformsTo } from "lodash";

const Table = (props) => {
  const { headers, data } = props;
  return (
    <table className="table">
      <TableHeader headers={headers} />
      <TableBody data={data} header={headers} />
    </table>
  );
};

export default Table;
