import React from 'react';
import { UploadedTrack } from '@/common/types/musicItem';
import { responsiveText } from '@/utils/mixins/responsiveText';

type Props = {
  currentTrack: UploadedTrack;
};
const TrackInfo = ({ currentTrack }: Props) => {
  return (
    <div className="h-full items-center justify-center w-full flex gap-2">
      {/*<Image*/}
      {/*  radius="lg"*/}
      {/*  className="h-1/3 hidden md:block md:h-full"*/}
      {/*  alt="Album Cover"*/}
      {/*  src={currentTrack?.image}*/}
      {/*/>*/}
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <b className={`text-2xl ${responsiveText}`}>{currentTrack?.title}</b>
        <span className={`font-thin text-xl ${responsiveText}`}>
          {currentTrack?.artistName}
        </span>
      </div>
    </div>
  );
};

export default TrackInfo;
