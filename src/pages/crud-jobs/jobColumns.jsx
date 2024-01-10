const dynamicColumns = [
  {
    name: "ID",
    selector: (row) => row.id.substring(0, 5) + "...",
    sortable: true,
  },
  {
    name: "Job Title",
    selector: (row) => row.jobtitle_job,
    sortable: true,
  },
  {
    name: "Qualification",
    selector: (row) => row.qualification_job,
    sortable: true,
  },
  {
    name: "Job Description",
    selector: (row) => row.jobdescription_job.substring(0, 20) + "...",
    sortable: true,
  },

  {
    name: "Options",
    cell: (row) => (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          onClick={() => handleDeleteJob(row.id)}
          className="btn btn-soft-danger btn-sm"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => showModalHandler(row)}
          className="btn btn-soft-warning btn-sm"
        >
          Update
        </button>
      </div>
    ),
  },
];

export default dynamicColumns;
