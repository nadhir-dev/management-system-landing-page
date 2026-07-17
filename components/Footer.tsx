export default function Footer() {
  return (
    <footer className="px-6 md:px-16  lg:px-24 xl:px-32 pt-8 w-full bg-footer text-footer-foreground/80 dark:text-tertiary ">
      <div className="flex flex-col  md:flex-row justify-between w-full gap-10 border-b border-footer-foreground/10 pb-6">
        <div className="md:max-w-96 flex flex-col gap-6">
          ICON
          <p className=" text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry &apos s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 light:text-footer-foreground">
              Company
            </h2>
            <ul className="text-sm space-y-2">
              <li className="hover:text-footer-foreground dark:hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-footer-foreground dark:hover:text-white">
                <a href="#features">Features</a>
              </li>
              <li className="hover:text-footer-foreground dark:hover:text-white">
                <a href="#metrics">Metrics</a>
              </li>
              <li className="hover:text-footer-foreground dark:hover:text-white">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 ">Get in touch</h2>
            <div className="text-sm space-y-2 ">
              <p className="select-all">+1-212-456-7890</p>
              <p className="select-all">contact@example.com</p>
              <div className="flex mt-1 items-center gap-4    light:text-footer-foreground/60">
                <a
                  href="#"
                  className="hover:-translate-y-0.5 dark:hover:text-white  transition-all duration-300"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:-translate-y-0.5 dark:hover:text-white transition-all duration-300"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:-translate-y-0.5 dark:hover:text-white transition-all duration-300"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center  light:text-footer-foreground text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} © <a href="#">Company</a>. All
        Right Reserved.
      </p>
    </footer>
  );
}
