import { Facebook, Instagram } from './Icons';

export enum IconType {
  Facebook = 'Facebook',
  Instagram = 'Instagram'
}

const getIcon = (icon: IconType) => {
  switch (icon) {
    case IconType.Facebook:
      return Facebook.src;
    case IconType.Instagram:
      return Instagram.src;
    default:
      break;
  }
};

interface IIconProps {
  icon: IconType;
}

const Icon = ({ icon }: IIconProps) => <img src={getIcon(icon)} alt='' />;

export default Icon;
