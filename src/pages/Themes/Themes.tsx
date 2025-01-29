import { Box } from '@mui/material'
import ThemesCard from '../../components/ThemesCard/ThemesCard'

export default function Themes() {
  return (
    <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-20' >
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='free' buttonStatus="Install" />
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='free' buttonStatus="installed" />
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='Paid' buttonStatus="installed" />
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='free' buttonStatus="Install" />
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='free' buttonStatus="Install" />
      <ThemesCard image='https://i.ibb.co/XSM46kc/image-1.png' title='POS Receipt 1' packageType='free' buttonStatus="Install" />
    </Box>
  )
}
