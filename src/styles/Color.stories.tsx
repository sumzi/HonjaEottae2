import { css, Theme } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import theme from './theme';

export default {
  title: 'Design System/Color',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'full',
    },
  },
} as ComponentMeta<any>;

const Color = ({ name, color }: { name: string; color: string }) => {
  return (
    <div
      css={css`
        border: 1px solid lightgray;
      `}
    >
      <div
        css={css`
          background: ${color};
          width: 20rem;
          height: 10rem;
          border-bottom: 1px solid lightgray;
        `}
      />
      <b>{name}</b>
      <p>{color}</p>
    </div>
  );
};

function ColorList({
  colors,
  namespace,
}: {
  colors: Record<string, string>;
  namespace: string;
}) {
  return (
    <div>
      <h1
        css={css`
          font-size: 3rem;
        `}
      >
        {namespace}
      </h1>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-top: 1rem;
          padding: 2rem 0;
          border-top: 1px solid lightgray;
        `}
      >
        {Object.entries(colors)
          .filter(([key]) => (namespace ? key.includes(namespace) : true))
          .map(([key, value]) => (
            <Color key={key} name={key} color={value} />
          ))}
      </div>
    </div>
  );
}

const Template: ComponentStory<any> = () => {
  const { colors } = theme;

  return (
    <div>
      <h1
        css={css`
          font-size: 7rem;
        `}
      >
        Design System : Color
      </h1>
      <ColorList colors={colors} namespace="WHITE" />
      <ColorList colors={colors} namespace="BLACK" />
      <ColorList colors={colors} namespace="PRIMARY" />
      <ColorList colors={colors} namespace="SECONDARY" />
      <ColorList colors={colors} namespace="GRAY" />
    </div>
  );
};

export const Default = Template.bind({});
