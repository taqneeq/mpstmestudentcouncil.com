export const metadata = {
  title: "Editorial BoardMPSTME ",
  description: "Page description",
};

import "../../../../css/card.css";
import prabir from "../../../../../public/images/prabir.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import hero from "@/public/images/oldimages/MUNSOC_LOGO_TRANSPARENT_1.png";
import '@/app/css/changes.css'
export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">MunSociety</h1>
          </div>

          {/* Form */}
          <Image src={hero} alt="TRC" width={3000} height={3000} />

          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Our Vision.</h2>
                  <p className="text-xl text-gray-400">
                    At MUNSoc, we deliver best-in-class ad inspire change like
                    no other. Be it out alumni, or an executive spending their
                    first year with us, we are more than just another Society;
                    we are nothing short of family. We envision our team to be
                    the forerunners in creating positive change through debate
                    and diplomacy. We strive to nurture a community of
                    forward-thinking individuals, the kind that can potentially
                    change our future for the better.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </section>
  );
}
