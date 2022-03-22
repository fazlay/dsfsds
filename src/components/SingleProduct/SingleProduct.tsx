import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import patImage from '../../assets/process.png';

interface IproductInfo {
  title: string;
  image:strinng
}

export default function SingleProduct(props: IproductInfo) {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia sx={{ padding:5}}
          component='img'
          height='280'
          image={props.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography sx={{fontWeight:'bold'}}gutterBottom variant='h5' align='center' component='div'>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
