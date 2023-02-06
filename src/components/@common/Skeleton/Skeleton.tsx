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
        margin-bottom: ${marginBottom};
        width: ${width};
        height: ${height};
        background: ${colors.GRAY_000};
        border-radius: ${circle ? '50%' : '10px'};
      `}
    />
  );
}

export default Skeleton;
