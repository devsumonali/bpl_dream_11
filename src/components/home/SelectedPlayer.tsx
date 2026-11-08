import type { Dispatch, SetStateAction } from 'react';
import type { TPlayer } from '../../types/types';

interface TplayerProps {
     selectedPlayers: TPlayer[];
     setSelectedPlayers: Dispatch<SetStateAction<TPlayer[]>>;
}

const SelectedPlayer = ({ setSelectedPlayers, selectedPlayers }: TplayerProps) => {
     const handleRemovePlayer = (id: string | number) => {
          setSelectedPlayers(selectedPlayers.filter((player) => player.id !== id));
     };

     return (
          <div className="space-y-4">
               {selectedPlayers.map((player) => (
                    <div
                         key={player.id || player.name}
                         className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between gap-4"
                    >
                         {/* Left Side: Player Image, Name & Batting Style */}
                         <div className="flex items-center gap-4">
                              <div className="w-14 h-14 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                                   <img
                                        src={player.image}
                                        alt={player.name}
                                        className="w-full h-full object-cover"
                                   />
                              </div>
                              <div>
                                   <h3 className="text-base font-bold text-gray-900">
                                        {player.name}
                                   </h3>
                                   <p className="text-xs text-gray-500 mt-0.5">
                                        {player.battingStyle || 'Left-Hand-Bat'}
                                   </p>
                              </div>
                         </div>

                         {/* Right Side: Delete/Remove Button */}
                         <button
                              onClick={() => handleRemovePlayer(player.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Remove Player"
                         >
                              {/* Trash/Delete Icon */}
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   strokeWidth={2}
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                   />
                              </svg>
                         </button>
                    </div>
               ))}
          </div>
     );
};

export default SelectedPlayer;
