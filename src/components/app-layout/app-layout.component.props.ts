/**
 *  Interface for AppLayout which accepts Children as props.
 */
export interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
