function App() {

  return (
    <>
      <div className="flex justify-center w-screen h-screen flex-col items-center bg-[url('https://img.freepik.com/vector-gratis/fondo-color-degradado-formas-geometricas_23-2149112703.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat ">
        <div className="bg-white/60 shadow-[0_0_10px_0_rgba(255,0,127,1)] backdrop-blur-sm w-80 h-140 rounded-2xl p-6 ">
          <div className="h-[35%] flex justify-end items-center text-3xl font-bold text-purple-950">
            <p>=12,454</p>
          </div>
          <div className="grid grid-cols-4 gap-2 h-[65%] ">
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">AC</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">DEL</button>
            <button className="text-lg cursor-pointer hover:bg-purple-800/60 transition-all duration-300 bg-purple-600/20 text-white font-bold rounded-2xl" >/</button>
            <button className="text-lg cursor-pointer hover:bg-purple-800/60 transition-all duration-300 bg-purple-600/20 text-white font-bold rounded-2xl">*</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">7</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">8</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">9</button>
            <button className="text-lg cursor-pointer hover:bg-purple-800/60 transition-all duration-300 bg-purple-600/20 text-white font-bold rounded-2xl">-</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">4</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">5</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">6</button>
            <button className="row-span-2 text-lg cursor-pointer hover:bg-purple-800/60 transition-all duration-300 bg-purple-600/20 text-white font-bold rounded-2xl">+</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">1</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">2</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">3</button>
            <button className="col-span-2 text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">0</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 transition-all duration-300 bg-white/30 text-white font-bold rounded-2xl">.</button>
            <button className="text-lg cursor-pointer hover:bg-purple-800/60 transition-all duration-300 bg-purple-600/50 text-white font-bold rounded-2xl">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
