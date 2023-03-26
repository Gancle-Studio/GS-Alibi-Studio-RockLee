import FacebookIcon from './Icons/FacebookIcon';
import InstagramIcon from './Icons/InstagramIcon';

export enum IconType {
  FacebookIcon = 'FacebookIcon',
  InstagramIcon = 'InstagramIcon'
}

export interface IIconProps {
  color?: string;
}

export const getIcon = (icon: IconType, props?: IIconProps) => {
  switch (icon) {
    case IconType.FacebookIcon:
      return <FacebookIcon {...props} />;
    case IconType.InstagramIcon:
      return <InstagramIcon {...props} />;
    default:
      break;
  }
};
