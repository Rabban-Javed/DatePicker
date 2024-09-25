// src/setupTests.js

// Import jest-dom for additional DOM-specific matchers
import '@testing-library/jest-dom/extend-expect';

// Example: Mock global fetch API for all tests
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'sample data' }),
    })
  );
  
// Example: Mock localStorage if needed
const localStorageMock = (function() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
