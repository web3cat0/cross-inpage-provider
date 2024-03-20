import { hackConnectButton } from '../../hackConnectButton';
import { sites } from './sitesTypeDirectConsts';

function startHackConnectButton() {
  for (const [name, site] of Object.entries(sites)) {
    hackConnectButton({
        urls: ['app.frax.finance'],
        providers: [IInjectedProviderNames.ethereum],
        replaceMethod(options) {}
    });
  }
}

startHackConnectButton();
