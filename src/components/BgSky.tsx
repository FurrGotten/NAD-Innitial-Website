export const BgSky = () => {
  return (
    <div className="relative w-full h-[3240px]
      bg-gradient-to-b from-sky-300 to-blue-100
      dark:from-slate-950 dark:to-indigo-950">

      {/* Sun / Moon */}
      <div className="absolute top-[22%] right-[15%] w-24 h-24 rounded-full transition-all duration-1000
        bg-yellow-300 shadow-[0_0_50px_#fde047]
        dark:bg-slate-100 dark:shadow-[0_0_40px_#f1f5f9]">
        {/* Optional: Moon Craters (only visible in dark mode) */}
        <div className="hidden dark:block absolute top-4 left-4 w-4 h-4 bg-slate-300 rounded-full opacity-50"></div>
        <div className="hidden dark:block absolute bottom-6 right-5 w-6 h-6 bg-slate-300 rounded-full opacity-50"></div>
      </div>

      {/* Stars (Only visible in Dark Mode) */}
      <div className="hidden dark:block absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>

      {/* Cloud 1 */}
      <div className="absolute top-[25%] left-[10%] opacity-80 animate-cloud-slow">
        <Cloud className="fill-white dark:fill-slate-400 opacity-70" />
      </div>

      {/* Cloud 2 */}
      <div className="absolute top-[35%] right-[20%] opacity-60 animate-cloud-fast">
        <Cloud className="fill-white dark:fill-slate-500 opacity-50" />
      </div>
    </div>
  );
};

// Simple SVG Cloud Helper
const Cloud = ({className}: {className: string}) => (
  <svg width="150" height="100" viewBox="0 0 24 24" className={className}>
    <path
      d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.007,0-0.013,0-0.02C11.314,13.826,10.677,14,10,14c-2.209,0-4-1.791-4-4 c0-2.198,1.779-3.978,3.974-4C10.158,3.774,12.304,2,14.5,2c2.81,0,5.138,2.072,5.465,4.8c1.159,0.306,2.035,1.345,2.035,2.6 c0,1.491-1.209,2.7-2.7,2.7c-0.106,0-0.209-0.01-0.311-0.024C18.666,13.018,18.111,14,17.5,14c-0.111,0-0.218-0.016-0.323-0.041 C17.065,16.852,14.618,19,11.5,19c-0.111,0-0.218-0.016-0.323-0.041C10.065,21.852,7.618,24,4.5,24" />
  </svg>
);
