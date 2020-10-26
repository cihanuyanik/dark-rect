import React from 'react';
import styles from "./App.module.css";
import TableLayout, {ColumnDefinition, RowDefinition} from "./Components/TableLayout";
import ApplicationBar from "./Components/ApplicationBar";
import ActionButtons from "./Components/ActionButtons";
import ResultDialog from "./Components/ResultDialog";

function App() {
  return (
    <div className={styles.appRoot}>
      <TableLayout
        rows={[
          new RowDefinition({ height: 50 }),
          new RowDefinition(),
          new RowDefinition(),
          new RowDefinition({ height: 75 }),
        ]}
        columns={[new ColumnDefinition()]}
        cells={[
          [<ApplicationBar />],
          [""],
          [""],
          [<ActionButtons />],
        ]}
      />
      <ResultDialog />
    </div>
  );
}

export default App;
