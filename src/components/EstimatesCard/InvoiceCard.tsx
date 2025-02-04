import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Paper, Typography } from "@mui/material";

type ComponentProps = {
  name?: string;
  total?: number;
  totalAmountWork?: string;
  due?: number;
  invoiceNumber: string;
  invoiceDate: string;
  status: string;
  invoiceNote: string;
};

export default function InvoiceCard({
  name,
  total,
  due,
  totalAmountWork,
  invoiceNumber,
  invoiceDate,
  status,
  invoiceNote,
}: ComponentProps) {
  return (
    <Paper className="p-4 shadow-md rounded-lg border border-gray-200">
      {/* Invoice Date */}
      <Box className="text-right text-sm text-gray-500">{invoiceDate}</Box>

      {/* Name & More Icon */}
      <Box className="flex justify-between items-center mt-2">
        <Typography variant="h6" className="font-semibold text-gray-700">
          {name}
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Invoice Number */}
      <Typography className="text-gray-500 text-sm mt-1">
        Invoice No:
        <span className="font-medium text-gray-700">{invoiceNumber}</span>
      </Typography>

      {/* Status */}
      {/* <Box
        className="mt-2 p-2 rounded-md text-center text-white"
        sx={{ backgroundColor: status === "Paid" ? "#4CAF50" : "#F44336" }}
      >
        {status}
      </Box> */}

      {/* Amount Details */}
      <Box className="border border-gray-300 rounded-md mt-4 p-3 bg-gray-50">
        <Box className="flex justify-between items-center">
          <Typography className="text-gray-600 text-sm">
            Total Balance:
          </Typography>
          <Typography className="text-red-500 font-semibold text-md">
            ${total}
          </Typography>
        </Box>
        <Box className="flex justify-between items-center mt-2">
          <Typography className="text-gray-600 text-sm">Status</Typography>
          <Typography
            className={`font-semibold text-md ${
              status === "Paid" ? "text-[#4CAF50]" : "text-[#F44336]"
            }`}
          >
            {status}
          </Typography>
        </Box>
        <Box className="flex justify-between items-center mt-2">
          <Typography className="text-green-600 font-semibold text-md">
            {totalAmountWork}
          </Typography>
        </Box>
      </Box>

      {/* Invoice Note */}
      <Box className="mt-3 text-gray-500 text-sm italic">{invoiceNote}</Box>
    </Paper>
  );
}
