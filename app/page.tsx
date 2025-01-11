'use client'

import Image from 'next/image'

export default function Home() {
  const products = [
  { id: 1, name: 'Classic Curtains', description: 'Elegant and timeless curtains for any room', image: '/products/classic-curtains.jpg' },
  { id: 2, name: 'Modern Blinds', description: 'Sleek and functional blinds for a contemporary look', image: '/products/modern-blinds.jpg' },
  { id: 3, name: 'Blackout Shades', description: 'Perfect for bedrooms and home theaters', image: '/products/blackout-shades.jpg' },
  { id: 4, name: 'Roman Shades', description: 'Combine the elegance of drapery with the functionality of blinds', image: '/products/roman-shades.jpg' },
];


  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#800000] text-white p-4">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold text-[#FFD700]">Krish Living Solutions</span>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-[#FFD700] transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-[#FFD700] transition-colors">Products</a></li>
            <li><a href="#contact" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section id="home" className="py-16 bg-[#800000]/5">
          <div className="container mx-auto px-4">
            <div className="w-full mb-16">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_KLS.jpg-fDpbmgqIQIbAOyLgSaDbxFtuMK5MmV.jpeg"
                alt="Krish Living Solutions Logo"
                width={800}
                height={600}
                className="w-full max-w-[800px] mx-auto"
                priority
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6 text-[#800000]">Welcome to Krish Living Solutions</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Transform your living spaces with our exquisite collection of curtains and blinds. We bring luxury and comfort to every window.</p>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#800000]">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-lg">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300} 
                    height={200} 
                    className="rounded-lg mb-4 w-full"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#800000]">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-[#800000]/5">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#800000]">Contact Us</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#800000]">Krish Living Solutions</h3>
              <address className="not-italic">
                <p className="mb-1">Shop No: F69, Phase II</p>
                <p className="mb-1">Spencer Plaza, Annasalai</p>
                <p className="mb-4">Chennai - 600002</p>
                <p className="mb-4">
                  <a href="tel:+919150503388" className="text-[#800000] hover:underline">
                    Ph: 9150503388
                  </a>
                </p>
              </address>
              <p className="mt-4">Visit our shop to explore our exquisite collection of curtains and blinds. We're here to help you find the perfect window treatments for your home.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#800000] text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-[#FFD700]">&copy; 2023 Krish Living Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

