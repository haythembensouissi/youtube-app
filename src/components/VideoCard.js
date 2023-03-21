import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div>
    <Card sx={{width:{md:"320px",xs:"100%"},borderRadius:0,boxShadow:"none"}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
    sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      
    />
    <CardContent sx={{backgroundColor:"#1e1e1e" ,height:'106px'}} >
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    
    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
    {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
    </Typography>
    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
    <Typography variant='subtitle2' fontWeight="bold" color="grey">
    {snippet?.channelTitle.slice(0,60)||demoChannelTitle.slice(0,60)}
    <CheckCircle sx={{fontSize:12,color:"grey",ml:"5px"}}/> 
    </Typography>
    </Link>
    </CardContent>

   </Link>
    </Card>
    </div>
  )
}

export default VideoCard