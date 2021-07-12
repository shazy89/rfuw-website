import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const TbodySwDrivers = ({ item, index }) => {
  return (
    <tr key={uuidv4()} id={uuidv4()}>
      <td key={uuidv4()} id={uuidv4()}>
        {index + 1}
      </td>
      <td>
        <Link
          to={{
            pathname: `rfuw/${item.model}`,
            state: { id: item._id, type: item.type }
          }}
        >
          {item.model}
        </Link>
      </td>
      {item.content ? <td>{item.content}</td> : <td> </td>}
      {item.control ? <td>{item.control}</td> : <td> </td>}
      {item.voltage1 ? <td>{item.voltage1}</td> : <td> </td>}
      {item.voltage2 ? <td>{item.voltage2}</td> : <td> </td>}
      {item.sinkMa ? <td>{item.sinkMa}</td> : <td> </td>}
      {item.sourceMa ? <td>{item.sourceMa}</td> : <td> </td>}
    </tr>
  );
};

export default TbodySwDrivers;
