import { ThemeToggle } from "@/components/toggler/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3 container">
        <div className="flex justify-between items-center mb-5">
          <h3>Hustle Articles</h3>
          <ThemeToggle />
        </div>
        <div className="justify-center items-center gap-3 bg-primary px-2 min-h-[50vh]">
          <h1>Lorem ipsum, dolor sit </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae odio
            voluptatem temporibus, placeat perspiciatis accusamus suscipit
            ducimus quas tenetur ratione.
          </p>
          <div>
            <span className="badge">badge</span>
            <Button>button</Button>
            <Button variant="primary">button</Button>
          </div>
          <Button variant="primary" className="rounded-full w-full">
            full button
          </Button>
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <h3>Lorem, ipsum.</h3>
          <h4>Lorem, ipsum.</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laborum sint odio impedit asperiores tempore incidunt veritatis
            illum odit in?
          </span>
        </div>
      </div>
    </>
  );
}
