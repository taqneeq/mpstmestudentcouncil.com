import { committeesData } from "@/lib/committeesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { fests: string };
}) {
  return {
    title: `Fests`,
    description: `Browse all Fests at MPSTME.`,
  };
}

export default function CategoryPage() {
  const categoryParam = "fests";
  const categoryData = committeesData.find(
    (c) => c.name.toLowerCase() === categoryParam
  );

  if (!categoryData) {
    notFound();
  }

  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-5xl font-extrabold capitalize"
              data-aos="fade-up"
            >
              {categoryData.name} Committees
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryData.committees.map((committee) => {
              const committeeSlug = committee.name.toLowerCase().split(" ")[0];
              const logoSrc = `/images/fests/${committeeSlug}/logo.png`;

              return (
                <Link
                  key={committee.name}
                  href={
                    categoryParam === "fests"
                      ? `/fests`
                      : `/committees/${categoryParam}/${committeeSlug}`
                  }
                  className="group flex flex-col items-center p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-all duration-300 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="relative w-32 h-32 mb-4 flex-shrink-0">
                    <Image
                      src={logoSrc}
                      alt={`${committee.name} Logo`}
                      layout="fill"
                      objectFit="contain"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-100">
                    {committee.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
