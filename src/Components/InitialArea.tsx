interface InitialBtnProps {
  title: string;
  link: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
}

const InitialBtn = ({ title, link, children, variant = "ghost" }: InitialBtnProps) => {
  const base =
    "flex flex-row items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  const styles = {
    primary:
      "bg-detail1 text-bg1 hover:bg-detail2 shadow-lg shadow-detail1/20",
    ghost:
      "bg-bg2 border border-detail3 hover:border-detail1 hover:bg-bg3 text-e9e9e9",
  };

  return (
    <a target="_blank" href={link} className={`${base} ${styles[variant]}`}>
      {children}
      {title}
    </a>
  );
};

export const InitialArea = () => {
  return (
    <div
      className="relative h-screen w-full flex justify-center items-center
        bg-[url('/mainBg.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(155,135,245,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col sm:h-1/2 w-10/12 sm:w-1/2 gap-6">
        {/* label */}
        <span
          className="animate-fade-up text-sm tracking-widest uppercase text-detail1 opacity-70 font-medium"
          style={{ animationDelay: "0s" }}
        >
          Hi, I am
        </span>

        {/* name */}
        <h1
          className="animate-fade-up -mt-3"
          style={{ animationDelay: "0.1s" }}
        >
          Cicero Leite
        </h1>

        {/* tagline */}
        <span
          className="animate-fade-up text-lg font-semibold text-detail2 -mt-3"
          style={{ animationDelay: "0.2s" }}
        >
          I turn ideas into interactive web products.
        </span>

        {/* bio */}
        <p
          className="animate-fade-up text-sm text-[#b0aac8] leading-relaxed max-w-md"
          style={{ animationDelay: "0.3s" }}
        >
          Front-end developer dedicated to building interfaces that are clean,
          performant, and accessible — always ensuring the user experience comes
          first.
        </p>

        {/* divider */}
        <div
          className="animate-fade-up h-px w-16 bg-detail1 opacity-40"
          style={{ animationDelay: "0.4s" }}
        />

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-wrap gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <InitialBtn
            title="LinkedIn"
            link="https://www.linkedin.com/in/ciceromarceloll/"
            variant="primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </InitialBtn>

          <InitialBtn title="GitHub" link="https://github.com/CMatchelo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </InitialBtn>

          <InitialBtn
            title="Curriculum"
            link="https://drive.google.com/file/d/1VBx4j7zrFJPU21PNrCpvhuVhbCZ56w7c/view?usp=drive_link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </InitialBtn>
        </div>
      </div>

      {/* scroll-down arrow */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase opacity-40 text-[#9b87f5]">
          scroll
        </span>
        <button
          onClick={() =>
            document.getElementById("professional-projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-bounce-arrow opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9b87f5" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
