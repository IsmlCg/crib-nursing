import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const CustomDataTable = (props) => {
  const { columns, getData, collectionName } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [myData, setMyData] = useState();

  useEffect(() => {
    const dataPromise = getData(collectionName);
    dataPromise.then((resolvedData) => {
      setMyData(resolvedData);
    });
  }, [myData]);

  const conditionalRowStyles = [
    {
      when: (row) => selectedRows.includes(row.id),
      style: {
        backgroundColor: "#000000",
      },
    },
  ];

  return (
    <DataTable
      title="Custom DataTable"
      columns={columns}
      data={myData}
      selectableRows
      pagination
      selectableRowsHighlight
      onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)}
      conditionalRowStyles={conditionalRowStyles}
    />
  );
};

export default CustomDataTable;
