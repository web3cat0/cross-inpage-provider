// export function sites()

import { Selector } from '../../../types';

export type SitesTypeDirect = {
  wallettButtonListSelector: Selector;
  walletIconSelector: Selector;
  isWalletIconImgElement?: boolean;
  
};

export const sites: Record<string, SitesTypeDirect> = {
  boringdao: {
    wallettButtonListSelector:
      '.MuiModal-root .MuiDialog-container .MuiPaper-root > div:nth-child(2) > div',
    walletIconSelector: 'img[alt="{findName}"][width="40"]',
    isWalletIconImgElement: true,
  },
};

