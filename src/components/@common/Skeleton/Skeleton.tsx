import { css, Theme } from '@emotion/react';

interface SkeletonProps {
  width?: string;
  height?: string;
  marginBottom?: string;
  circle?: boolean;
}

function Skeleton({
  width = '40rem',
  height = '5rem',
  marginBottom = '3rem',
  circle = false,
}: SkeletonProps) {
  return (
    <div
      css={({ colors }: Theme) => css`
        @keyframes pulse {
          0% {
            background-color: ${colors.GRAY_100};
          }

          50% {
            background-color: ${colors.GRAY_000};
          }

          100% {
            background-color: ${colors.GRAY_100};
          }
        }
        margin-bottom: ${marginBottom};
        width: ${width};
        height: ${height};
        /* background: ${colors.GRAY_000}; */
        border-radius: ${circle ? '50%' : '10px'};
        animation: pulse 2s infinite ease-in-out;
      `}
    />
  );
}

export default Skeleton;
