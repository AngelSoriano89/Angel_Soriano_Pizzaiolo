export default function Experience() {
  const experiences = [
    {
      title: "Hornero de Pizzas",
      company: "Master Pizza",
      period: "2010 - 2011",
      location: "Guayaquil",
      icon: "🔥"
    },
    {
      title: "Hornero de Pizzas",
      company: "Pizza Adicta",
      period: "2011 - 2015",
      location: "Guayaquil",
      icon: "🍕"
    },
    {
      title: "Hornero de Pizzas",
      company: "Piola",
      period: "2015 - 2016",
      location: "Guayaquil",
      icon: "🍕"
    },
    {
      title: "Hornero de Pizzas",
      company: "Endemic Turtle",
      period: "2019 - 2021",
      location: "Isabela-Galápagos",
      icon: "🍕"
    },
    {
      title: "Hornero de Pizzas",
      company: "Pizza Libre",
      period: "2022 - 2022",
      location: "Guayaquil",
      icon: "🔥"
    },
    {
      title: "Hornero de Pizzas y Jefe de Área",
      company: "Grupo Casa Firenza",
      period: "2022 - 2025",
      location: "Cuenca",
      icon: "👨‍🍳"
    },    
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Experiencia</h2>
        <p className="text-center text-gray-400 mb-12">
          Un viaje a través de mis 15 años en el dominio de la pizza
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group border-l-4 border-orange-500 pl-8 py-6 bg-gradient-to-r from-slate-800 to-transparent rounded-r-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:from-slate-700 cursor-pointer transform hover:translate-x-2"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {exp.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-500 transition-colors duration-300 group-hover:text-orange-400">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 font-semibold text-lg transition-colors duration-300 group-hover:text-white">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {exp.location}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 group-hover:text-gray-400">
                    {exp.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-lg border border-orange-500/30 transition-all duration-300 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Educación y Certificaciones</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transition-transform duration-300 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Educación Formal</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">
                  <strong>Bachiller Técnico</strong> - Colegio Fiscal Mixto Huancavilca (Guayaquil)<br/>
                  <span className="text-sm text-gray-400">Especialización en Informática</span>
                </li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">
                  <strong>Primaria</strong> - Escuela Fiscal Mixta Aurora Vallejo Arrieta (Guayaquil)
                </li>
              </ul>
            </div>
            <div className="transition-transform duration-300 hover:translate-y-[-5px]">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Certificaciones</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">
                  <strong>ARCSA</strong> - Agencia Nacional de Regulación, Control y Vigilancia Sanitaria<br/>
                  <span className="text-sm text-gray-400">Manual de Prácticas Correctas de Higiene y Manipulación de alimentos</span>
                </li>
                <li className="transition-colors duration-300 hover:text-white cursor-pointer">
                  <strong>SECAP</strong> - Mantenimiento y Ensamblaje de un PC Básico (60 horas)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
