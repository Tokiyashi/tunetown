import React, {useEffect, useState} from 'react';
import {wrapNumberInput} from '@/utils/inputWrappers';
import {VolumeTypes} from '@/common/enums/volumeTypes';

type Props = {
  onChange: (value: number) => void;
};

const volumeIcon = new Map([
  [VolumeTypes.Muted, <h1></h1>],
  [VolumeTypes.Medium, <h1></h1>],
  [VolumeTypes.High, <h1></h1>],
]);

const Volume = ({onChange}: Props) => {
  const [currentValue, setCurrentValue] = useState(
    Number(localStorage.getItem('volume') || 50)
  );
  const handleCurrentValueChange = (value: number) => {
    const newValue = Math.floor(value);
    const formattedValue = newValue / 100;
    setCurrentValue(newValue);
    onChange(formattedValue);
    localStorage.setItem('volume', newValue.toString());
  };

  const isLoud = currentValue > 80;

  const volume = isLoud ? VolumeTypes.High : VolumeTypes.Medium;
  const volumeSize =
    Math.floor(currentValue) === 0 ? VolumeTypes.Muted : volume;

  const Icon = volumeIcon?.get(volumeSize) || <h1></h1>;

  useEffect(() => {
    onChange(currentValue / 100);
  }, []);

  return (
    <div className="justify-center items-center overflow-hidden w-full h-1/5 gap-2 flex">
      {/*<Icon className="h-full w-auto" />*/}
      <input
        className="accent-main w-1/2"
        type="range"
        value={currentValue.toString()}
        onChange={wrapNumberInput(handleCurrentValueChange)}
      />
    </div>
  );
};

export default Volume;
