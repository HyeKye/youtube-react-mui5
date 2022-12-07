import { Box, Stack } from "@mui/material"
import { ChannelCard, VideoCard } from "./"

const Videos = ({videos}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

// "https://pbs.twimg.com/profile_images/1534280478991302656/8j4QlZum_400x400.jpg"

export default Videos