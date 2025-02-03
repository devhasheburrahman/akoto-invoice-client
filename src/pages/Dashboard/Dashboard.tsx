import EventNoteIcon from "@mui/icons-material/EventNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard";
import DonutChart from "../../components/PieChart/DonutChart";
import { Base_Url } from "../../config/config";

interface Invoice {
  id: string;
  amount: number;
  date: string;
  billTo: string;
  totalGrandAmount: number;
  status: string;
  invoiceNumber: string;
}

export default function Dashboard() {
  const [invoice, setInvoice] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${Base_Url}/api/invoices/today`);
        setInvoice(result.data.data);
        console.log(result.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  
  return (
    <Box>
      {/* card  */}
      <Box className="my-2 font-bold"> Dashboard</Box>
      <Box className="grid grid-cols-4 gap-[33px]">
        <Box className="bg-[#50D27E] col-span-1 rounded-[10px]">
          <DashBoardCard date="Total" balance={100000} />
        </Box>
        <Box className="bg-[#F87E26] col-span-1 rounded-[10px]">
          <DashBoardCard date="Yesterday Sale" balance={100000} />
        </Box>
        <Box className="bg-[#2152F8] col-span-1 rounded-[10px]">
          <DashBoardCard date="18/09/2023" balance={100000} />
        </Box>
        <Box className="bg-[#AD32E4] col-span-1 rounded-[10px]">
          <DashBoardCard date="19/09/2023" balance={100000} />
        </Box>
      </Box>

      <Box className="flex mt-[40px] justify-between gap-5 ">
        {/*  progress */}
        <Box className="w-full">
          <Paper className="  px-[22px] py-[20px]">
            <Box className="flex justify-between">
              <Box>
                <Box className="text-base">Total print</Box>
                <Box className="text-black font-bold text-[22px]">
                  <EventNoteIcon /> 30/100
                </Box>
              </Box>
              <Box>
                <Button variant="outlined" color="success">
                  Free Trail
                </Button>
              </Box>
            </Box>
            <LinearProgress
              sx={{
                height: 20,
                borderRadius: 5,
                marginTop: 2,
              }}
              variant="determinate"
              value={30}
            />
          </Paper>
          {/*Recent Invoices  */}
          <Paper>
            <Box className="w-full mt-[44px] px-[22px] py-[25px] flex flex-col items-center">
              <Box className="text-[18px] mb-[42px] font-semibold">
                Recent Invoices
              </Box>

              {loading ? (
                <Box className="flex justify-center items-center w-full h-40">
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Box className="text-red-500 font-semibold">Error: {error}</Box>
              ) : invoice.length === 0 ? (
                <Box className="text-gray-500 font-semibold">
                  No invoices available
                </Box>
              ) : (
                <TableContainer>
                  <Table aria-label="spanning table">
                    <TableHead>
                      <TableCell align="left">Sl</TableCell>
                      <TableCell align="left">Billing To</TableCell>
                      <TableCell align="left">Total Amount</TableCell>
                      <TableCell align="left">Invoice No</TableCell>
                      <TableCell align="left">Status</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableHead>

                    {invoice.map((item, index) => (
                      <TableBody key={index}>
                        <TableCell align="left">{index + 1}.</TableCell>
                        <TableCell align="left">{item.billTo}</TableCell>
                        <TableCell align="center">
                          {item.totalGrandAmount}
                        </TableCell>
                        <TableCell align="left">{item.invoiceNumber}</TableCell>
                        <TableCell align="left">{item.status}</TableCell>
                        <TableCell align="center">
                          <VisibilityIcon />
                        </TableCell>
                      </TableBody>
                    ))}
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Paper>
        </Box>
        <Box className="w-[250px]">
          <Paper className="w-full">
            <Box>
              <Box className="font-semibold px-3 py-3">Statistic</Box>
              {/* Chart */}
              <DonutChart />
              {/* details */}
              <Box className="p-3 my-5">
                <Box className="flex py-2 justify-between">
                  <Box className="flex items-center  w-[50%] gap-2 ">
                    <Box className="h-4 w-4 rounded-full   bg-[#2152F8]"></Box>
                    <Box className="text-[14px]">Today</Box>
                  </Box>
                  <Box className="flex items-center justify-center w-[50%] gap-2 ">
                    <Box className="h-4 w-4 rounded-full bg-[#50D27E]"></Box>
                    <Box className="text-[14px]  ">Yesterday</Box>
                  </Box>
                </Box>
                <Box className="flex gap-5">
                  <Box className="flex items-center justify-center w-[50%] gap-2 ">
                    <Box className="h-4 w-4 rounded-full bg-[orange]"></Box>
                    <Box className="text-[14px]  ">18/09/2023</Box>
                  </Box>
                  <Box className="flex items-center   w-[50%] gap-2 ">
                    <Box className="h-4 w-4 rounded-full bg-[red]"></Box>
                    <Box className="text-[14px]  ">17/09/2023</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
