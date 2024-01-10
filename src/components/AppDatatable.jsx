import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOMServer from "react-dom/server";
import { Button } from "react-bootstrap";

const DataTable = ({ col, data, datatableUpdate }) => {
  const [myData, setMyData] = useState([]);
  const handleButtonClick = (e, id) => {
    e.preventDefault();
    console.log("Row Id", id);
  };
  useEffect(() => {
    const dataPromise = data;

    dataPromise.then((resolvedData) => {
      // Adding a new property 'option' to each data row
      const addOptionButton = resolvedData.map((row) => ({
        ...row,
        option: row.id,
      }));

      setMyData(addOptionButton);
    });
  }, [data]);

  useEffect(() => {
    // Initialize DataTable when the component mounts

    const table = $("#datatable").DataTable({
      data: myData,
      columns: [
        ...col,
        {
          data: "option",
          title: "Options",
          button: true,
          render: function (data) {
            // Render the React component as a string
            return ReactDOMServer.renderToString(data);
          },
        },
      ],
      lengthMenu: [2, 10, 50, 100],
    });

    // Destroy DataTable when the component unmounts
    return () => {
      table.destroy();
    };
  }, [myData, col]); // Watch for changes in 'myData'

  return (
    <table id="datatable" className="table table-striped table-bordered">
      {/* ... */}
    </table>
  );
};

export default DataTable;
