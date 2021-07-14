import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Table as RfuWTable } from "react-bootstrap";
import { Download } from "react-feather";

const Table = ({ headers, content }) => {
  const tBody =
    content &&
    content.map((item, index) => (
      <tr key={uuidv4()} id={uuidv4()}>
        <td key={uuidv4()} id={uuidv4()}>
          {index + 1}
        </td>
        {Object.keys(item).map((keyName) => {
          if (keyName === "download") {
            return (
              <td key={uuidv4()} id={uuidv4()}>
                <a
                  href={item[keyName]}
                  onClick={() => window.open(item[keyName])}
                  target="_blank"
                  className="navigation__link"
                >
                  Download .PDF <Download style={{ color: "grey" }} size={20} />
                </a>
              </td>
            );
          }
          return (
            <td key={uuidv4()} id={uuidv4()}>
              {item[keyName]}
            </td>
          );
        })}
      </tr>
    ));

  return (
    <RfuWTable responsive hover bordered>
      {
        <thead className="table__thead">
          <tr key={uuidv4()} id={uuidv4()}>
            <th key={uuidv4()} id={uuidv4()}></th>

            {headers &&
              headers.map((head) => (
                <th key={uuidv4()} id={uuidv4()}>
                  {head}
                </th>
              ))}
          </tr>
        </thead>
      }

      <tbody>{tBody}</tbody>
    </RfuWTable>
  );
};

export default Table;
