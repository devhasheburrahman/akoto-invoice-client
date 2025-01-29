import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";

type ComponentProps = {};

export default function PrivateLayout({}: ComponentProps) {
  return (
    <Box>
      {/* Appbar */}
      <Appbar />

      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Paper
          sx={{
            width: 256,
            minHeight: "100vh",
            position: "sticky",
            top: 0,
          }}
        >
          <Sidebar />
        </Paper>

        {/* Main content */}
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
