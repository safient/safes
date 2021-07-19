import { withDefaults } from './avatar.props';

interface Props {
  count?: number;
  className?: string;
}

const defaultProps = {
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type AvatarGroupProps = Props & typeof defaultProps & NativeAttrs;

const AvatarGroup: React.FC<React.PropsWithChildren<AvatarGroupProps>> = ({ count, className, children }) => {
  return (
    <div className={`avatar-group ${className}`}>
      {children}
      {count && <span className='count'>+{count}</span>}
      <style jsx>{`
        .avatar-group {
          display: flex;
          align-items: center;
          height: auto;
          width: max-content;
        }

        .avatar-group :global(.avatar) {
          margin-left: -0.625rem;
        }

        .count {
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          padding-left: 0.5;
          color: ${({ theme }: any) => theme.colors.textPrimary};
        }
      `}</style>
    </div>
  );
};

export default withDefaults(AvatarGroup, defaultProps);
