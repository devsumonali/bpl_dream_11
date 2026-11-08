import { useState, type Dispatch, type SetStateAction } from 'react';
import type { TPlayer } from '../../types/types';
import { toast } from 'react-toastify';

interface Tplayer {
     player: TPlayer;
     coin: number;
     setCoin: Dispatch<SetStateAction<number>>;
     selectedPlayers: TPlayer[];
     setSelectedPlayers: Dispatch<SetStateAction<TPlayer[]>>;
}

const AvailablePlayer = ({
     player,
     coin,
     setCoin,
     setSelectedPlayers,
     selectedPlayers,
}: Tplayer) => {
     const [isSelected, setIsSelected] = useState(false);

     const handleSelectedPlayer = () => {
          setIsSelected(true);
          const newCoinPrice = coin - player.price;
          if (newCoinPrice >= 0) {
               setCoin(newCoinPrice);
               setIsSelected(true);
               toast.success(player.name + ' Purchase succesfuly');
          } else {
               toast.error('Coin is not enough for purcharse');
          }

          //selected players
          setSelectedPlayers([...selectedPlayers, player]);
     };
     return (
          <>
               <div className="bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Player Image */}
                    <div className="w-full h-60 bg-gray-100 rounded-lg overflow-hidden">
                         <img
                              src={player.image}
                              alt={player.name}
                              className="w-full h-full object-cover"
                         />
                    </div>

                    {/* Player Name */}
                    <div className="flex justify-between items-center gap-2 mt-3 mb-2">
                         <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                              <span className="text-gray-500">👤</span>
                              {player.name}
                         </h3>
                         <span className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md whitespace-nowrap">
                              {player.role}
                         </span>
                    </div>

                    {/* Country */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 pb-2 border-b border-gray-100">
                         <span>⚑</span>
                         <span>{player.country}</span>
                    </div>

                    {/* Player Details */}
                    <div className="space-y-2 mt-3">
                         <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-gray-800">Rating</span>
                              <span className="text-gray-600 font-medium">{player.rating}</span>
                         </div>

                         <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-gray-800">Left-Hand-Bat</span>
                              <span className="text-gray-500">{player.battingStyle}</span>
                         </div>

                         <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-gray-800">
                                   Price: ${player.price}
                              </span>
                              <button
                                   onClick={() => {
                                        if (isSelected) {
                                             toast.warning('Player already selected!');
                                             return;
                                        }
                                        handleSelectedPlayer();
                                   }}
                                   // disabled={isSelected}
                                   className={`px-4 py-2 text-[14px] font-medium rounded-md border cursor-pointer transition-colors ${
                                        isSelected
                                             ? 'bg-[#DFFF00] text-black border-[#DFFF00]'
                                             : 'bg-white text-gray-700 border-gray-200 hover:bg-[#DFFF00] hover:border-[#DFFF00]'
                                   }`}
                              >
                                   {isSelected ? 'Selected' : 'Choose Player'}
                              </button>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default AvailablePlayer;
