import { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  selected?: boolean;
}

function Button({
  size = 'medium',
  variant = 'primary',
  selected = false,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      css={[
        styles.button,
        styles.size[size],
        styles.variant[variant],
        selected && styles.selected,
      ]}
    >
      {children}
    </button>
  );
}

export default Button;
