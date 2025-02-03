import { Box, Button, Paper, Typography } from "@mui/material";
import InputField from "../../components/InputFields/InputField";

export default function Settings() {
  return (
    <Paper className="h-full p-2">
      <Typography variant="h5">Setting</Typography>
      <Box className="flex-col flex gap-5 p-5">
        <Box>
          <InputField
            defaultValue="Dokan Online Shop"
            label="Office Name"
            className="w-[322px]"
          />
        </Box>
        <Box>
          <InputField
            defaultValue="+8801777441366"
            label="Phone Number"
            className="w-[322px]"
          />
        </Box>
        <Box>
          <InputField
            defaultValue="dev.hashsebur@gmail.com"
            label="Email"
            className="w-[322px]"
          />
        </Box>
        <Box>
          <InputField
            defaultValue="383.UK,Bangladesh"
            label="Address"
            className="w-[322px]"
          />
        </Box>
      </Box>
      <Box className="flex justify-center">
        <Button size="large" variant="contained">
          Update
        </Button>
      </Box>
    </Paper>
  );
}
