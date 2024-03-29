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
        <div className="mt-28 flex flex-row gap-2 max-xl:pl-16">
          <p className="text-3xl font-bold">
            Une opportunité d'alternance ? Contactez-moi 👇
          </p>
        </div>

        <div className="flex justify-evenly max-lg:flex-col max-lg:gap-4 mt-14 max-xl:pl-16">
          <div className="contact-container flex items-center gap-4">
            <span className="p-4 rounded-[50%] hover:scale-110 transition-all">
              <i className="bx bxs-map text-2xl"></i>
            </span>
            <div className="contact-box">
              <h3 className="font-semibold text-[1.2rem]">Lieu</h3>
              <p className="text-lg text-gray-300">Nantes, France</p>
            </div>
          </div>
          <div className="contact-container  flex items-center gap-4">
            <span className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 rounded-[50%] hover:scale-110 transition-all">
              <i className="bx bxs-envelope text-2xl"></i>{" "}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[1.2rem]">Mail</h3>
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
          <Title
            text="CV"
            href=""
            target="_blank"
            rel="noreferrer"
            className=" transition-all duration-[0.2s] text-center max-w-[200px] mt-[15px] px-12 py-[0.7rem] rounded-[5px] border-[none]  text-xl"
          >
            <i className="fa-solid fa-download" />
            CV
          </Title>
        </div>
      </div>
    </section>
  );
}
