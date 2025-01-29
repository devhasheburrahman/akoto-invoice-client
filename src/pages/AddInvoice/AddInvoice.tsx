import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../components/InputFields/InputField'
import CartItem from './CartItem'
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import PrintTest from './PrintTest';

export default function AddInvoice() {
  const [cartItems, setCartItems] = useState<Object[]>([{quantity:1, removed:false}])
  const [totalGrandAmount, setTotalGrandAmount] = useState(0);
  const [paid, setPaid] = useState(0)
  const [discount, setDiscount] = useState(0);

  // const handleAddItem = () => {
  //   setCartItems([...cartItems, {item: 'Item Name', price: '1000', quantity: 100, description: '', discount: 0}])
  // }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setCartItems([...cartItems, {quantity:1, removed:false}])
  }

  const handleFinalSubmit = (e:React.FormEvent) => {
    e.preventDefault();
  }

  const handlePaidChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPaid(parseInt(e.target.value))
  }

  const handleDiscountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(parseInt(e.target.value))
  }

  useEffect(() => {}, [cartItems])
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" component="div">New Invoice</Typography>
      <Box className="grid grid-cols-4 gap-6 mt-5">

        {/* Content Section start */}
        <Box className="col-span-3">
          <Paper className='border-t-[4px] border-blue-500'>
            <Box className="py-[18px] px-[20px]">

              {/* 📦 Section 1 start */}
              <Box className="grid grid-cols-5">
                {/* Left */}
                <Box className="col-span-2 flex flex-col gap-5">
                  <InputField 
                    label="Bill From"
                    fullWidth
                    defaultValue="Nimur Fishing Firm"
                    required
                    />
                  <InputField 
                    label="Bill To"
                    fullWidth
                    required
                    />
                </Box>

                {/* Meddle */}
                <Box className="col-span-1">

                </Box>

                {/* Right */}
                <Box className="col-span-2 flex flex-col gap-5">
                  <InputField
                      label="Invoice Number"
                      fullWidth
                      defaultValue="INV5AL1KSD"
                      required
                    />
                  <InputField 
                    label="Due Date"
                    fullWidth
                    type="date"
                    required
                    defaultValue={`${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : (new Date().getMonth() + 1)}-${new Date().getDate()}`}
                    />
                </Box>
              </Box>
              {/* 📦 Section 1 end */}

              {/* 📦 Section 2 start */}
              <Box>
                <Box>
                  {
                    cartItems.map((cartItem, index) => (
                      <CartItem setTotalGrandAmount={setTotalGrandAmount} cartItem={cartItem} cartItems={cartItems} setCartItems={setCartItems} key={index} index={index}/>
                    ))
                  }
                </Box>              
                <Box className="mt-[30px]">
                    <Button type='submit' startIcon={<AddIcon />} variant='contained'>Add Item</Button>
                </Box>
              </Box>
              {/* 📦 Section 2 end */}

              <Box className="mt-[20px] pb-[60px] flex justify-between">
                <Box className="w-full mr-10">
                  <InputField label="Invoice Notes" defaultValue={'Thank You ♥️ Come Again'} multiline rows={2} fullWidth/>
                </Box>
                {/* <Box>
                  <Box className="flex justify-between items-center w-[280px]">
                    <Box className="font-semibold">Subtotal</Box>
                    <Box className="font-semibold">${totalGrandAmount}</Box>
                  </Box>
                  <Box className="flex justify-between items-center w-[280px] mt-[22px]">
                    <Box className="font-semibold">Balance Due</Box>
                    <Box className="font-bold text-[24px]">${totalGrandAmount-paid}</Box>
                  </Box>
                </Box> */}
              </Box>

            </Box>
          </Paper>
        </Box>
        {/* Content Section end */}

        {/* Side Section start */}
        <Box className="col-span-1">
          <Paper className='border-t-[5px] border-blue-500'>
            <Box className="flex flex-col gap-[18px] py-[18px] px-[20px]">
              <Paper elevation={0} className='border px-4 py-2 font-semibold'>
                <Box className="flex justify-between items-center">
                  <Box>Total Amount</Box>
                  <Box>${totalGrandAmount}</Box>
                </Box>
                <Box className="flex justify-between items-center mt-2">
                  <Box>Balance Due</Box>
                  <Box>${totalGrandAmount-paid-discount}</Box>
                </Box>
              </Paper>
              <InputField type="number" onChange={handlePaidChange} label="Paid Amount" fullWidth/>            
              <InputField type="number" onChange={handleDiscountChange} label="Discount" fullWidth/>      

              {/* Print Functionality */}
              <PrintTest />

                 
              <Button variant='outlined' type='submit' fullWidth startIcon={<SaveIcon />}>Save</Button>
            </Box>
            <Box className="w-full h-[2px] bg-gray-100"/>
            <Box className="px-[20px] py-[18px]">
              <Box className="flex justify-between items-center border px-[14px] py-[10px] rounded">
                <Box>Status</Box>
                <Button variant='outlined' size='small' color={`${totalGrandAmount == (paid+discount) ? 'success' : 'error'}`}>{totalGrandAmount == (paid+discount) ? 'Paid': 'Due'}</Button>
              </Box>
            </Box>
          </Paper>
        </Box>
        {/* Side Section end */}
        </Box>
    </form>
  )
}
