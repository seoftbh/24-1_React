import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActionAreaCard(props) {
  const handleCardClick = () => {
    window.location.href = props.cardLink; // 카드 클릭시 이동할 링크
  };

  return (
    <Card sx={{
      width: 345,
      // padding: '8px',
      // paddingLeft: '24px',
      borderRadius: '32px',
      // marginBottom: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(20px)',
      boxShadow: '2px 6px 16px 0px rgba(0, 0, 0, 0.2)'
    }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="left" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" align="left" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.link} target="_blank">
          소스 코드
        </Button>
      </CardActions>
    </Card>
  );
}