import { useEffect } from 'react'

export default function Gallery() {
  const images = [
    { 
      id: 1, 
      image: "/clasica.png"
    },
    { 
      id: 2, 
      image: "/hawaii.jpg"
    },
    { 
      id: 3, 
      image: "/sukita.jpg"
    }
    // { 
    //   id: 4,
    //   image: "/gallega.jpg"
    // },
    // { 
    //   id: 5, 
    //   image: "/stella.jpg"
    // },
    // { 
    //   id: 6, 
    //   image: "/clasica.png"
    // }
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Galería</h2>
        <p className="text-center text-gray-400 mb-12">
          Una colección de mis mejores creaciones
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
