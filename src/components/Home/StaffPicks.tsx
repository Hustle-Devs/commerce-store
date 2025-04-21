import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";

const staffPicks = [
  {
    title: "Kozmo",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (6).png",
  },
  {
    title: "Herka",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (7).png",
  },
  {
    title: "Plymm",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (8).png",
  },
  {
    title: "Tyco",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (9).png",
  },
  {
    title: "Dento",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (10).png",
  },
  {
    title: "Crane",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (11).png",
  },
  {
    title: "Bliss",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (12).png",
  },
  {
    title: "Kento",
    price: "$24",
    category: "Ecommerce",
    image: "/image/Background (13).png",
  },
];
export default function StaffPicks() {
  return (
    <section className="py-20 container">
      <div className="mx-auto px-4 max-w-6xl">
        <h3>Staff Picks</h3>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {staffPicks.map((template, id) => (
            <div key={id} className="p-4">
              <div className="">
                <ZoomIn>
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                </ZoomIn>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div>
                  <FadeUp>
                    <h4>{template.title}</h4>
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <p className="text-muted-foreground">{template.category}</p>
                  </FadeUp>
                </div>
                <div>
                  <FadeUp delay={0.4}>
                    <h5 className="bg-[#F9FAFB] px-3 py-1 rounded-3xl text-secondary-foreground">
                      {template.price}
                    </h5>
                  </FadeUp>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
