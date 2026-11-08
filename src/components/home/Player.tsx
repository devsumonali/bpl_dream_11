import { use, useState, type Dispatch, type SetStateAction } from 'react';
import AvailablePlayer from './AailablePlayer';
import SelectedPlayer from './SelectedPlayer';
import type { TPlayer } from '../../types/types';

interface playerProps {
     playerProps: Promise<TPlayer[]>;
     coin: number;
     setCoin: Dispatch<SetStateAction<number>>;
}

const Player = ({ playerProps, setCoin, coin }: playerProps) => {
     const players = use(playerProps);

     const [buttonType, setButtonType] = useState('available');
     const [selectedPlayers, setSelectedPlayers] = useState<TPlayer[]>([]);

     const handleButtonType = (type: 'available' | 'selected') => {
          setButtonType(type);
     };
     return (
               <div className="bg-white">
                    <div className="w-full mx-auto max-w-330">
                         <div className="flex justify-between items-center gap-5 mb-8">
                              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                   Available Players
                              </h2>
                              <div className="flex gap-0 items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                   <button
                                        onClick={() => handleButtonType('available')}
                                        className={`${buttonType === 'available' ? 'bg-[#DFFF00] text-black' : 'text-gray-600'}  px-6 py-3 cursor-pointer text-sm font-semibold transition-colors`}
                                   >
                                        Available
                                   </button>

                                   <button
                                        onClick={() => handleButtonType('selected')}
                                        className={`${buttonType === 'selected' ? 'bg-[#DFFF00] text-black' : 'text-gray-600'}  cursor-pointer px-6 py-3 text-sm font-medium transition-colors`}
                                   >
                                        Selected {selectedPlayers.length}
                                   </button>
                              </div>
                         </div>
                         <div className="mt-8">
                              {buttonType === 'available' ? (
                                   <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                        {players.map((player) => (
                                             <AvailablePlayer
                                                  key={player.id}
                                                  player={player}
                                                  setCoin={setCoin}
                                                  coin={coin}
                                                  selectedPlayers={selectedPlayers}
                                                  setSelectedPlayers={setSelectedPlayers}
                                             />
                                        ))}
                                   </div>
                              ) : (
                                   <SelectedPlayer
                                        selectedPlayers={selectedPlayers}
                                        setSelectedPlayers={setSelectedPlayers}
                                   />
                              )}
                         </div>
                    </div>
               </div>
     );
};

export default Player;
