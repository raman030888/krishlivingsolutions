import Image from 'next/image'

const products = [
  { id: 1, name: 'Classic Curtains', description: 'Elegant and timeless curtains for any room', image: '/products/classic-curtains.jpg' },
  { id: 2, name: 'Modern Blinds', description: 'Sleek and functional blinds for a contemporary look', image: '/products/modern-blinds.jpg' },
  { id: 3, name: 'Blackout Shades', description: 'Perfect for bedrooms and home theaters', image: '/products/blackout-shades.jpg' },
  { id: 4, name: 'Roman Shades', description: 'Combine the elegance of drapery with the functionality of blinds', image: '/products/roman-shades.jpg' },
];


export default function Products() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300} 
              height={200} 
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

