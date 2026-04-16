export const ConstructionBg = () => {
  return (
    <div className="absolute inset-0 min-h-screen min-w-[800px] h-full w-full overflow-hidden bg-[#145641]">
      {/* SECTION 1: Non-transparent solid panels (Top Half) */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 border-b-4 border-[#0d3a2b]"
        style={{
          backgroundColor: '#145641',
          backgroundImage: `
            linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.2) 95%),
            linear-gradient(0deg, transparent 95%, rgba(0,0,0,0.2) 95%)
          `,
          backgroundSize: '200px 300px'
        }}
      >
        {/* Accent Diamond Porthole (Inspired by your reference) */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rotate-45 border-4 border-[#FFC000] bg-[#126249] opacity-80 shadow-lg"></div>
        <div className="absolute right-1/4 top-1/3 h-16 w-16 rotate-45 border-4 border-[#FFC000] bg-[#126249] opacity-80 shadow-lg"></div>
      </div>

      {/* SECTION 2: Netted Construction Cover (Bottom Half) */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#126249]"
        style={{
          // This creates the "mesh" or "net" effect using a cross-hatch pattern
          backgroundImage: `
            linear-gradient(45deg, #0d3a2b 25%, transparent 25%, transparent 75%, #0d3a2b 75%, #0d3a2b),
            linear-gradient(45deg, #0d3a2b 25%, transparent 25%, transparent 75%, #0d3a2b 75%, #0d3a2b)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px',
          opacity: 0.6
        }}
      >
        {/* Scaffolding Overlay Lines */}
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `
              linear-gradient(90deg, #FFC000 1px, transparent 1px),
              linear-gradient(0deg, #FFC000 1px, transparent 1px)
            `,
               backgroundSize: '100px 100px'
             }}
        />
      </div>

      {/* Decorative Horizontal "Tape" or Beam */}
      <div className="absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 bg-[#FFC000] shadow-md flex items-center justify-around overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-full w-12 -skew-x-12 bg-[#145641]" />
        ))}
      </div>
    </div>
  );
};
