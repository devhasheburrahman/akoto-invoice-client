import React from 'react'
import { Box, Paper, Typography, Button, FormControl, Select, MenuItem, SelectChangeEvent, OutlinedInput, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InvoiceCard from '../../components/EstimatesCard/InvoiceCard';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/paths';

export default function Invoice() {


  const [Name, setName] = React.useState('def');

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  return (
    <Box>
      {/* title */}
      <Box className='flex justify-between items-center px-'>
        <Typography variant="h6" component="div">Invoice</Typography>
        <Link to={Paths.NEW_INVOICES}>
          <Button variant='contained' size="large" color="primary" startIcon={<AddIcon />}>
            New Invoice
          </Button>
        </Link>
      </Box>
      {/* search bar  */}
      <Box className="mt-[10px]">
        <Paper className='flex gap-4 p-4' elevation={0.0}>
          <FormControl sx={{ width: "25%" }}>
            <Select
              value={Name}
              onChange={handleChange}
            >
              <MenuItem value="def" disabled >Filter</MenuItem>
              <MenuItem value="Recent">Recent</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <OutlinedInput placeholder='Search ...'
              startAdornment={<InputAdornment position="start">
                <SearchIcon sx={{ color: 'action.active', mr: 1, }} />
              </InputAdornment>}
            />
          </FormControl>
        </Paper>

        <Box className="mt-[32px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[17px]">
          <InvoiceCard name="Graphic" due={230} total={23000} />
          <InvoiceCard name="Graphic" due={230} total={2000} />
          <InvoiceCard name="Graphic" due={230} total={2000} />
          <InvoiceCard name="Graphic" due={230} total={2000} />
          <InvoiceCard name="Graphic" due={230} total={2000} />

        </Box>
      </Box>
    </Box>
  )
}
