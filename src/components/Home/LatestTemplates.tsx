import React, { lazy } from 'react'

const latestTemplates = [
  { title: "Orbe", price: "$24", category: "Ecommerce", image: "/image/Background.png" },
  { title: "Blnk", price: "$24", category: "Ecommerce", image: "/image/6k7bBnip3YLdTdCpFjY5om9VyA.png (1).png" },
  { title: "Krate", price: "$24", category: "Ecommerce", image: "/image/Background (1).png" },
  { title: "AltC", price: "$24", category: "Ecommerce", image: "/image/Background (2).png" },
  { title: "Trinity", price: "$24", category: "Ecommerce", image: "/image/Background (3).png" },
  { title: "Polar", price: "$24", category: "Ecommerce", image: "/image/Background (4).png" },
  { title: "Nayzak", price: "$24", category: "Ecommerce", image: "/image/QHdnDsVByQSTwaddrStKkQzKw.png" },
  { title: "Flora", price: "$24", category: "Ecommerce", image: "/image/Background (5).png" }
]
export default function LatestTemplates() {

  return (
    <section className="py-20 container">
    <div className="max-w-6xl mx-auto px-4">
      <h3>Latest Templates</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestTemplates.map((template, id) => (
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
