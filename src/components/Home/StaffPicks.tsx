import React, { lazy } from 'react'

const staffPicks = [
    { title: "Kozmo", price: "$24", category: "Ecommerce", image: "/image/Background (6).png" },
    { title: "Herka", price: "$24", category: "Ecommerce", image: "/image/Background (7).png" },
    { title: "Plymm", price: "$24", category: "Ecommerce", image: "/image/Background (8).png" },
    { title: "Tyco", price: "$24", category: "Ecommerce", image: "/image/Background (9).png" },
    { title: "Dento", price: "$24", category: "Ecommerce", image: "/image/Background (10).png" },
    { title: "Crane", price: "$24", category: "Ecommerce", image: "/image/Background (11).png" },
    { title: "Bliss", price: "$24", category: "Ecommerce", image: "/image/Background (12).png" },
    { title: "Kento", price: "$24", category: "Ecommerce", image: "/image/Background (13).png" },
    
]
export default function StaffPicks() {

  return (
    <section className="py-20 container">
    <div className="max-w-6xl mx-auto px-4">
      <h3>Staff Picks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staffPicks.map((template, id) => (
          <div key={id} className="p-4">
            <div className="">
              <img src={template.image} alt={template.title} className="w-full h-full object-cover" />
            </div>
            <div className='flex justify-between items-center pt-3'>
            <div>
            <h4 >{template.title}</h4>
            <p className="text-muted-foreground">{template.category}</p>
            </div>
            <div>
            <h5 className="text-secondary-foreground bg-[#F9FAFB] py-1 px-3 rounded-3xl">{template.price}</h5>
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
