import React from 'react';

const CodeIcon = () => {
  return (
    <svg
      width="76"
      height="64"
      viewBox="0 0 76 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 21.9996L4 31.9996L16 41.9996"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 21.9996L60 31.9996L48 41.9996"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 10.0003L24 54.0003"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter0_d_21_5442)">
        <circle
          cx="52"
          cy="34"
          r="20"
          fill="#7B4AE2"
          fillOpacity="0.2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_21_5442"
          x="28"
          y="14"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_21_5442"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_5442"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CodeIcon;
