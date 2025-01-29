// import { Box, Paper } from "@mui/material";
// import React, { useState } from "react";
// import InputField from "../../components/InputFields/InputField";

// type ComponentProps = {
//   index: number;
//   cartItem: any;
//   cartItems: any[];
//   setCartItems: any;
//   setTotalGrandAmount: any;
// };

// export default function CartItem({
//   index,
//   cartItem,
//   cartItems,
//   setCartItems,
//   setTotalGrandAmount,
// }: ComponentProps) {
//   const [formValues, setFormValues] = useState<any>({});
//   const [itemPrice, setItemPrice] = useState(parseInt(cartItem.price) || 0);
//   const [itemQty, setItemQty] = useState(1);

//   //   console.log(index, cartItem);

//   const handleSummaryCalculation = (itemList: any) => {
//     let totalGrandAmount = 0;
//     itemList.map((item: any) => {
//       if (!item.removed) {
//         totalGrandAmount =
//           totalGrandAmount +
//           (parseInt(item?.price || 0) * parseInt(item?.quantity || 0) -
//             parseInt(item?.discount || 0));
//       }
//     });
//     setTotalGrandAmount(totalGrandAmount);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.name == "price") setItemPrice(parseInt(e.target.value) || 0);
//     if (e.target.name == "quantity") setItemQty(parseInt(e.target.value) || 0);

//     const newCartItems = cartItems;
//     const newFormValues: any = newCartItems[index];
//     newFormValues[e.target.name] = e.target.value;
//     setFormValues(newCartItems);
//     handleSummaryCalculation(newCartItems);
//   };

//   const handleRemove = () => {
//     const activeItems = cartItems.filter((item) => !item.removed);
//     if (activeItems.length < 2) return;

//     let newCartItems: any = [];
//     cartItems.map((item, mIndex) => {
//       console.log(mIndex, index);
//       if (mIndex == index) {
//         newCartItems = [...newCartItems, { ...item, removed: true }];
//       } else {
//         newCartItems = [...newCartItems, item];
//       }
//     });

//     setCartItems(newCartItems);
//     handleSummaryCalculation(newCartItems);
//   };
//   return (
//     <Paper>
//       <Box
//         className={`mt-10 flex border rounded-[6px] overflow-hidden relative ${
//           cartItem.removed ? "hidden" : ""
//         }`}
//       >
//         <Box
//           onClick={handleRemove}
//           className="absolute right-2 top-0 border-l border-b pl-1.5 cursor-pointer"
//         >
//           X
//         </Box>
//         <Box className="w-[42px] bg-[#F6F5FB] flex items-center justify-center text-[20px] font-bold">
//           {index + 1}
//         </Box>
//         <Box className="flex-grow flex">
//           <Box className="flex-grow col-span-4 px-[18px] py-[12px]">
//             <Box className="grid grid-cols-4 gap-[10px]">
//               <InputField
//                 defaultValue={cartItem?.item}
//                 onChange={handleChange}
//                 required
//                 name="item"
//                 label="Item"
//                 className="col-span-2"
//                 fullWidth
//               />
//               <InputField
//                 onChange={handleChange}
//                 InputProps={{ inputProps: { min: 0, max: 100000 } }}
//                 type="number"
//                 defaultValue={0}
//                 name="price"
//                 required
//                 label="Price"
//                 className="col-span-1"
//                 fullWidth
//               />
//               <InputField
//                 onChange={handleChange}
//                 InputProps={{ inputProps: { min: 0, max: 100000 } }}
//                 type="number"
//                 defaultValue={1}
//                 name="quantity"
//                 required
//                 label="Qantity"
//                 className="col-span-1"
//                 fullWidth
//               />
//             </Box>
//             <Box className=" mt-[10px]">
//               <InputField
//                 onChange={handleChange}
//                 name="description"
//                 label="Description"
//                 fullWidth
//               />
//             </Box>
//           </Box>

//           {/*  */}

//           <Box className="min-w-[100px] py-[12px] pr-[20px] h-full flex flex-col justify-center">
//             <Box className="flex justify-between items-center mt-2">
//               <Box className="font-semibold">= {itemPrice * itemQty} TK</Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Paper>
//   );
// }

import { Box, Paper } from "@mui/material";
import React from "react";
import InputField from "../../components/InputFields/InputField";

type ComponentProps = {
  index: number;
  cartItem: any;
  cartItems: any[];
  setCartItems: (items: any[]) => void;
  setTotalGrandAmount: (amount: number) => void;
};

export default function CartItem({
  index,
  cartItem,
  cartItems,
  setCartItems,
  setTotalGrandAmount,
}: ComponentProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the specific cart item
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    // Update the parent state
    setCartItems(updatedCartItems);

    // Recalculate the grand total
    handleSummaryCalculation(updatedCartItems);
  };

  const handleRemove = () => {
    const activeItems = cartItems.filter((item) => !item.removed);
    if (activeItems.length < 2) return;

    // Mark the item as removed
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, removed: true } : item
    );

    // Update the parent state
    setCartItems(updatedCartItems);

    // Recalculate the grand total
    handleSummaryCalculation(updatedCartItems);
  };

  const handleSummaryCalculation = (itemList: any[]) => {
    let totalGrandAmount = 0;
    itemList.forEach((item) => {
      if (!item.removed) {
        const price = parseInt(item.price || 0);
        const quantity = parseInt(item.quantity || 0);
        const discount = parseInt(item.discount || 0);
        totalGrandAmount += price * quantity - discount;
      }
    });

    // Update the grand total in the parent component
    setTotalGrandAmount(totalGrandAmount);
  };

  return (
    <Paper>
      <Box
        className={`mt-10 flex border rounded-[6px] overflow-hidden relative ${
          cartItem.removed ? "hidden" : ""
        }`}
      >
        <Box
          onClick={handleRemove}
          className="absolute right-2 top-0 border-l border-b pl-1.5 cursor-pointer"
        >
          X
        </Box>
        <Box className="w-[42px] bg-[#F6F5FB] flex items-center justify-center text-[20px] font-bold">
          {index + 1}
        </Box>
        <Box className="flex-grow flex">
          <Box className="flex-grow col-span-4 px-[18px] py-[12px]">
            <Box className="grid grid-cols-4 gap-[10px]">
              <InputField
                defaultValue={cartItem?.item}
                onChange={handleChange}
                required
                name="item"
                label="Item"
                className="col-span-2"
                fullWidth
              />
              <InputField
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0, max: 100000 } }}
                type="number"
                defaultValue={cartItem?.price || 0}
                name="price"
                required
                label="Price"
                className="col-span-1"
                fullWidth
              />
              <InputField
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0, max: 100000 } }}
                type="number"
                defaultValue={cartItem?.quantity || 1}
                name="quantity"
                required
                label="Quantity"
                className="col-span-1"
                fullWidth
              />
            </Box>
            <Box className="mt-[10px]">
              <InputField
                onChange={handleChange}
                name="description"
                label="Description"
                defaultValue={cartItem?.description || ""}
                fullWidth
              />
            </Box>
          </Box>

          {/* Total Calculation */}
          <Box className="min-w-[100px] py-[12px] pr-[20px] h-full flex flex-col justify-center">
            <Box className="flex justify-between items-center mt-2">
              <Box className="font-semibold">
                ={" "}
                {parseInt(cartItem?.price || 0) *
                  parseInt(cartItem?.quantity || 0)}{" "}
                TK
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
