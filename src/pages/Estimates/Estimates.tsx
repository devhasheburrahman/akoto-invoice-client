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

export default function Estimates() {
  return (
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
            <div className="col-span-5">
              <p className="text-base   font-normal">To: hashebur</p>
            </div>
            <div className="col-span-4">
              <p className="text-base font-normal">Cash/Check No: fffff</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <p className="text-base font-normal">Address: anana</p>
            </div>
            <div className="col-span-4">
              <p className="text-base font-normal">Bank: sonar</p>
            </div>
            <div className="col-span-4">
              <p className="text-base font-normal">Date: 234</p>
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
                    width="50px"
                    sx={{ border: 1, borderColor: "grey.300" }}
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: 1, borderColor: "grey.300" }}
                  >
                    Indiana
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ border: 1, borderColor: "grey.300" }}
                  >
                    Indianapolis
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ border: 1, borderColor: "grey.300" }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ border: 1, borderColor: "grey.300" }}
                  >
                    -
                  </TableCell>
                </TableRow>

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
                    56789 Taka
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <TableCell colSpan={2} align="left">
          <Typography variant="body1" fontWeight="bold">
            Amount In Word:-
            <span className="font-normal capitalize">love Taka Only</span>
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
  );
}
