import * as React from 'react';

type windows = {light?: boolean, image?: string | React.ElementType}[]

const ultralux: windows = [{light: true}, {}, {}, {light: true}];
const lux: windows = [{light: true}, {}, {light: true}, {}, {}, {light: true}];

export const Building = ({alt = true}: {alt?: boolean}) => {

  const rooms: windows = Array.from({length: 104}, (_, i) => ({
    light: i < 25
  })).sort(() => Math.random() - 0.5);

  if (alt) return (
    <section className="relative h-[3240px] flex justify-end items-start pt-[10vh]">
      <svg
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[calc(3240px-145vh)] right-0 max-sm:h-[60vh]"
        style={{aspectRatio: '12/5'}}
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Window glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── SKY BASE ── */}
        <rect x="0" y="0" width="1440" height="600" fill="transparent" />

        {/* ══════════════════════════════════════
       MANHATTAN (moved to Left side)
  ══════════════════════════════════════ */}

        {/* Far-left lower buildings (formerly far-right) */}
        <rect x="0" y="460" width="45" height="140" fill="#16213e" />
        <rect x="45" y="450" width="35" height="150" fill="#1a1a2e" />
        <rect x="80" y="470" width="50" height="130" fill="#0f3460" />
        <rect x="130" y="455" width="40" height="145" fill="#16213e" />

        {/* Mid Manhattan block */}
        <rect x="170" y="420" width="55" height="180" fill="#1a1a2e" />
        <rect x="225" y="400" width="40" height="200" fill="#16213e" />

        {/* One WTC / Freedom Tower silhouette */}
        <rect x="265" y="260" width="60" height="340" fill="#1a1a2e" />
        <rect x="270" y="250" width="50" height="12" fill="#1a1a2e" />
        <rect x="280" y="238" width="30" height="14" fill="#1a1a2e" />
        {/* Antenna */}
        <rect x="292" y="195" width="6" height="45" fill="#374151" />
        {/* Spire tip */}
        <polygon points="292,195 295,175 298,195" fill="#6b7280" />

        {/* Empire State Building silhouette */}
        <rect x="340" y="310" width="70" height="290" fill="#0f3460" />
        <rect x="350" y="295" width="50" height="18" fill="#0f3460" />
        <rect x="360" y="280" width="30" height="17" fill="#0f3460" />
        <rect x="367" y="268" width="16" height="14" fill="#0f3460" />
        <rect x="371" y="253" width="8" height="17" fill="#4b5563" />
        {/* ESB mooring mast */}
        <rect x="373" y="210" width="4" height="45" fill="#6b7280" />

        {/* ESB setback windows */}
        {[320, 340, 360, 380, 400, 420, 440, 460, 480, 500].map(y =>
          [348, 363, 378, 393].map(x =>
            <rect key={`esb${x}${y}`} x={x} y={y} width="6" height="9"
                  fill={Math.random() > 0.35 ? '#fbbf24' : '#0f172a'} opacity="0.9" />
          )
        )}

        {/* Chrysler Building silhouette */}
        <rect x="430" y="330" width="65" height="270" fill="#16213e" />
        <rect x="440" y="315" width="45" height="18" fill="#16213e" />
        <rect x="450" y="300" width="25" height="17" fill="#16213e" />
        {/* Chrysler eagle-arched crown */}
        <path d="M 455,300 Q 462,270 465,255 Q 468,270 475,300 Z" fill="#374151" />
        <path d="M 450,295 Q 462,265 462,250 Q 465,265 480,295 Z" fill="#4b5563" opacity="0.6" />
        <rect x="462" y="215" width="6" height="38" fill="#6b7280" />

        {/* Chrysler windows */}
        {[340, 360, 380, 400, 420, 440, 460, 480, 500].map(y =>
          [438, 452, 466, 480].map(x =>
            <rect key={`cw${x}${y}`} x={x} y={y} width="6" height="9"
                  fill={Math.random() > 0.4 ? '#fbbf24' : '#0f172a'} opacity="0.85" />
          )
        )}

        {/* Right edge buildings */}
        <rect x="495" y="390" width="45" height="210" fill="#1a1a2e" />
        <rect x="500" y="375" width="35" height="18" fill="#1a1a2e" />

        {/* Water towers – Manhattan rooftops */}
        <polygon points="278,262 285,252 292,262" fill="#111827" />
        <rect x="280" y="262" width="12" height="14" fill="#111827" />
        <polygon points="230,392 237,382 244,392" fill="#111827" />
        <rect x="232" y="392" width="12" height="16" fill="#111827" />
        <polygon points="502,378 509,368 516,378" fill="#111827" />
        <rect x="504" y="378" width="12" height="15" fill="#111827" />

        {/* ══════════════════════════════════════
       BROOKLYN (moved to Center)
  ══════════════════════════════════════ */}

        {/* Brooklyn brownstones */}
        <rect x="540" y="480" width="60" height="120" fill="#1a1a2e" />
        <rect x="600" y="490" width="45" height="110" fill="#16213e" />
        <rect x="645" y="470" width="55" height="130" fill="#1a1a2e" />
        <rect x="700" y="460" width="40" height="140" fill="#0f3460" />
        <rect x="740" y="475" width="50" height="125" fill="#16213e" />
        <rect x="790" y="465" width="35" height="135" fill="#1a1a2e" />
        <rect x="825" y="455" width="60" height="145" fill="#0f3460" />
        <rect x="885" y="470" width="40" height="130" fill="#16213e" />
        <rect x="925" y="460" width="55" height="140" fill="#1a1a2e" />

        {/* Brooklyn mid-rise */}
        <rect x="970" y="430" width="50" height="170" fill="#1a1a2e" />
        <rect x="1020" y="420" width="30" height="180" fill="#16213e" />
        <rect x="1050" y="400" width="70" height="200" fill="#0f3460" />
        <rect x="1060" y="380" width="50" height="20" fill="#0f3460" />
        <rect x="1070" y="365" width="30" height="15" fill="#0f3460" />
        {/* Water tower */}
        <polygon points="1110,355 1120,345 1130,355" fill="#111827" />
        <rect x="1112" y="355" width="16" height="18" fill="#111827" />

        <rect x="1120" y="415" width="45" height="185" fill="#1a1a2e" />
        <rect x="1165" y="440" width="35" height="160" fill="#16213e" />

        {/* Windows – Brooklyn */}
        {[440, 455, 470, 485, 500].map(y => [975, 990, 1005].map(x =>
          <rect key={`bw${x}${y}`} x={x} y={y} width="7" height="8"
                fill={Math.random() > 0.4 ? '#fbbf24' : '#1e293b'} opacity="0.85" />
        ))}

        {/* ══════════════════════════════════════
       BROOKLYN BRIDGE (moved to Right side)
  ══════════════════════════════════════ */}

        {/* Bridge roadway */}
        <rect x="1120" y="530" width="320" height="8" fill="#374151" />
        <rect x="1120" y="538" width="320" height="4" fill="#4b5563" />

        {/* Towers */}
        <rect x="1195" y="450" width="22" height="88" fill="#374151" />
        <rect x="1303" y="450" width="22" height="88" fill="#374151" />

        {/* Main cables */}
        <path d="M 1140,530 Q 1206,430 1206,448" stroke="#6b7280" strokeWidth="2.5" fill="none" />
        <path d="M 1140,530 Q 1314,430 1314,448" stroke="#6b7280" strokeWidth="2.5" fill="none" />
        <path d="M 1440,530 Q 1314,430 1314,448" stroke="#6b7280" strokeWidth="2.5" fill="none" />
        <path d="M 1440,530 Q 1206,430 1206,448" stroke="#6b7280" strokeWidth="2.5" fill="none" />

        {/* Vertical suspender cables */}
        {[1155, 1170, 1185, 1200, 1220, 1235, 1250, 1265, 1280, 1295, 1310, 1325, 1340, 1355, 1370, 1385, 1400, 1415, 1430].map((x, i) => {
          const leftApex = 1206 + 3;
          const rightApex = 1314 + 3;
          const dLeft = Math.abs(x - leftApex);
          const dRight = Math.abs(x - rightApex);
          const nearest = Math.min(dLeft, dRight);
          const cableY = 448 + (nearest / 110) * 82;
          return <line key={`sc${i}`} x1={x} y1={530} x2={x} y2={cableY}
                       stroke="#9ca3af" strokeWidth="0.8" opacity="0.7" />;
        })}

        {/* Water – East River */}
        <rect x="1110" y="558" width="340" height="42" fill="#0c1a2e" />

        {/* ── GROUND / STREET LINE ── */}
        <rect x="0" y="598" width="1440" height="2" fill="#111827" />
      </svg>

    </section>
  );

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
