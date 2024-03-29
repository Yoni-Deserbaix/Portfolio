import Title from "@/components/ui/Title";

export default function Contact() {
  return (
    <section id="contact">
      <Title
        text="Contact 📪
        "
        className="flex flex-col mt-28 items-center justify-center text-3xl -rotate-6"
      />
      <div>
        <div className="mt-28 flex max-md:flex-col gap-2 max-xl:pl-16">
          <p className="text-2xl font-bold ">Une opportunité d'alternance ?</p>
          <h1 className="text-2xl font-bold hover:text-green-400 transition-all">
            Contactez-moi 👇
            <div className="w-48 h-2 bg-green-500 rounded-full"></div>
            <div className="w-48 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </h1>
        </div>

        <div className="flex justify-evenly max-lg:flex-col max-lg:gap-4 mt-14 max-xl:pl-16">
          <div className="contact-container flex items-center gap-4">
            <span className="p-4 rounded-[50%] hover:scale-110 transition-all">
              <i className="bx bxs-map text-2xl"></i>
            </span>
            <div className="contact-box">
              <h3 className="font-bold text-xl">Lieu</h3>
              <p className="text-lg text-gray-300">Nantes, France</p>
            </div>
          </div>
          <div className="contact-container  flex items-center gap-4">
            <span className=" p-4 rounded-[50%] hover:scale-110 transition-all">
              <i className="bx bxs-envelope text-2xl"></i>
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">Mail</h3>
              <a
                href="mailto:yonideserbaix@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-lg text-gray-300"
              >
                yonideserbaix@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
