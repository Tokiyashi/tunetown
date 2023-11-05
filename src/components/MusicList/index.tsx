import React from 'react';
import {UploadedTrack} from '@/common/types/musicItem';
import UploadedMusicItem from '@/components/UploadedMusicItem';

type Props = {
  disablePlayPause?: boolean;
  items: UploadedTrack[];
  allowSuggest?: boolean;
};


const MusicList = ({items, disablePlayPause, allowSuggest}: Props) => {
  return (
    <div className="w-full rounded-2xl overflow-auto flex h-min justify-start items-center flex-col gap-2">
      {items?.map((item, index) => (
        <UploadedMusicItem allowSuggest={allowSuggest} disablePlayPause={disablePlayPause} key={index} item={item}/>
      ))}
    </div>
  );
};
export default MusicList;
