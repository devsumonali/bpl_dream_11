import { Suspense, type Dispatch, type SetStateAction } from 'react';
import type { TPlayer } from '../../types/types';
import Player from './Player';

const getPlayerProps = async (): Promise<TPlayer[]> => {
     const res = await fetch('./data/data.json');
     const data = await res.json();
     return data;
     // console.log(data);
};
export interface Tcoin {
     coin: number;
     setCoin: Dispatch<SetStateAction<number>>;
}
const Players = ({ coin, setCoin }: Tcoin) => {
     const playerProps = getPlayerProps();
     return (
          <div className='className=" w-full mx-auto max-w-330 mb-15'>
               <Suspense fallback={<h3>Loading Player...</h3>}>
                    <Player playerProps={playerProps} coin={coin} setCoin={setCoin} />
               </Suspense>
          </div>
     );
};

export default Players;
