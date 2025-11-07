interface InitialBtnProps {
  title: string;
  link: string;
  children?: React.ReactNode;
}

const InitialBtn = ({ title, link, children }: InitialBtnProps) => {
  return (
    <a
      target="_blank"
      href={link}
      className="flex flex-row gap-2
        p-2 rounded-lg bg-detail3 
        border border-detail3 hover:border-detail1
        
        "
    >
      {children}
      {title}
    </a>
  );
};

export const InitialArea = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center
  bg-[url('./mainBg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col sm:h-1/2 w-10/12 sm:w-1/2 gap-4">
        <div className="flex flex-row">
          <div className="flex-2 flex flex-col justify-center">
            <span>Hi, I am</span>
            <h1>Cicero Leite</h1>
            <span className="text-detail2 font-bold text-xl">
              I turn ideas into interactive web products.
            </span>
            <br/>
            <p>
                I’m a front-end developer dedicated to building interfaces that are clean, performant, and accessible. Always ensuring the user experience comes first.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <InitialBtn
            title="Linkedin"
            link="https://www.linkedin.com/in/ciceromarceloll/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </InitialBtn>
          <InitialBtn title="Github" link="https://github.com/CMatchelo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </InitialBtn>
          <InitialBtn
            title="Curriculum"
            link="https://drive.google.com/file/d/1VBx4j7zrFJPU21PNrCpvhuVhbCZ56w7c/view?usp=drive_link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </InitialBtn>
        </div>
      </div>
    </section>
  );
};
