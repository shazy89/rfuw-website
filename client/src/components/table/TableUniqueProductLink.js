import React from "react";
import { Table } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";
import TbodyLimiters from "./TbodyLimiters";
import TbodySwitches from "./TbodySwitches";
import TbodySwDrivers from "./TbodySwDrivers";
import TbodyCoLimiters from "./TbodyCoLimiters";

const TableUniqueProductLink = ({ headers, content }) => {
  const tHead = (
    <tr key={uuidv4()} id={uuidv4()}>
      <th key={uuidv4()} id={uuidv4()}></th>

      {headers &&
        headers.map((head) => (
          <th key={uuidv4()} id={uuidv4()}>
            {head}
          </th>
        ))}
    </tr>
  );

  const tBody =
    content &&
    content
      .sort((a, b) => parseInt(a.tableSpace) - parseInt(b.tableSpace))
      .map((item, index) => {
        if (item.type === "limiters") {
          return <TbodyLimiters key={index} item={item} index={index} />;
        } else if (item.type === "switches") {
          return <TbodySwitches key={index} item={item} index={index} />;
        } else if (item.type === "swdrivers") {
          return <TbodySwDrivers key={index} item={item} index={index} />;
        } else if (item.type === "colimiters") {
          return <TbodyCoLimiters key={index} item={item} index={index} />;
        }
      });
  return (
    <Table responsive hover striped>
      <thead className="table__thead">{tHead}</thead>
      <tbody>{tBody}</tbody>
    </Table>
  );
};

export default TableUniqueProductLink;
