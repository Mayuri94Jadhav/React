import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
   const COLD_URL = "https://images.pexels.com/photos/14928972/pexels-photo-14928972.jpeg?auto=compress&w=400";
   const RAIN_URL = "https://images.pexels.com/photos/1915182/pexels-photo-1915182.jpeg?auto=compress&w=400";
   const HOT_URL = "https://images.pexels.com/photos/33687706/pexels-photo-33687706.jpeg?auto=compress&w=400";
   const INIT_URL = "https://images.pexels.com/photos/19676932/pexels-photo-19676932.jpeg?auto=compress&w=400";
    return (
        <div className ="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{height:"140"}}
          image={
            info.humidity > 80
            ? RAIN_URL
            :info.temp > 15
            ? HOT_URL
            :COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {
            info.humidity > 80
            ? <ThunderstormIcon/>
            :info.temp > 15
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2"  color='text.secondary' component ={"span"} >
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>
                the weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
            </p>

    
        </Typography>
      </CardContent>
     
    </Card>
    </div>
</div>
    )
}