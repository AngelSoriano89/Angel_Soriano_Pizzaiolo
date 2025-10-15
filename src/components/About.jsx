export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Sobre Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Mi nombre es Angel Alberto Soriano Mora, soy un maestro pizzero con más de 15 años de experiencia en la industria gastronómica. Nací el 23 de junio de 1989 en Guayaquil, Ecuador.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Con formación en prácticas correctas de higiene y manipulación de alimentos, he trabajado en las mejores pizzerías del país. Creo que cada pizza es una obra de arte, elaborada con ingredientes frescos y técnica tradicional. Mi objetivo es proporcionar experiencias culinarias memorables a través de pizzas de calidad excepcional.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ubicado actualmente en Cuenca, Ecuador.
            </p>
          </div>
          
          <div className="h-auto w-auto rounded-lg overflow-hidden flex items-center justify-center p-6">
            <img 
              src="/AngelSoriano.png" 
              alt="Angel Soriano - Maestro Pizzero"
              className="w-auto h-auto object-contain p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
