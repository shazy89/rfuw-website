import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const TbodySwitches = ({ item, index }) => {
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
      {item.frequencyRange ? <td>{item.frequencyRange}</td> : <td> </td>}
      {item.switchTopology ? <td>{item.switchTopology}</td> : <td> </td>}
      {item.averagePower ? <td>{item.averagePower}</td> : <td> </td>}
      {item.peakPower ? <td>{item.peakPower}</td> : <td> </td>}
      {item.insertionLoss ? <td>{item.insertionLoss}</td> : <td> </td>}
      {item.returnLoss ? <td>{item.returnLoss}</td> : <td> </td>}
      {item.iso ? <td>{item.iso}</td> : <td> </td>}
      {item.ip3 ? <td>{item.ip3}</td> : <td> </td>}
      {item.status ? <td>{item.status}</td> : <td> </td>}
    </tr>
  );
};

export default TbodySwitches;
