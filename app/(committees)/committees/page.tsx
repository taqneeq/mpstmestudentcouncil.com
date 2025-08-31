import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Committees',
    description: 'Explore the diverse range of student committees at MPSTME.',
};

const categories = [
    { name: 'Fest', description: 'Experience the vibrant cultural and technical festivals on campus.' },
    { name: 'Council', description: 'Meet the student leaders driving university initiatives and governance.' },
    { name: 'Technical', description: 'Dive into the world of technology, from coding to robotics and beyond.' },
    { name: 'Management', description: 'Explore the domains of finance, entrepreneurship, and business strategy.' },
    { name: 'Social', description: 'Join hands to make a positive impact on the community and society.' },
    { name: 'Others', description: 'Discover unique committees that cater to a variety of other interests.' },
];

export default function CommitteesPage() {
    return (
        <section className="relative bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold" data-aos="fade-up">
                            Our Committees
                        </h1>
                        <p className="text-lg text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="100">
                            A diverse range of committees, each offering unique opportunities.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, index) => {
                            const categorySlug = category.name.toLowerCase();
                            // Dynamically create the link and image source
                            const linkHref = categorySlug === 'fest' ? '/fests' : `/committees/${categorySlug}`;
                            const imageSrc = `/images/committees/${categorySlug}/logo.png`;

                            return (
                                <div key={category.name} data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                                    <Link href={linkHref}>
                                        <div className="flex flex-col h-full bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition-all duration-300 ease-in-out p-6 text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                                <Image
                                                    src={imageSrc}
                                                    alt={`${category.name} Category`}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2 capitalize">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-400 flex-grow">
                                                {category.description}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}