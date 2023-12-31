import React from 'react';
import {UploadedTrack} from '@/common/types/musicItem';
import PlayPause from './PlayPause';
import {RootState, store} from '@/store';
import {setCurrentTrack} from '@/store/slices/playerSlice';
import {useSelector} from 'react-redux';
import MoreOptions from './MoreOptions';
import {useIsAdmin} from '@/utils/hooks/useIsRoomAdmin';
import {Button, Typography} from "@mui/material";
import {addTrackToQueue} from "@/store/slices/roomSlice";

type Props = {
  disablePlayPause?: boolean;
  item: UploadedTrack;
  allowSuggest?: boolean;
};

const UploadedMusicItem = ({item, disablePlayPause, allowSuggest}: Props) => {
  const play = () =>
    store.dispatch(setCurrentTrack({...item, paused: false}));
  const pause = () =>
    store.dispatch(setCurrentTrack({...item, paused: true}));

  const {currentTrack} = useSelector((state: RootState) => state.room.room);
  const {currentTrack: playerTrack} = useSelector((state: RootState) => state.player);

  const isPausedTrack = !!playerTrack?.paused;
  const isAdmin = useIsAdmin();

  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <div className="flex gap-4 max-w-full items-center  overflow-hidden">
        {isAdmin && !disablePlayPause && (
          <PlayPause
            isPausedTrack={isPausedTrack || !playerTrack}
            onPause={pause}
            onPlay={play}
            currentlyOpened={currentTrack?._id === item._id}
          />
        )}
        <div className="flex flex-col overflow-hidden">
          <span className="flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis">
            {item.title}
          </span>
          <span className="text-sm">{item?.artistName}</span>
        </div>
        {item?._id && currentTrack?._id === item._id && <Typography color='green'>Сейчас играет!</Typography>}
      </div>
      {allowSuggest && <Button onClick={() => store.dispatch(addTrackToQueue(item))}>Предложить трек!</Button>}
      <MoreOptions/>
    </div>
  );
};

export default UploadedMusicItem;
