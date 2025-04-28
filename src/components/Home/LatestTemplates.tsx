import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";

const latestTemplates = [
  {
    title: "Orbe",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background.png",
  },
  {
    title: "Blnk",
    price: "$24",
    category: "Ecommerce",
    image: "/image/6k7bBnip3YLdTdCpFjY5om9VyA.png (1).png",
  },
  {
    title: "Krate",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (1).png",
  },
  {
    title: "AltC",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (2).png",
  },
  {
    title: "Trinity",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (3).png",
  },
  {
    title: "Polar",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (4).png",
  },
  {
    title: "Nayzak",
    price: "$24",
    category: "Ecommerce",
    image: "/image/QHdnDsVByQSTwaddrStKkQzKw.png",
  },
  {
    title: "Flora",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (5).png",
  },
];
export default function LatestTemplates() {
  return (
    <section className="py-20 container">
      <div className="mx-auto px-4 max-w-6xl ">
        <FadeUp>
          <h3>Latest Templates</h3>
        </FadeUp>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestTemplates.map((template, id) => (
  <FadeUp>
            <div key={id} className="pt-4">
              <div>
              
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                
              </div>
              <div className="flex justify-between items-center pt-3">
                <div>
                  
                    <h4>{template.title}</h4>
                 
                    <p className="text-muted-foreground">{template.category}</p>
                  
                </div>
                <div>
                 
                    <h5 className="bg-[#F9FAFB] px-3 py-1 rounded-3xl text-secondary-foreground">
                      {template.price}
                    </h5>
                  
                </div>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
