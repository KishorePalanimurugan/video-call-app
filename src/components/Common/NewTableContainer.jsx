import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col, Button, Input } from "reactstrap";
// import { Filter, DefaultColumnFilter } from "../../components/common/Filters";
// import JobListGlobalFilter from "../../components/common/GlobalSearchFilter";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  // isJobListGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = (value) => {
    setGlobalFilter(value || undefined);
  };

  return (
    <React.Fragment>
      <Col xxl={3} lg={6}>
        <input
          type="search"
          className="form-control"
          id="search-bar-0"
          value={value || ""}
          placeholder={`${count} records...`}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </Col>
      {/* {isJobListGlobalFilter && (
        <JobListGlobalFilter setGlobalFilter={setGlobalFilter} />
      )} */}
    </React.Fragment>
  );
}

const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  customPageSizeOptions,
  isShowingPageLength,
  isPagination,
  paginationDiv,
  pagination,
  iscustomPageSizeOptions,
  theadClass,
  // isJobListGlobalFilter,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  const buttonStyle = {
    backgroundColor: "#E50000",
    borderColor: "#E50000",
    color: "#fff",
  };

  return (
    <Fragment>
      <Row className="mb-2">
        {iscustomPageSizeOptions && (
          <Col md={customPageSizeOptions ? 2 : 1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            // isJobListGlobalFilter={isJobListGlobalFilter}
          />
        )}
        {isAddOptions && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                style={buttonStyle}
                className="btn-rounded mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                style={buttonStyle}
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                style={buttonStyle}
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      {/* <div className="table-responsive react-table">
        <Table {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    className={column.isSort ? "sorting" : ""}
                  >
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div> */}
                    {/* <Filter column={column} /> */}
                  {/* </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div> */}
      
      <div className="table-responsive react-table">
        <Table
          {...getTableProps()}
          className={`${tableClass} table-auto`} // Add table-auto class
          style={{ width: "auto", tableLayout: "auto" }} // Ensures columns adjust automatically
        >
          <thead className={theadClass}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    className={column.isSort ? "sorting" : ""}
                    style={{ whiteSpace: "nowrap", textAlign: "left" }} // Ensures the header text fits
                  >
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => (
                      <td
                        key={cell.id}
                        {...cell.getCellProps()}
                        style={{
                          whiteSpace: "nowrap", // Prevents overflowing of long text
                          textAlign: "left", // Aligns content to the left
                          wordBreak: "break-word", // Wraps text when necessary
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>

      {isPagination && (
        <Row className="justify-content-md-end justify-content-center align-items-center">
          <Col className="col-md-auto">
            <div className="d-flex gap-1">
              <Button
                style={buttonStyle}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </Button>
              <Button
                style={buttonStyle}
                onClick={previousPage}
                disabled={!canPreviousPage}
              >
                {"<"}
              </Button>
            </div>
          </Col>

          <Col className="col-md-auto d-none d-md-block">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Col>

          <Col className="col-md-auto">
            <Input
              type="number"
              min={1}
              style={{ width: 70 }}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>

          <Col className="col-md-auto">
            <div className="d-flex gap-1">
              <Button
                style={buttonStyle}
                onClick={nextPage}
                disabled={!canNextPage}
              >
                {">"}
              </Button>
              <Button
                style={buttonStyle}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;