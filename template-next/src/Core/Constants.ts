import { Pathnames } from '@/i18n/routing';
import { TxKeyPath } from '@/i18n/type';

export const NavItems: Array<{ href: Pathnames; label: TxKeyPath }> = [{ href: '/about', label: 'Title' }] as const;
