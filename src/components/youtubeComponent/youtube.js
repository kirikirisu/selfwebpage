import React from 'react';
import Youtube from 'react-youtube';

const YoutubeComp = ({ id, h, w, st, ap, en }) => (
  <Youtube
    videoId={id}
    opts={{
      height: h,
      width: w,
      playerVars: {
        autoplay: ap,
        start: st,
        end: en,
      },
    }}
  />
);

export default YoutubeComp;
