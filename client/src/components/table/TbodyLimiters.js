import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const TbodyLimiters = ({ item, index }) => {
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
      {item.limiterDescription ? (
        <td>{item.limiterDescription}</td>
      ) : (
        <td> </td>
      )}
      {item.frequency ? <td>{item.frequency}</td> : <td> </td>}
      {item.insertionLoss ? <td>{item.insertionLoss}</td> : <td> </td>}
      {item.returnLoss ? <td>{item.returnLoss}</td> : <td> </td>}
      {item.inputPowerCw ? <td>{item.inputPowerCw}</td> : <td> </td>}
      {item.inputPowerPeak ? <td>{item.inputPowerPeak}</td> : <td> </td>}
      {item.flatLeakage ? <td>{item.flatLeakage}</td> : <td> </td>}
      {item.spikeLeakage ? <td>{item.spikeLeakage}</td> : <td> </td>}
      {item.recoveryTime ? <td>{item.recoveryTime}</td> : <td> </td>}
      {item.status ? <td>{item.status}</td> : <td> </td>}
    </tr>
  );
};

export default TbodyLimiters;
