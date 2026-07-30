import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something useful."
            text="I'm open to working student and internship opportunities in AI, machine learning and data science."
          />

          <div className="flex flex-col gap-4 text-zinc-300">
            <a href="mailto:melroydcosta7@gmail.com" className="flex items-center gap-3 hover:text-white">
              <Mail size={18} /> melroydcosta7@gmail.com
            </a>
              <a
                  href="tel:+4915510823806"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone size={18} />
                  +49 155 10823806
                </a>

            <div className="flex items-center gap-3">
              <MapPin size={18} /> Marburg Germany
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
