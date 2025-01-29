import { Box, Paper, Typography, TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material'
import React from 'react'
import Barcode from 'react-barcode';

type ComponentProps = {
    ref?: any
}

export default function Invoices1({ref}:ComponentProps) {
    return (
        <Box ref={ref}>
            <Box>
                <Typography className='text-[26px]  pt-10 pb-2 font-semibold text-center'>Nimur Fishing Firm</Typography>
                <Typography className='text-[24px] font-semibold text-center'>5620,Gazipur ,Ulipur Kurigram</Typography>
                <Box className="mt-6 flex justify-between mx-10">
                    <Box className="flex gap-2 items-end">
                        <Box> Customer Name : </Box>
                        <Box> Mr. Jhon Doe</Box>
                    </Box>
                    <Box>
                        Date : 09/23/2023
                    </Box>
                </Box>
                <hr className='my-3' />
                <Box className="flex justify-between mx-10">
                    <Box className="w-full">
                        <TableContainer component={Paper}>
                            <Table aria-label="spanning table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align='center'>Sl No</TableCell>
                                        <TableCell align='center'>Product Name.</TableCell>
                                        <TableCell align='center'>Quantity</TableCell>
                                        <TableCell align='center'>Price</TableCell>
                                        <TableCell align='center'>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell> 1.</TableCell>
                                        <TableCell align='center' >TalaPiya</TableCell>
                                        <TableCell align='center' >5</TableCell>
                                        <TableCell align='center'>180 </TableCell>
                                        <TableCell align='center'>950 </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell> 2.</TableCell>
                                        <TableCell align='center' >TalaPiya</TableCell>
                                        <TableCell align='center' >5</TableCell>
                                        <TableCell align='center'>180 </TableCell>
                                        <TableCell align='center'>950 </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell> 3.</TableCell>
                                        <TableCell align='center' >TalaPiya</TableCell>
                                        <TableCell align='center' >5</TableCell>
                                        <TableCell align='center'>180 </TableCell>
                                        <TableCell align='center'>950 </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell> 4.</TableCell>
                                        <TableCell align='center' >TalaPiya</TableCell>
                                        <TableCell align='center' >5</TableCell>
                                        <TableCell align='center'>180 </TableCell>
                                        <TableCell align='center'>950 </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >5.</TableCell>
                                        <TableCell align='center'>TalaPiya</TableCell>
                                        <TableCell align='center'>5</TableCell>
                                        <TableCell align='center' >180 </TableCell>
                                        <TableCell align='center'>950 </TableCell>
                                    </TableRow>


                                    <TableRow >
                                        <TableCell align='right' colSpan={4}>Total</TableCell>
                                        <TableCell align="center"> 1800</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
                <Box className="flex justify-center my-5">
                    <Barcode value="Bill id : #1222211" />
                </Box>
                <Box >
                    <Box className="text-center py-2 text-lg">Thanks you for your purchase</Box>
                </Box>
            </Box>
        </Box>
    )
}
