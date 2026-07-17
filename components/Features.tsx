"use client";
import Image from "next/image";
import type { FC, HTMLAttributes } from "react";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export const MessageIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "size-6"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const ZapIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "size-6"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const ChartIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "size-6"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" />
    <rect x="12" y="8" width="3" height="10" />
    <rect x="17" y="4" width="3" height="14" />
  </svg>
);

export const CheckCircleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "size-5"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
  </svg>
);
// --- FeaturedIcon ---
type FeaturedIconProps = {
  icon: FC<{ className?: string }>;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "brand";
  theme?: "light" | "gradient" | "dark" | "outline" | "modern";
};

const featuredIconSizes: Record<
  NonNullable<FeaturedIconProps["size"]>,
  string
> = {
  sm: "size-8 [&>svg]:size-4",
  md: "size-10 [&>svg]:size-5",
  lg: "size-12 [&>svg]:size-6",
  xl: "size-14 [&>svg]:size-7",
};

const featuredIconThemeColors: Record<
  NonNullable<FeaturedIconProps["color"]>,
  string
> = {
  brand: "bg-brand-50 text-brand-600",
};

const FeaturedIcon: FC<FeaturedIconProps> = ({
  icon: Icon,
  size = "md",
  color = "brand",
  theme = "light",
}) => {
  return (
    <div
      className={cx(
        "flex items-center justify-center rounded-full",
        featuredIconSizes[size],
        theme === "light" && featuredIconThemeColors[color],
        theme === "outline" && "border-2 border-current",
        theme === "dark" && "bg-gray-900 text-white",
      )}
    >
      <Icon />
    </div>
  );
};

// --- CheckItemText ---
type CheckItemTextProps = {
  text: string;
  size?: "sm" | "md" | "lg";
  iconStyle?: "outlined" | "filled";
  color?: "primary" | "secondary";
};

const checkItemTextSizes: Record<
  NonNullable<CheckItemTextProps["size"]>,
  string
> = {
  sm: "text-sm gap-2",
  md: "text-md gap-3",
  lg: "text-lg gap-3",
};

const CheckItemText: FC<CheckItemTextProps> = ({
  text,
  size = "md",
  iconStyle = "outlined",
  color = "primary",
}) => {
  return (
    <li className={cx("flex items-start", checkItemTextSizes[size])}>
      <CheckCircleIcon
        className={cx(
          "mt-0.5 size-5 shrink-0",
          iconStyle === "outlined" ? "text-brand-secondary" : "text-brand-600",
        )}
      />
      <span
        className={
          color === "primary" ? "text-brand-secondary" : "text-tertiary"
        }
      >
        {text}
      </span>
    </li>
  );
};

// --- AlternateImageMockup ---
const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      className={cx(
        "size-full rounded-[9.03px] bg-brand-secondary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-neutral-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
        props.className,
      )}
    >
      <div className="size-full rounded-[7.9px] bg-brand-secondary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
        <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-neutral-200 md:rounded-[15.06px] md:ring-[1.25px]">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col gap-12 overflow-hidden py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h3 className="text-4xl font-semibold text-brand-secondary md:text-md">
            Features
          </h3>

          <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl flex-1 self-center">
            <FeaturedIcon
              icon={MessageIcon}
              size="lg"
              color="brand"
              theme="light"
            />
            <h2 className="mt-5 text-display-xs font-semibold text-brand-secondary md:text-display-sm">
              Share team inboxes
            </h2>
            <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              {[
                "Leverage automation to move fast",
                "Always give customers a human to chat to",
                "Automate customer support and close leads faster",
              ].map((feat) => (
                <CheckItemText
                  key={feat}
                  size="md"
                  iconStyle="outlined"
                  color="secondary"
                  text={feat}
                />
              ))}
            </ul>
          </div>

          <div className="relative w-full flex-1 lg:h-128">
            <AlternateImageMockup className="lg:left-0">
              <Image
                width={600}
                height={350}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
              />
              <Image
                width={600}
                height={350}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
              />
            </AlternateImageMockup>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl flex-1 self-center lg:order-last">
            <FeaturedIcon
              icon={ZapIcon}
              size="lg"
              color="brand"
              theme="light"
            />
            <h2 className="mt-5 text-display-xs font-semibold text-brand-secondary md:text-display-sm">
              Deliver instant answers
            </h2>
            <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
            <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              {[
                "Keep your customers in the loop with live chat",
                "Embed help articles right on your website",
                "Customers never have to leave the page to find an answer",
              ].map((feat) => (
                <CheckItemText
                  key={feat}
                  size="md"
                  iconStyle="outlined"
                  color="secondary"
                  text={feat}
                />
              ))}
            </ul>
          </div>

          <div className="relative w-full flex-1 lg:h-128">
            <AlternateImageMockup className="lg:right-0">
              <Image
                width={1200}
                height={750}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
              />
              <Image
                width={1200}
                height={750}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
              />
            </AlternateImageMockup>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl flex-1 self-center">
            <FeaturedIcon
              icon={ChartIcon}
              size="lg"
              color="brand"
              theme="light"
            />
            <h2 className="mt-5 text-display-xs font-semibold text-brand-secondary md:text-display-sm">
              Manage your team with reports
            </h2>
            <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
              Measure what matters with Untitleds easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
            <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              {[
                "Filter, export, and drilldown on the data quickly",
                "Save, schedule, and automate reports to your inbox",
                "Connect the tools you already use with 100+ integrations",
              ].map((feat) => (
                <CheckItemText
                  key={feat}
                  size="md"
                  iconStyle="outlined"
                  color="secondary"
                  text={feat}
                />
              ))}
            </ul>
          </div>

          <div className="relative w-full flex-1 lg:h-128">
            <AlternateImageMockup className="lg:left-0">
              <Image
                height={550}
                width={750}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
              />
              <Image
                height={550}
                width={750}
                alt="Dashboard mockup showing application interface"
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
              />
            </AlternateImageMockup>
          </div>
        </div>
      </div>
    </section>
  );
};
