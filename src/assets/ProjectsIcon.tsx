import React from 'react';

const ProjectsIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14.0006H54V44.0006C54 44.531 53.7893 45.0398 53.4142 45.4148C53.0391 45.7899 52.5304 46.0006 52 46.0006H42C41.4696 46.0006 40.9609 45.7899 40.5858 45.4148C40.2107 45.0398 40 44.531 40 44.0006V38.0006H24V52.0006C24 52.531 23.7893 53.0398 23.4142 53.4148C23.0391 53.7899 22.5304 54.0006 22 54.0006H12C11.4696 54.0006 10.9609 53.7899 10.5858 53.4148C10.2107 53.0398 10 52.531 10 52.0006V14.0006Z"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 30.0004H10"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 14.0006V38.0006"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 30.0004H54"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 14.0006V38.0006"
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter0_d_21_5470)">
        <circle
          cx="32"
          cy="34"
          r="20"
          fill="#7B4AE2"
          fill-opacity="0.2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_21_5470"
          x="8"
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
            result="effect1_dropShadow_21_5470"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_5470"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ProjectsIcon;
