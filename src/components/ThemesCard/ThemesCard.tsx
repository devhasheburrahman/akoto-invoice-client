import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, Button, CardActionArea, CardActions, Chip } from '@mui/material';

type ComponentProps = {
    image?: string,
    title?: string,
    packageType?: string,
    buttonStatus?: string,
    className?: string,
}


export default function ThemesCard({ image, title, packageType, buttonStatus, className }: ComponentProps) {
    return (
        <Box className={className}>
            <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="40px"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography textAlign='center' gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center" }} >
                <Chip sx={{paddingLeft: '24px', paddingRight: '24px'}} variant='outlined' color='primary' label={packageType}/>
            </CardActions>

            <CardActions className='relative' sx={{ marginBottom: "0", justifyContent: "center", Top: "-10px" }}>
                <Button sx={{paddingLeft: '36px', paddingRight: '36px'}} variant='contained' disabled={buttonStatus == 'installed'} size="large" color="primary">
                    {buttonStatus}
                </Button>
            </CardActions>
        </Card>
        </Box>
    )
}