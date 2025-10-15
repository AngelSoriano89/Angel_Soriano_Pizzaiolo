export default function Hero() {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-65"
        style={{
          backgroundImage: 'url(/pizza.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Angel Soriano Mora: Maestro Pizzero Profesional
        </h1>
        <p className="text-xl text-white mb-8">
          15 años de pasión, dedicación y perfección en la pizza
        </p>
      </div>
    </section>
  )
}
