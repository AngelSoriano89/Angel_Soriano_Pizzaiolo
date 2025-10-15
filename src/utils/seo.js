/**
 * Actualiza las etiquetas meta para SEO
 * @param {Object} options - Opciones para SEO
 * @param {string} options.title - Título de la página
 * @param {string} options.description - Descripción de la página
 * @param {string} options.image - URL de la imagen para redes sociales
 * @param {string} options.url - URL canónica de la página
 * @param {string} options.type - Tipo de contenido (article, website, etc.)
 */
export const updateMetaTags = ({
  title = 'Maestro Pizzero',
  description = '15 años de experiencia en pizza artesanal de calidad',
  image = 'https://via.placeholder.com/1200x630?text=Maestro+Pizzero',
  url = window.location.href,
  type = 'website'
} = {}) => {
  // Título de la página
  document.title = `${title} | Maestro Pizzero`;
  
  // Meta descripción
  updateMetaTag('description', description);
  
  // Open Graph / Facebook
  updateMetaTag('og:type', type);
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:image', image);
  updateMetaTag('og:url', url);
  
  // Twitter
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);
  
  // Canonical URL
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
};

/**
 * Actualiza o crea una etiqueta meta
 * @private
 */
const updateMetaTag = (name, content) => {
  // Para propiedades de Open Graph (og:...)
  const property = name.startsWith('og:') ? 'property' : 'name';
  
  let element = document.querySelector(`meta[${property}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Configuración por defecto para las páginas
 */
export const defaultSeo = {
  home: {
    title: 'Inicio',
    description: 'Bienvenido a Maestro Pizzero, 15 años de experiencia en pizza artesanal de calidad',
  },
  gallery: {
    title: 'Galería',
    description: 'Explora nuestras deliciosas creaciones de pizza artesanal',
  },
  contact: {
    title: 'Contacto',
    description: 'Contáctanos para pedidos especiales, eventos o cualquier consulta',
  },
  about: {
    title: 'Sobre Nosotros',
    description: 'Conoce la historia y la pasión detrás de Maestro Pizzero',
  },
};

/**
 * Hook para manejar el SEO en componentes
 */
export const useSEO = (options = {}) => {
  useEffect(() => {
    updateMetaTags(options);
  }, [JSON.stringify(options)]); // Usamos stringify para comparar objetos
};
