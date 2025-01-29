import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Invoices1 from "../../components/Invoices/Invoices1";

// Define the type for the PrintableComponent props
type PrintableComponentProps = {
  // Other props, if any
};

// Create a functional component that forwards its ref
const PrintableComponent = React.forwardRef<
  HTMLDivElement,
  PrintableComponentProps
>((props, ref) => {
  return (
    <div ref={ref}>
      {/* Your content to be printed */}
      <Invoices1 />
    </div>
  );
});

function PrintTest() {
  const componentRef = useRef<HTMLDivElement | null>(null); // Define the ref type explicitly

  const handlePrint = useReactToPrint({
    content: () => componentRef.current as HTMLDivElement, // Assert the type of the ref
  });

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -right-[1000px]">
        <PrintableComponent ref={componentRef} />
      </div>
      <Button
        onClick={handlePrint}
        variant="contained"
        type="submit"
        fullWidth
        startIcon={<PrintIcon />}
      >
        Print
      </Button>
    </div>
  );
}

export default PrintTest;
