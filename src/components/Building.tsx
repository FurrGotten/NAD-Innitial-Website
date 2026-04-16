import * as React from 'react';

type windows = {light?: boolean, image?: string | React.ElementType}[]

const ultralux: windows = [{light: true}, {}, {}, {light: true}];
const lux: windows = [{light: true}, {}, {light: true}, {}, {}, {light: true}];

export const Building = () => {

  const rooms: windows = Array.from({length: 104}, (_, i) => ({
    light: i < 25
  })).sort(() => Math.random() - 0.5);

  return (<section className="relative min-w-full h-[3240px] flex justify-center">
    <div className="w-[80%] min-w-[400px] pt-[65vh] h-full flex items-center flex-col">
      <div className="w-[1.5%] h-[10%] bg-gray-700 max-[799px]:hidden" />
      <div className="w-[5%] h-[10%] bg-gray-700 flex justify-around pt-4">
        <div className="bg-gray-600 w-[18%]  max-[799px]:hidden" />
        <div className="bg-gray-600 w-[18%]" />
        <div className="bg-gray-600 w-[18%]  max-[799px]:hidden" />
      </div>
      <div className="w-[10%] h-[10%] bg-gray-700 flex justify-around pt-4">
        <div className="bg-gray-600 w-[9%]" />
        <div className="bg-gray-600 w-[9%]" />
        <div className="bg-gray-600 w-[9%]" />
        <div className="bg-gray-600 w-[9%]" />
        <div className="bg-gray-600 w-[9%]" />
      </div>
      <div className="w-[25%] h-[10%] bg-gray-700 flex justify-around pt-4">
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
        <div className="bg-gray-600 w-[4%]" />
      </div>
      <div className="w-[45%] h-[10%] bg-gray-700 flex justify-around pt-6 pb-2">
        {ultralux.map((window, index) => <div key={index}
                                              className={`${window.light ? 'bg-yellow-400' : 'bg-gray-900'} w-[20%]`} />)}
      </div>
      <div className="w-full h-[10%] flex items-center justify-between">
        <div className="w-[10%] h-full text-5xl [writing-mode:vertical-lr] [text-orientation:mixed]">GARGOILE</div>
        <div className="w-[70%] h-full bg-gray-700 flex justify-around pt-6 pb-2">
          {lux.map((window, index) => <div key={index}
                                           className={`${window.light ? 'bg-yellow-400' : 'bg-gray-900'} w-[13%]`} />)}
        </div>
        <div className="w-[10%] h-full text-5xl [writing-mode:vertical-rl] [text-orientation:mixed]">GARGOILE</div>
      </div>
      <div className="w-full h-[60%] bg-gray-700 flex justify-around content-start p-2 pt-6 flex-wrap overflow-hidden">
        {rooms.map((window, index) => <div key={index}
                                           className={`${window.light ? 'bg-yellow-400' : 'bg-gray-900'} w-[15vw] h-[15vw] max-w-[10vh] max-h-[10vh] mb-10`} />)}
      </div>
    </div>
  </section>);
};
