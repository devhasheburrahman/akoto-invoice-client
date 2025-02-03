import { Box } from "@mui/material";
import ThemesCard from "../../components/ThemesCard/ThemesCard";

export default function Themes() {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-20">
      <ThemesCard
        image="/invoice1.jpg"
        title="POS Receipt 1"
        packageType="free"
        buttonStatus="Install"
      />
      <ThemesCard
        image="/invoice2.png"
        title="POS Receipt 1"
        packageType="free"
        buttonStatus="Install"
      />
      <ThemesCard
        image="/invoice3.png"
        title="POS Receipt 1"
        packageType="Paid"
        buttonStatus="Install"
      />
      <ThemesCard
        image="/invoice3.png"
        title="POS Receipt 1"
        packageType="Paid"
        buttonStatus="Install"
      />
      <ThemesCard
        image="/no_image.png"
        title="POS Receipt 1"
        packageType="Paid"
        buttonStatus="Install"
      />
      <ThemesCard
        image="/invoice3.png"
        title="POS Receipt 1"
        packageType="Paid"
        buttonStatus="installed"
      />
    </Box>
  );
}
