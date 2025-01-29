import { Paper, Box, IconButton } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

type ComponentProps = {
    name?: string,
    total?: number,
    due?: number,
}


export default function InvoiceCard({ name, total, due }: ComponentProps) {
    return (
        <Paper className="px-[16px] py-[23px] " >
            <Box className="flex justify-between ">
                <Box className="font-semibold" >{name}</Box>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>
            <Box className="border border-[#cecece] rounded-[5px]" sx={{ backgroundColor: '#F9FAFF', marginTop: "38px" }} >
                <Box className="flex justify-between py-[8px] px-[18px]">
                    <Box>
                        <Box className="text-[#A5A5A5]" fontSize="14px" >BALANCE DUE</Box>
                        <Box className="text-red font-semibold mt-2" fontSize="16px"> $<span>{due}</span></Box>
                    </Box>
                    <Box>
                        <Box className="text-[#A5A5A5]" fontSize="14px" >TOTAL INVOICED</Box>
                        <Box className="text-red font-semibold mt-2" fontSize="16x" >$<span>{total}</span></Box>
                    </Box>
                </Box>

            </Box>
        </Paper>
    )
}
