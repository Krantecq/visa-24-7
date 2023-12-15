import React, { CSSProperties, useState, useEffect } from "react";
import { DatePicker } from "antd";
import Papa from "papaparse";
import moment from "moment";
import { CloseOutlined, DeleteOutline } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WalletFormView from "./WalletFormView";
import { toast } from "react-toastify";
import axiosInstance from "../helpers/axiosInstance";
import { FcInfo } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import { Pagination } from "react-bootstrap";

type Props = {
  className: string;
  title: String;
  data: any[];
  loading: Boolean;
};
const overlayStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s, visibility 0.3s",
};

const activeOverlayStyle: CSSProperties = {
  opacity: 1,
  visibility: "visible",
};
const contentStyle: CSSProperties = {
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "5px",
  width: "70%",
  height: "70%",
  overflowY: "auto",
};

const ITEMS_PER_PAGE = 10;

const WalletTable: React.FC<Props> = ({ className, title, data, loading }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSelectedItem, setDeleteSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const [issueDate, setIssueDate] = useState<string | undefined>("");
  const [expiryDate, setExpiryDate] = useState<string | undefined>("");
  const [activePage, setActivePage] = useState<number>(1);
  const [filteredData, setFilteredData] = useState(data as any[]);
  const [filteredDataa, setFilteredDataa] = useState(
    data.slice(0, ITEMS_PER_PAGE)
  );

  useEffect(() => {
    setFilteredDataa(data.slice(0, ITEMS_PER_PAGE));
  }, [data]);

  const calculateTotalPages = () => Math.ceil(data.length / ITEMS_PER_PAGE);

  const generatePaginationItems = () => {
    const totalPages = calculateTotalPages();

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }).map((_, index) => (
        <Pagination.Item
          key={`page-${index + 1}`}
          active={index + 1 === activePage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ));
    } else {
      let visiblePages: (number | string)[] = [];
      if (activePage <= 4) {
        visiblePages = [1, 2, 3, 4, 5, '...', totalPages - 1, totalPages];
      } else if (activePage >= totalPages - 3) {
        visiblePages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        visiblePages = [1, '...', activePage - 1, activePage, Number(activePage) + 1, '...', totalPages.toString()];
      }

      return visiblePages.map((page, index) => (
        <Pagination.Item
          key={`page-${index}`}
          active={page === activePage}
          onClick={() => handlePageChange(typeof page === 'number' ? page : activePage)}
        >
          {page === '...' ? (
            <span style={{ cursor: 'not-allowed' }}>{page}</span>
          ) : (
            page
          )}
        </Pagination.Item>
      ));
    }
  };

  
  const handlePageChange = (page: number | string) => {
    const pageNumber = typeof page === 'string' ? parseInt(page, 10) : page;
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setActivePage(pageNumber);
    if (issueDate && expiryDate) {
      setFilteredDataa(filteredData.slice(startIndex, endIndex));
    } else {
      setFilteredDataa(data.slice(startIndex, endIndex));
    }
  };
  

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = moment(date).format("DD MMM YYYY");
    const formattedTime = moment(date).format("hh:mm a");
    return `${formattedDate} ${formattedTime}`;
  };

  useEffect(() => {
    setFilteredDataa(filteredData.slice(0, ITEMS_PER_PAGE));
    setActivePage(1);
  }, [filteredData, ITEMS_PER_PAGE]);
  
  const handleDatePickerChange = (value: any) => {
    if (value && value.length === 2) {
      const startDate = value[0]?.isValid() ? value[0].format("YYYY-MM-DD") : "";
      const endDate = value[1]?.isValid() ? value[1].format("YYYY-MM-DD") : "";
      const filtered = data.filter((item) => {
        const transactionDate = item.created_at.split(" ")[0];
        return transactionDate >= startDate && transactionDate <= endDate;
      });
  
      // Update issueDate, expiryDate, and filteredData
      setIssueDate(startDate);
      setExpiryDate(endDate);
      setFilteredData(filtered);
  
      // Reset active page to 1 after applying date filter
      setActivePage(1);
  
      // Update filteredDataa based on the first page
      setFilteredDataa(filtered.slice(0, ITEMS_PER_PAGE));
    } else {
      // If date range is not selected, reset filters and data
      setFilteredData(data as any[]);
      setActivePage(1);
      setIssueDate("");
      setExpiryDate("");
      setFilteredDataa(data.slice(0, ITEMS_PER_PAGE));
    }
  };


  const handleDownloadCSVWalletTable = () => {
    const csvData = convertToCSV(filteredData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wallet_table.csv";

    a.click();
    URL.revokeObjectURL(url);
  };

  function convertToCSV(data: any) {
    const csv = Papa.unparse(data);
    return csv;
  }

  const getFilteredData = () => {
    if (filter === "waitingForApproval") {
      return data.filter((item) => item.status === "In-processed");
    }
    if (filter === "history") {
      return data.filter((item) => item.status != "In-processed");
    } else {
      return data;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleApproveClick = async (item) => {
    const response = await axiosInstance.post("/backend/approve_transaction", {
      wallet_id: item._id,
      merchant_id: item.merchant_id,
    });

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: "top-center",
      });

      window.location.reload();
    } else {
      console.log(response.data);
      toast.error(response.data.msg, {
        position: "top-center",
      });
    }
  };

  const handleClickOpen = (item) => {
    setDeleteSelectedItem(item);
    setOpen(!open);
  };

  const handleClose = () => {
    setDeleteSelectedItem(null);
    setOpen(false);
  };

  const handleVisibilityClick = (item) => {
    setSelectedItem(item);
    setVisible(true);
  };
  const handleCloseClick = () => {
    setSelectedItem(null);
    setVisible(false);
  };

  const handleDeleteConfirmation = async () => {
    try {
      if (deleteSelectedItem) {
        const selectedEntry = deleteSelectedItem as { _id: string };
        if (deleteSelectedItem == null) {
          toast.error("Selected entry is null", {
            position: "top-center",
          });
        }
        const response = await axiosInstance.post(
          "/backend/decline_transaction",
          {
            wallet_id: selectedEntry._id,
          }
        );

        if (response.status === 200) {
          toast.success(response.data.msg, {
            position: "top-center",
          });

          window.location.reload();
        } else {
          console.log(response.data);
          toast.error(response.data.msg, {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.error("API error:", error);
    }

    setSelectedItem(null);
    setOpen(false);
  };

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };
  return (
    <div style={{ boxShadow: "none" }} className={`card ${className}`}>
      <div className="card-header border-0 pt-5">
        <h3
          style={{ marginLeft: "10px" }}
          className="card-title align-items-center flex-row"
        >
          <span className="card-label fw-bold fs-3 mb-1">{title}</span>
        </h3>
        <div className="fv-row" style={{ position: "relative", right: "0%" }}>
          <DatePicker.RangePicker
            style={{
              backgroundClip: "#fff",
              width: 400,
              marginTop: 11,
              border: "1px solid #808080",
              borderRadius: 10,
              padding: 10,
            }}
            onChange={handleDatePickerChange}
          />
        </div>
        <div
          style={{
            gap: "10px",
            padding: "10px 0px",
          }}
          className="dropdown d-flex g-3"
        >
          <button
            style={{
              fontWeight: "600",
              right: "0%",
              padding: "0px 5px",
              backgroundColor: "transparent",
              color: "black",
              borderRadius: "10px",
              border: "1px solid #327113",
              zIndex: 1,
              width: "135px",
            }}
            onClick={handleDownloadCSVWalletTable}
          >
            Download CSV
          </button>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterClick("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterClick("waitingForApproval")}
              >
                Waiting For Approval
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterClick("history")}
              >
                History
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body py-3">
        <div className="table-responsive">
          {loading ? (
            <div
              style={{
                height: 300,
                overflowX: "hidden",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <span className="indicator-progress" style={{ display: "block" }}>
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </div>
          ) : (
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
              <thead>
                <tr
                  style={{
                    background: "#f2f2f2",
                    color: "#000",
                    border: "1px solid #000",
                  }}
                  className="fw-bold"
                >
                  <th
                    style={{ paddingLeft: "2%" }}
                    className="min-w-100px text-start"
                  >
                    Created at
                  </th>
                  <th className="min-w-100px text-center">Name</th>
                  <th className="min-w-100px text-center">Company</th>
                  <th className="min-w-100px text-center">Transaction Id</th>
                  <th className="min-w-70px text-center">Amount</th>
                  <th className="min-w-100px text-center">Status</th>
                  <th className="min-w-100px text-center">Actions</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid #cccccc" }}>
                {filteredDataa.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td className="text-center">
                      <a className="text-dark fw-bold text-hover-primary d-block fs-6">
                        {`${formatDate(row.created_at)}`}
                      </a>
                    </td>
                    <td className="text-center">
                      <a className="text-dark text-hover-primary d-block fs-6">
                        {row.merchant_name}
                      </a>
                    </td>
                    <td className="text-center">
                      <a className="text-dark text-hover-primary d-block fs-6">
                        {row.merchant_company_name}
                      </a>
                    </td>
                    <td className="text-center">
                      <a className="text-dark text-hover-primary d-block fs-6">
                        {row.upi_ref_id}
                      </a>
                    </td>
                    <td className="text-start">
                      <a
                        style={{ marginLeft: "10px" }}
                        className="text-dark text-hover-primary d-block fs-6"
                      >
                        ₹{" "}
                        {new Intl.NumberFormat("en-IN").format(
                          Number(row.wallet_balance)
                        )}
                      </a>
                    </td>
                    <td className="text-center">
                      <a className="text-dark text-hover-primary d-block fs-6">
                        {row.status}
                      </a>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0">
                        <FcInfo
                          style={{ fontSize: "20px" }}
                          className="mx-5 cursor-pointer"
                          onClick={() => handleVisibilityClick(row)}
                        />
                        <FcFullTrash
                          style={{ fontSize: "20px" }}
                          onClick={() => {
                            handleClickOpen(row);
                          }}
                          className="mx-5 cursor-pointer"
                        />
                        {row.status === "In-processed" && (
                          <button
                            style={{ background: "#327113" }}
                            className="btn btn-success align-self-center"
                            onClick={() => handleApproveClick(row)}
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <Pagination>
          {generatePaginationItems()}
        </Pagination>
      </div>
      {visible && (
        <div
          className="loader-overlay"
          style={{ ...overlayStyle, ...(visible && activeOverlayStyle) }}
        >
          <div style={contentStyle}>
            <div
              onClick={() => handleCloseClick()}
              style={{
                backgroundColor: "#d3d3d3",
                padding: "9px",
                position: "absolute",
                top: "15%",
                left: "84.5%",
                transform: "translate(-35%, -40%)",
                borderRadius: 20,
                cursor: "pointer",
              }}
            >
              <CloseOutlined />
            </div>
            <WalletFormView viewApplication={selectedItem} />
          </div>
        </div>
      )}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            style={{ cursor: "move", color: "red" }}
            id="draggable-dialog-title"
          >
            Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to reject this transaction?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirmation}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export { WalletTable };
