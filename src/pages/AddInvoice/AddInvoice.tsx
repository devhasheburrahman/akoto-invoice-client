import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { toWords } from "number-to-words"; // Import the library
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import * as yup from "yup";
import InputField from "../../components/InputFields/InputField";
import Invoices1 from "../../components/Invoices/Invoices1";
import CartItem from "./CartItem";

type PrintableComponentProps = {
  data: any;
};

// Validation schema
const validationSchema = yup.object().shape({
  checkNo: yup.string(),
  bankName: yup.string(),
  address: yup.string(),
  date: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format, should be YYYY-MM-DD")
    .required("Date is required"),
  billTo: yup.string().required("Bill To is required"),
  invoiceNumber: yup.string().required("Invoice Number is required"),
  invoiceNotes: yup.string(),
});

export default function AddInvoice() {
  const [cartItems, setCartItems] = useState<any[]>([
    { item: "", price: 0, quantity: 1, description: "" },
  ]);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [totalGrandAmount, setTotalGrandAmount] = useState(0);
  const theme = useTheme();
  const totalInWords = toWords(totalGrandAmount);

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      bankName: "",
      billTo: "",
      invoiceNumber: "ABT1",
      invoiceNotes: "Powered by Shohoj Software",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const handleAddItem = () => {
    setCartItems([
      ...cartItems,
      { item: "", price: 0, quantity: 1, description: "" },
    ]);
  };
  const onSubmit = (data: any) => {
    console.log({
      ...data,

      cartItems: cartItems,
      totalGrandAmount: totalGrandAmount,
      totalInWords: totalInWords,
    });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current as HTMLDivElement,
  });

  const PrintableComponent = React.forwardRef<
    HTMLDivElement,
    PrintableComponentProps
  >((props, ref) => {
    const { data } = props;
    return (
      <div ref={ref} className="hidden print:block">
        <Invoices1 data={data} />
      </div>
    );
  });

  const collectedData = {
    ...getValues(),
    cartItems: cartItems,
    totalGrandAmount: totalGrandAmount,
    totalInWords: totalInWords,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="absolute -right-[1000px]">
        <PrintableComponent ref={componentRef} data={collectedData} />
      </div>
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "#fff",
          p: 3,
          borderRadius: 2,
          mb: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Akota Banasree Tower
        </Typography>
        <Typography variant="subtitle1">banasree, Dhaka</Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Payment Voucher
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Content Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              background: "#f9f9f9",
            }}
          >
            {/* Section 1: Invoice Details */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="billTo"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Bill To"
                      fullWidth
                      error={!!errors.billTo}
                      helperText={errors.billTo?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="checkNo"
                  control={control}
                  render={({ field }) => (
                    <InputField {...field} label="Cash/Cheque No" fullWidth />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Address"
                      fullWidth
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="bankName"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Bank No"
                      fullWidth
                      error={!!errors.bankName}
                      helperText={errors.bankName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="invoiceNumber"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Invoice Number"
                      fullWidth
                      error={!!errors.invoiceNumber}
                      helperText={errors.invoiceNumber?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      defaultValue={`${new Date().getFullYear()}-${
                        new Date().getMonth() + 1 < 10
                          ? `0${new Date().getMonth() + 1}`
                          : new Date().getMonth() + 1
                      }-${new Date().getDate()}`}
                      label="Date"
                      {...field}
                      fullWidth
                      type="date"
                      error={!!errors.date}
                      helperText={errors.date?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* Section 2: Cart Items */}
            <Box sx={{ mt: 3 }}>
              {cartItems.map((cartItem, index) => (
                <CartItem
                  setTotalGrandAmount={setTotalGrandAmount}
                  cartItem={cartItem}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  key={index}
                  index={index}
                />
              ))}
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleAddItem}
              >
                Add Item
              </Button>
            </Box>

            {/* Section 3: Notes */}
            <Box sx={{ mt: 3 }}>
              <Controller
                name="invoiceNotes"
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label="Invoice Notes"
                    fullWidth
                    multiline
                    rows={2}
                  />
                )}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar Section */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              background: "#f9f9f9",
            }}
          >
            <Box>
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #ddd",
                  p: 2,
                  mb: 2,
                  background: "#fff",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1">Total Amount</Typography>
                  <Typography variant="body1">$ :{totalGrandAmount}</Typography>
                </Box>
                {/* Display total in words */}
                <Typography
                  variant="body2"
                  className="capitalize"
                  sx={{ fontStyle: "italic" }}
                >
                  In words: {totalInWords} Only
                </Typography>
              </Paper>

              {/* Print Functionality */}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handlePrint}
                startIcon={<PrintIcon />}
              >
                Print
              </Button>

              {/* Save Button */}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                startIcon={<SaveIcon />}
                sx={{ mt: 2 }}
              >
                Save
              </Button>
            </Box>

            {/* Divider */}
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
