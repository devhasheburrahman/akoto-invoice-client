import React, { useState } from 'react'
import { Box, Paper, Button } from '@mui/material'
import InputField from '../../components/InputFields/InputField'
import AddIcon from '@mui/icons-material/Add';

type ComponentProps = {
    index: number;
    cartItem: any;
    cartItems: any[];
    setCartItems: any;
    setTotalGrandAmount: any;
}

export default function CartItem({ index, cartItem, cartItems, setCartItems, setTotalGrandAmount }: ComponentProps) {

    const [formValues, setFormValues] = useState<any>({})
    const [showBtn, setShowBtn] = useState(true)
    const [itemPrice, setItemPrice] = useState(parseInt(cartItem.price) || 0)
    const [itemQty, setItemQty] = useState(1)
    const [itemDiscount, setItemDiscount] = useState(0)

    console.log(index, cartItem)

    const handleSummaryCalculation = (itemList: any) => {
        let totalGrandAmount = 0;
        itemList.map((item: any) => {
            if (!item.removed) {
                totalGrandAmount = totalGrandAmount + (parseInt(item?.price || 0) * parseInt(item?.quantity || 0) - parseInt(item?.discount || 0))
            }
        })
        setTotalGrandAmount(totalGrandAmount);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name == 'price') setItemPrice(parseInt(e.target.value) || 0)
        if (e.target.name == 'quantity') setItemQty(parseInt(e.target.value) || 0)
        if (e.target.name == 'discount') setItemDiscount(parseInt(e.target.value) || 0)

        const newCartItems = cartItems;
        const newFormValues: any = newCartItems[index];
        newFormValues[e.target.name] = e.target.value;
        setFormValues(newCartItems)
        handleSummaryCalculation(newCartItems);
    }

    const handleRemove = () => {
        const activeItems = cartItems.filter(item => !item.removed)
        if (activeItems.length < 2) return;

        let newCartItems: any = [];
        cartItems.map((item, mIndex) => {
            console.log(mIndex, index)
            if (mIndex == index) {
                newCartItems = [...newCartItems, { ...item, removed: true }]
            } else {
                newCartItems = [...newCartItems, item]
            }
        })

        setCartItems(newCartItems)
        handleSummaryCalculation(newCartItems);
    }
    return (
        <Paper>
            <Box className={`mt-10 flex border rounded-[6px] overflow-hidden relative ${cartItem.removed ? 'hidden' : ''}`}>
                <Box onClick={handleRemove} className="absolute right-2 top-0 border-l border-b pl-1.5 cursor-pointer">X</Box>
                <Box className="w-[42px] bg-[#F6F5FB] flex items-center justify-center text-[20px] font-bold">{index + 1}</Box>
                <Box className="flex-grow flex">
                    <Box className="flex-grow col-span-4 px-[18px] py-[12px]">
                        <Box className="grid grid-cols-4 gap-[10px]">
                            <InputField defaultValue={cartItem?.item} onChange={handleChange} required name="item" label="Item" className="col-span-2" fullWidth />
                            <InputField onChange={handleChange} InputProps={{ inputProps: { min: 0, max: 100000 } }} type="number" defaultValue={0} name="price" required label="Price" className="col-span-1" fullWidth />
                            <InputField onChange={handleChange} InputProps={{ inputProps: { min: 0, max: 100000 } }} type="number" defaultValue={1} name="quantity" required label="Qantity" className="col-span-1" fullWidth />
                        </Box>
                        <Box className=" mt-[10px]">
                            <InputField onChange={handleChange} name="description" label="Description" fullWidth />
                        </Box>
                    </Box>

                    {/*  */}

                    <Box className="min-w-[180px] py-[12px] pr-[20px] h-full flex flex-col justify-center">
                        <Box className="flex justify-between items-center mt-2">
                            <Box className="text-[16px] font-semibold mr-6">Item Total</Box>
                            <Box className="font-semibold">{(itemPrice * itemQty) - itemDiscount} TK</Box>
                        </Box>
                        {/* <Box>
                        <InputField onChange={handleChange} InputProps={{ inputProps: { min: 0, max: 100000 } }} type="number" name="discount" fullWidth label="Discount"/>
                    </Box> */}
                        {/* <Box className="flex justify-between items-center">
                        <Box className="text-[16px] font-semibold">Balance Due</Box>
                        <Box className="text-[24px] font-bold">10,000.00 TK</Box>
                    </Box> */}
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
