// STYLES
import "./RolesTable.css";

// COMPONENTS
import TableContainer from "./TableContainer";

// IMPORTS
import { useState, useEffect } from "react";

export default function RolesTable() {
  const [minSelf, setMinSelf] = useState(0);
  const [maxSelf, setMaxSelf] = useState(0);
  const [minManager, setMinManager] = useState(0);
  const [maxManager, setMaxManager] = useState(0);
  const [minPeers, setMinPeers] = useState(0);
  const [maxPeers, setMaxPeers] = useState(0);
  const [minDirectReports, setMinDirectReports] = useState(0);
  const [maxDirectReports, setMaxDirectReports] = useState(0);
  const [minDevelopmentCoach, setMinDevelopmentCoach] = useState(0);
  const [maxDevelopmentCoach, setMaxDevelopmentCoach] = useState(0);
  const [minTotal, setMinTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(0);

  let minArray = [
    minSelf,
    minManager,
    minPeers,
    minDirectReports,
    minDevelopmentCoach,
  ];
  let maxArray = [
    maxSelf,
    maxManager,
    maxPeers,
    maxDirectReports,
    maxDevelopmentCoach,
  ];

  useEffect(() => {
    setMinTotal(minArray.reduce((partialSum, a) => partialSum + a, 0));
    setMaxTotal(maxArray.reduce((partialSum, a) => partialSum + a, 0));
  }, [minArray, maxArray]);

  return (
    <div className="roles-table">
      <div className="table-header">
        <div>
          <p>Role</p>
        </div>
        <div>
          <p>Min</p>
          <span>Minimum no of responses for report availability</span>
        </div>
        <div>
          <p>Max</p>
          <span>Number of evaluator to be provided per evaluator</span>
        </div>
      </div>

      {/* TABLE */}

      {/* SELF */}
      <TableContainer
        role="Self"
        // MIN
        minNum={minSelf}
        addMin={() => setMinSelf(minSelf + 1)}
        subMin={() => setMinSelf(minSelf - 1)}
        // MAX
        maxNum={maxSelf}
        addMax={() => setMaxSelf(maxSelf + 1)}
        subMax={() => setMaxSelf(maxSelf - 1)}
      />
      {/* MANAGER */}
      <TableContainer
        role="Manager"
        // MIN
        minNum={minManager}
        addMin={() => setMinManager(minManager + 1)}
        subMin={() => setMinManager(minManager - 1)}
        // MAX
        maxNum={maxManager}
        addMax={() => setMaxManager(maxManager + 1)}
        subMax={() => setMaxManager(maxManager - 1)}
      />

      {/* PEERS */}
      <TableContainer
        role="Peers"
        // MIN
        minNum={minPeers}
        addMin={() => setMinPeers(minPeers + 1)}
        subMin={() => setMinPeers(minPeers - 1)}
        // MAX
        maxNum={maxPeers}
        addMax={() => setMaxPeers(maxPeers + 1)}
        subMax={() => setMaxPeers(maxPeers - 1)}
      />
      {/* DIRECT REPORTS */}
      <TableContainer
        role="Direct Reports"
        // MIN
        minNum={minDirectReports}
        addMin={() => setMinDirectReports(minDirectReports + 1)}
        subMin={() => setMinDirectReports(minDirectReports - 1)}
        // MAX
        maxNum={maxDirectReports}
        addMax={() => setMaxDirectReports(maxDirectReports + 1)}
        subMax={() => setMaxDirectReports(maxDirectReports - 1)}
      />

      {/* DEVELOPMENT COACH */}
      <TableContainer
        role="Development Coach"
        // MIN
        minNum={minDevelopmentCoach}
        addMin={() => setMinDevelopmentCoach(minDevelopmentCoach + 1)}
        subMin={() => setMinDevelopmentCoach(minDevelopmentCoach - 1)}
        // MAX
        maxNum={maxDevelopmentCoach}
        addMax={() => setMaxDevelopmentCoach(maxDevelopmentCoach + 1)}
        subMax={() => setMaxDevelopmentCoach(maxDevelopmentCoach - 1)}
      />

      <div className="roles-total">
        <p>Total</p>
        <p>{minTotal}</p>
        <p>{maxTotal}</p>
      </div>
    </div>
  );
}
