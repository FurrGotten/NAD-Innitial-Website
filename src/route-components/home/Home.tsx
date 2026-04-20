import {BgSky, Building, ConstructionBg, PerspectiveLayer} from '../../components';
import ConHeader from '../../assets/con_header.png';

export function Home() {
  const perspective = 100;

  return (
    <section style={{perspective: perspective}} className={`h-screen overflow-x-hidden overflow-y-auto`}>
      <div className="relative flex h-fit min-h-[300vh] justify-center [transform-style:preserve-3d]">

        {/* Sky: Very far away */}
        <PerspectiveLayer zIndex={-150} perspective={perspective} className={'h-full'}>
          <BgSky />
        </PerspectiveLayer>

        {/* Buildings: Mid distance */}
        <PerspectiveLayer zIndex={-75} perspective={perspective} className={'h-full'}>
          <Building />
        </PerspectiveLayer>

        {/* Content: Foreground */}
      </div>
      <div className="absolute top-0 w-full h-fit text-white text-9xl font-black text-center">
        <div className="flex justify-center h-[100vh] z-10 pt-[200px]">
          <div className="img-holder">
            <img src={ConHeader} alt="NEW ANTHODAM"
              // className="drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                 className="drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="relative w-full h-fit">
          <ConstructionBg />
          <div className="relative text-center w-full min-h-[4000px] h-fit flex flex-col items-center pt-[100px]">
            <div
              className="sign-container bg-white p-2 rounded-lg shadow-lg mb-[100px] w-[1200px] max-w-[95vw] mr-[-2%]">
              <div className="segment bg-[#002D56] w-full min-h-[450px]">
                TEST
              </div>
            </div>
            <div
              className="sign-container bg-white p-2 rounded-lg shadow-lg mb-[100px] w-[1200px] max-w-[95vw] mr-[3%]">
              <div className="segment bg-[#002D56] w-full min-h-[450px]">
                TEST
              </div>
            </div>
            <div
              className="sign-container bg-white p-2 rounded-lg shadow-lg mb-[100px] w-[1200px] max-w-[95vw] mr-[-3%]">
              <div className="segment bg-[#002D56] w-full min-h-[450px]">
                TEST
              </div>
            </div>
            <div
              className="sign-container bg-white p-2 rounded-lg shadow-lg mb-[100px] w-[1200px] max-w-[95vw] mr-[1%]">
              <div className="segment bg-[#002D56] w-full min-h-[450px]">
                TEST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
