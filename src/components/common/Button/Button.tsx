import { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}

function Button({
  size = 'medium',
  variant = 'primary',
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      css={[styles.button, styles.size[size], styles.variant[variant]]}
    >
      {children}
    </button>
  );
}

export default Button;
