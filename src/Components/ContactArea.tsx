import { AreaHeader } from "./AreaHeader";

interface SocialBoxProps {
  title: string;
  link: string;
  children: React.ReactNode;
}

const SocialBox = ({ title, link, children }: SocialBoxProps) => {
  return (
    <>
      <a
        target="_blank"
        href={link}
        className="
            flex gap-2
            p-4 border border-detail3 
            cursor-pointer
            hover:border-detail1
            transition"
      >
        {children}
        {title}
      </a>
    </>
  );
};

export const ContactArea = () => {
  return (
    <section className="flex flex-col items-center border-t border-detail3 pt-10 mt-10 mx-4 sm:mx-10">
      <AreaHeader
        title="Contact & About"
      />
      <div className="flex flex-col gap-5 mt-4 w-full">
        <span className="text-lg">
          Front-end developer with solid experience in designing and maintaining
          e-commerce platforms and systems built with React and Next.js. Proven
          track record in developing features, resolving bugs, and ensuring
          system stability using{" "}
          <strong>
            React, Next.js, KnockoutJS, HTML, CSS, JavaScript, and Oracle
            Commerce Cloud
          </strong>
          . Experienced in technical leadership, interface development, and
          delivering user-centered solutions with a strong focus on usability
          and measurable business outcomes.
          <br />
          <br />
          Feel free to reach out for opportunities, collaborations, or just to
          say hello.
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SocialBox
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
          </SocialBox>

          <SocialBox title="Email" link="mailto:cicero.marcelo.ll@gmail.com">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </SocialBox>

          <SocialBox title="Github" link="https://github.com/CMatchelo">
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
          </SocialBox>

          <SocialBox title="Curriculum" link="https://drive.google.com/file/d/1VBx4j7zrFJPU21PNrCpvhuVhbCZ56w7c/view?usp=drive_link">
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
          </SocialBox>
        </div>
      </div>
    </section>
  );
};
