import { getIcon, IconType } from './Icons';

interface IIconComponentProps {
  icon: IconType;
  className?: string;
}

const Icon = ({ icon, className }: IIconComponentProps) => (
  <div className={className || ''}>{getIcon(icon)}</div>
);

export default Icon;
