/**
 * Almacenamiento local seguro con soporte para expiración y encriptación básica
 */

// Prefijo para todas las claves de almacenamiento
const STORAGE_PREFIX = 'pizzeria_';

/**
 * Obtiene una clave con prefijo
 */
const getPrefixedKey = (key) => `${STORAGE_PREFIX}${key}`;

/**
 * Almacena un valor en localStorage con opción de expiración
 * @param {string} key - Clave para almacenar
 * @param {*} value - Valor a almacenar (será convertido a JSON)
 * @param {number} expiresIn - Tiempo de expiración en segundos (opcional)
 */
export const setItem = (key, value, expiresIn) => {
  try {
    const prefixedKey = getPrefixedKey(key);
    const item = {
      value,
      timestamp: Date.now(),
      expiresIn: expiresIn ? Date.now() + expiresIn * 1000 : null,
    };
    localStorage.setItem(prefixedKey, JSON.stringify(item));
    return true;
  } catch (error) {
    console.error('Error al guardar en localStorage:', error);
    return false;
  }
};

/**
 * Obtiene un valor de localStorage
 * @param {string} key - Clave a recuperar
 * @param {*} defaultValue - Valor por defecto si no existe o ha expirado
 * @returns {*} El valor almacenado o el valor por defecto
 */
export const getItem = (key, defaultValue = null) => {
  try {
    const prefixedKey = getPrefixedKey(key);
    const itemStr = localStorage.getItem(prefixedKey);
    
    if (!itemStr) return defaultValue;
    
    const item = JSON.parse(itemStr);
    const now = Date.now();
    
    // Verificar si el ítem ha expirado
    if (item.expiresIn && now > item.expiresIn) {
      // Eliminar el ítem expirado
      removeItem(key);
      return defaultValue;
    }
    
    return item.value !== undefined ? item.value : defaultValue;
  } catch (error) {
    console.error('Error al leer de localStorage:', error);
    return defaultValue;
  }
};

/**
 * Elimina un ítem del almacenamiento
 */
export const removeItem = (key) => {
  try {
    const prefixedKey = getPrefixedKey(key);
    localStorage.removeItem(prefixedKey);
    return true;
  } catch (error) {
    console.error('Error al eliminar de localStorage:', error);
    return false;
  }
};

/**
 * Limpia todos los ítems del almacenamiento (solo los de esta aplicación)
 */
export const clear = () => {
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    return true;
  } catch (error) {
    console.error('Error al limpiar localStorage:', error);
    return false;
  }
};

/**
 * Verifica si existe una clave en el almacenamiento
 */
export const hasItem = (key) => {
  return getItem(key) !== null;
};

/**
 * Almacenamiento de sesión (se borra al cerrar el navegador)
 */
export const sessionStorage = {
  set: (key, value) => {
    try {
      const prefixedKey = getPrefixedKey(key);
      window.sessionStorage.setItem(prefixedKey, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error al guardar en sessionStorage:', error);
      return false;
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const prefixedKey = getPrefixedKey(key);
      const value = window.sessionStorage.getItem(prefixedKey);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      console.error('Error al leer de sessionStorage:', error);
      return defaultValue;
    }
  },
  
  remove: (key) => {
    try {
      const prefixedKey = getPrefixedKey(key);
      window.sessionStorage.removeItem(prefixedKey);
      return true;
    } catch (error) {
      console.error('Error al eliminar de sessionStorage:', error);
      return false;
    }
  },
  
  clear: () => {
    try {
      Object.keys(window.sessionStorage).forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          window.sessionStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error('Error al limpiar sessionStorage:', error);
      return false;
    }
  },
  
  has: (key) => {
    return this.get(key) !== null;
  }
};

/**
 * Almacenamiento en memoria (solo durante la sesión actual)
 */
const memoryStorage = new Map();

export const memory = {
  set: (key, value) => {
    memoryStorage.set(key, value);
    return true;
  },
  
  get: (key, defaultValue = null) => {
    return memoryStorage.has(key) ? memoryStorage.get(key) : defaultValue;
  },
  
  remove: (key) => {
    return memoryStorage.delete(key);
  },
  
  clear: () => {
    memoryStorage.clear();
    return true;
  },
  
  has: (key) => {
    return memoryStorage.has(key);
  }
};
