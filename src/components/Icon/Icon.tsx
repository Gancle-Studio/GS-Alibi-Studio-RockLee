import {
  Facebook,
  Instagram,
  Address,
  Coffe,
  GoldArrowRight,
  GoldArrowLeft,
  GrayArrowRight,
  Mail,
  Paw,
  Payment,
  Phone,
  Physio,
  Solo,
  Balance,
  HappyHeart,
  Bic,
  Calm,
  Copy,
  AlibiChoiceLogo
} from './Icons';

export enum IconType {
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Address = 'Address',
  Coffe = 'Address',
  GoldArrowRight = 'GoldArrowRight',
  GoldArrowLeft = 'GoldArrowLeft',
  GrayArrowRight = 'GrayArrowRight',
  Mail = 'Mail',
  Paw = 'Paw',
  Payment = 'Payment',
  Phone = 'Phone',
  Physio = 'Physio',
  Solo = 'Solo',
  HappyHeart = 'HappyHeart',
  Calm = 'Calm',
  Bic = 'Bic',
  Balance = 'Balance',
  Copy = 'Copy',
  AlibiChoiceLogo = 'AlibiChoiceLogo'
}

const getIcon = (icon: IconType) => {
  switch (icon) {
    case IconType.Facebook:
      return Facebook.src;
    case IconType.Instagram:
      return Instagram.src;
    case IconType.Address:
      return Address.src;
    case IconType.Coffe:
      return Coffe.src;
    case IconType.GoldArrowLeft:
      return GoldArrowLeft.src;
    case IconType.GoldArrowRight:
      return GoldArrowRight.src;
    case IconType.GrayArrowRight:
      return GrayArrowRight.src;
    case IconType.Mail:
      return Mail.src;
    case IconType.Paw:
      return Paw.src;
    case IconType.Payment:
      return Payment.src;
    case IconType.Phone:
      return Phone.src;
    case IconType.Physio:
      return Physio.src;
    case IconType.Solo:
      return Solo.src;
    case IconType.Bic:
      return Bic.src;
    case IconType.Calm:
      return Calm.src;
    case IconType.Balance:
      return Balance.src;
    case IconType.HappyHeart:
      return HappyHeart.src;
    case IconType.Copy:
      return Copy.src;
    case IconType.AlibiChoiceLogo:
      return AlibiChoiceLogo.src;
    default:
      break;
  }
};

interface IIconProps {
  icon: IconType;
}

const Icon = ({ icon }: IIconProps) => <img src={getIcon(icon)} alt='' />;

export default Icon;
