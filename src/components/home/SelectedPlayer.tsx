import type { Dispatch, SetStateAction } from 'react';
import type { TPlayer } from '../../types/types';

interface Tplayer {
     player: TPlayer;
     coin: number;
     setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayer = ({ player, coin, setCoin }: Tplayer) => {
     console.log(player, coin, setCoin);
     return <div>selected Player</div>;
};

export default SelectedPlayer;
