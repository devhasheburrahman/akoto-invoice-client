import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceCard from "../../components/EstimatesCard/InvoiceCard";
import { Base_Url } from "../../config/config";
import { Paths } from "../../constants/paths";

interface Invoices {
  _id: string;
  invoiceNumber: string;
  billTo: string;
  totalGrandAmount: number;
  status: string;
  date: string;
}

export default function Invoice() {
  const [invoices, setInvoices] = useState<Invoices[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filter, setFilter] = useState<string>("def");
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (date: dayjs.Dayjs | null, dateString: string) => {
    if (date && dayjs(date).isValid()) {
      setSelectedDate(date); // Keep as Dayjs
    } else {
      setSelectedDate(null);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [selectedDate, searchQuery, page, filter]);

  const fetchInvoices = async () => {
    setLoading(true);
    setError(null);
    try {
      let query = `?page=${page}&limit=10`;
      if (selectedDate) query += `&date=${selectedDate.format("YYYY-MM-DD")}`;
      if (searchQuery) query += `&search=${searchQuery}`;
      if (filter !== "def") query += `&filter=${filter}`;

      const res = await axios.get(`${Base_Url}/api/invoices${query}`);
      setInvoices(res.data.data);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching invoices:", error);
      setError("Failed to fetch invoices. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <Box>
      {/* Title */}
      <Box className="flex justify-between items-center px-">
        <Typography variant="h6">Invoice</Typography>
        <Link to={Paths.NEW_INVOICES}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            startIcon={<AddIcon />}
          >
            New Invoice
          </Button>
        </Link>
      </Box>

      {/* Search Bar */}
      <Box className="mt-4">
        <Paper className="flex gap-4 p-4" elevation={1}>
          <FormControl sx={{ width: "25%" }}>
            <Select
              value={filter}
              onChange={(event: SelectChangeEvent) =>
                setFilter(event.target.value)
              }
            >
              <MenuItem value="def" disabled>
                Filter
              </MenuItem>
              <MenuItem value="Recent">Recent</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <OutlinedInput
              placeholder="Search Invoice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "action.active", mr: 1 }} />
                </InputAdornment>
              }
            />
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
             />
          </LocalizationProvider>
        </Paper>

        {/* Invoices Grid */}
        {loading ? (
          <Typography variant="body1" className="text-center">
            Loading...
          </Typography>
        ) : error ? (
          <Typography variant="body1" color="error" className="text-center">
            {error}
          </Typography>
        ) : invoices.length === 0 ? (
          <Typography variant="h6" className="text-center mt-4">
            No invoices found.
          </Typography>
        ) : (
          <Box className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {invoices.map((invoice) => (
              <InvoiceCard
                key={invoice._id}
                name={invoice.billTo}
                due={invoice.totalGrandAmount}
                total={invoice.totalGrandAmount}
              />
            ))}
          </Box>
        )}

        {/* Pagination */}
        <Box className="flex justify-center mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Typography variant="body1" className="mx-4">
            Page {page} of {totalPages}
          </Typography>
          <Button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
