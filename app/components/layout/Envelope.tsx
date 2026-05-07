type Props = {
  onOpen: () => void;
};

export function Envelope({ onOpen }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div
        onClick={onOpen}
        className="cursor-pointer group relative w-full max-w-md transition-all duration-700 hover:scale-105 active:scale-95"
      >
        <div className="relative bg-[#eae0d0] aspect-[5/4] rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#f4e9d8] rounded-b-[60%] border-b border-[#3f2e1e] shadow-inner" />

          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-script text-4xl text-[#3f2e1e]">
              Роман & Христина
            </p>
            <p className="text-sm tracking-widest text-[#6b5a45] mt-1">
              06.06.2026
            </p>
          </div>

          <div className="absolute top-32 sm:bottom-28 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-24 bg-gradient-to-br from-[#9c2a2a] via-[#b33f3f] to-[#8c1f1f] rounded-full shadow-xl flex items-center justify-center border-8 border-[#8c1f1f] group-hover:rotate-6 transition-transform">
              <div className="text-center text-white">
                <div className="text-2xl">💌</div>
                <div className="text-[10px] tracking-[2px] font-medium">
                  ВІДКРИТИ
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#e8d9c7_0.5px,transparent_1px)] bg-[length:8px_8px] opacity-40" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/10 blur-xl rounded-full" />
      </div>

      <p className="absolute bottom-12 text-[#6b5a45] text-sm tracking-widest">
        Натисніть на конверт, щоб відкрити запрошення
      </p>
    </div>
  );
}
