import React from 'react';
import {UploadedTrack} from '@/common/types/musicItem';
import PlayPause from './PlayPause';
import {RootState, store} from '@/store';
import {setCurrentTrack} from '@/store/slices/playerSlice';
import {useSelector} from 'react-redux';
import MoreOptions from './MoreOptions';
import {useIsAdmin} from '@/utils/hooks/useIsRoomAdmin';

type Props = {
  item: UploadedTrack;
};

const UploadedMusicItem = ({item}: Props) => {
  const play = () =>
    store.dispatch(setCurrentTrack({...item, paused: false}));
  const pause = () =>
    store.dispatch(setCurrentTrack({...item, paused: true}));

  const {currentTrack} = useSelector((state: RootState) => state.room.room);
  const isPausedTrack = !!currentTrack?.paused;

  const isAdmin = useIsAdmin();

  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <div className="flex gap-2 max-w-full overflow-hidden">
        {isAdmin && (
          <PlayPause
            isPausedTrack={isPausedTrack}
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
      </div>
      <MoreOptions item={item}/>
    </div>
  );
};

export default UploadedMusicItem;
