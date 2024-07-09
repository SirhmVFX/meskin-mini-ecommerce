import Productcard from "@/components/Productcard";
import { products } from "@/data";

export default function Home() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-12">
      {products.map((p) => (
        <Productcard key={p.id} {...p} />
      ))}
    </div>
  );
}
