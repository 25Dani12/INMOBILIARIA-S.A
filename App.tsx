
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PropertyCard } from './components/PropertyCard';
import { CategoryFilter } from './components/CategoryFilter';
import { PROPERTIES, CATEGORIES } from './constants';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredProperties = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return PROPERTIES;
    }
    return PROPERTIES.filter(property => property.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Encuentra tu Próximo Hogar</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Explora nuestra selección exclusiva de propiedades en arrendamiento. Tenemos el espacio perfecto que se adapta a tus necesidades y estilo de vida.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <CategoryFilter 
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold text-gray-700">Sin Resultados</h3>
                        <p className="mt-2 text-lg text-gray-500">No se encontraron propiedades en esta categoría.</p>
                    </div>
                )}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
