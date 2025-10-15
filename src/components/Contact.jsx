import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' o 'error'

  // Inicializar EmailJS (solo una vez al montar el componente)
  useEffect(() => {
    // Reemplaza con tu PUBLIC KEY de EmailJS
    emailjs.init('2lpVt79v0cw3qxNf7')
  }, [])

  const onSubmit = async (data) => {
    setLoading(true)
    setMessage('')
    setMessageType('')

    try {
      // Enviar email usando EmailJS
      // Reemplaza con tu SERVICE_ID y TEMPLATE_ID
      const result = await emailjs.send(
        'service_xc92kvf', // Tu SERVICE_ID
        'template_jd98x7b', // Tu TEMPLATE_ID
        {
          to_email: 'angelsorianom.1989@gmail.com', // Tu email
          from_name: data.nombre,
          from_email: data.email,
          message: data.mensaje,
          phone: data.telefono || 'No proporcionado'
        }
      )

      if (result.status === 200) {
        setMessage('¡Mensaje enviado con éxito! Me pondré en contacto pronto.')
        setMessageType('success')
        reset()
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          setMessage('')
          setMessageType('')
        }, 5000)
      }
    } catch (error) {
      console.error('Error al enviar:', error)
      setMessage('Error al enviar el mensaje. Intenta de nuevo.')
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Contacto</h2>
        <p className="text-center text-gray-400 mb-12">¡Trabajemos Juntos!</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nombre</label>
              <input
                type="text"
                {...register('nombre', { required: 'Nombre requerido' })}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded focus:border-orange-500 focus:outline-none text-white placeholder-gray-500"
              />
              {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded focus:border-orange-500 focus:outline-none text-white placeholder-gray-500"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Teléfono (Opcional)</label>
              <input
                type="tel"
                {...register('telefono')}
                placeholder="Tu teléfono"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded focus:border-orange-500 focus:outline-none text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Mensaje</label>
              <textarea
                {...register('mensaje', { required: 'Mensaje requerido' })}
                placeholder="Tu mensaje"
                rows="5"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 resize-none"
              ></textarea>
              {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje.message}</span>}
            </div>

            {/* Mensaje de estado */}
            {message && (
              <div className={`p-4 rounded-lg text-white ${messageType === 'success' ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white font-bold py-3 rounded transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Contratar al Maestro Pizzero'
              )}
            </button>
          </form>

          {/* Contacto directo */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-3xl font-bold text-white">O contáctame directamente</h3>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-500 text-4xl">📱</div>
              <div>
                <p className="text-gray-400">Teléfono</p>
                <p className="text-2xl font-bold text-white">0985150696</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-orange-500 text-4xl">📧</div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-xl font-bold text-white">angelsorianom.1989@gmail.com</p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 mb-4">
                Siempre abierto a nuevas colaboraciones, consultas de oportunidades, o simplemente compartir mi pasión por la pizza. ¡Siéntete libre de enviar un mensaje!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
