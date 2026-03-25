export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 260 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* House icon */}
      <path
        d="M20 4L38 20H33V36H23V26H17V36H7V20H2L20 4Z"
        fill="white"
      />
      <path
        d="M20 10L30 19H27V28H22V22H18V28H13V19H10L20 10Z"
        fill="#0a0a0a"
      />
      {/* СТРОИТЕЛЬНЫЙ */}
      <text
        x="48"
        y="18"
        fontFamily="monospace"
        fontSize="10"
        fontWeight="400"
        fill="white"
        letterSpacing="3"
        opacity="0.6"
      >
        СТРОИТЕЛЬНЫЙ
      </text>
      {/* ФРОНТ */}
      <text
        x="48"
        y="34"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="700"
        fill="white"
        letterSpacing="4"
      >
        ФРОНТ
      </text>
    </svg>
  );
};