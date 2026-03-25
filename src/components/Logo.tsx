export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* House icon */}
      <path
        d="M20 6L36 20H32V36H22V26H18V36H8V20H4L20 6Z"
        fill="white"
      />
      {/* REMONT text */}
      <text
        x="46"
        y="28"
        fontFamily="monospace"
        fontSize="16"
        fontWeight="600"
        fill="white"
        letterSpacing="2"
      >
        РЕМОНТ
      </text>
    </svg>
  );
};
