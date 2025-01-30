import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type ComponentProps = {
  ref?: any;
  data: any;
};

type CartItem = {
  name: string;
  drCrNo: string;
  amount: number;
};

export default function Invoices1({ ref, data }: ComponentProps) {
  console.log("invoice Print", data);
  return (
    <Box ref={ref}>
      <Box>
        <Box
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            padding: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Header */}
          <Typography variant="h5" align="center" gutterBottom>
            AKOTA BANSREE TOWER
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            BLock-N,Bansree Eastern Housing LTD.
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            PAYMENT VOUCHER
          </Typography>

          {/* Address and Date Section */}
          <div className="border border-gray-400 px-4 py-2">
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-4">
                <p className="text-base   font-normal">To: {data.billTo}</p>
              </div>
              <div className="col-span-4">
                <p className="text-base font-normal">
                  Cash/Check No: {data.checkNo}
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-base font-normal">
                  InvoiceNO: {data.invoiceNumber}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <p className="text-base font-normal">Address: {data.address}</p>
              </div>
              <div className="col-span-4">
                <p className="text-base font-normal">Bank: {data.bankName}</p>
              </div>
              <div className="col-span-4">
                <p className="text-base font-normal">Date: {data.date}</p>
              </div>
            </div>
          </div>

          <Box>
            <TableContainer
              component={Box}
              sx={{ border: 1, borderColor: "grey.400" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      width="10px"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      SL
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      Particulars
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      DR/CR NO
                    </TableCell>
                    <TableCell
                      align="center"
                      width="100px"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.cartItems.map((item: any, index: any) => (
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ border: 1, borderColor: "grey.300" }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: 1, borderColor: "grey.300" }}
                      >
                        <p>{item.item}</p>
                        <p className="text-xs">{item.description}</p>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: 1, borderColor: "grey.300" }}
                      >
                        {item.price} X {item.quantity}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: 1, borderColor: "grey.300" }}
                      >
                        {parseInt(item.price) * parseInt(item.quantity)}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    ></TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    ></TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: 1, borderColor: "grey.300" }}
                    >
                      {data.totalGrandAmount} Tk
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <TableCell colSpan={2} align="left">
            <Typography variant="body1" fontWeight="bold">
              Amount In Word:-
              <span className="font-normal capitalize">
                {data.totalInWords} Taka Only
              </span>
            </Typography>
          </TableCell>
          {/* Footer Section */}
          <Box className="mx-auto">
            <Grid container mt="20px" spacing={2}>
              <Grid item xs={3}>
                <Typography variant="body1">Prepared By</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">Manager</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">Approved By</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">Approved By</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
