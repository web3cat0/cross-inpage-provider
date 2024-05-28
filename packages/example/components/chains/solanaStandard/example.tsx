/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
require('@solana/wallet-adapter-react-ui/styles.css');
import { dapps } from './dapps.config';
import { useEffect, useMemo } from 'react';
import { ApiPayload, ApiGroup } from '../../ApiActuator';
import { useWallet } from '../../../components/connect/WalletContext';
import DappList from '../../../components/DAppList';
import params from '../solana/params';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet as useSolWallet } from '@solana/wallet-adapter-react';
import InfoLayout from '../../../components/InfoLayout';
import { createTransferTransaction, createVersionedTransaction } from '../solana/builder';
import { jsonToUint8Array } from '../../../lib/uint8array';
import nacl from 'tweetnacl';

function Example() {
  const { setProvider } = useWallet();

  const { connection } = useConnection();
  const {
    connected,
    publicKey,
    signMessage,
    signTransaction,
    signAllTransactions,
    sendTransaction,
  } = useSolWallet();

  useEffect(() => {
    if (connected) {
      setProvider(true);
    } else {
      setProvider(false);
    }
  }, [connected, setProvider]);

  return (
    <>
      <WalletMultiButton />

      <InfoLayout title="Base Info">
        {publicKey && <p>PublicKey: {publicKey.toBase58()}</p>}{' '}
      </InfoLayout>

      <ApiGroup title="Sign Message">
        <ApiPayload
          title="signMessage"
          description="签名消息"
          presupposeParams={params.signMessage}
          onExecute={async (request: string) => {
            const res = await signMessage(Buffer.from(request, 'utf8'));
            return JSON.stringify(res);
          }}
          onValidate={(request: string, result: string) => {
            const signatureObj = jsonToUint8Array(result);
            const isValidSignature = nacl.sign.detached.verify(
              Buffer.from(request, 'utf8'),
              signatureObj,
              publicKey.toBytes(),
            );

            return Promise.resolve(isValidSignature.toString());
          }}
        />
      </ApiGroup>
      <ApiGroup title="Transfer">
        <ApiPayload
          title="signAndSendTransaction"
          description="签署并发送交易"
          presupposeParams={params.signAndSendTransaction(publicKey?.toBase58() || '')}
          onExecute={async (request: string) => {
            const {
              toPubkey,
              amount,
            }: {
              toPubkey: string;
              amount: number;
            } = JSON.parse(request);
            const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            const transafe = createTransferTransaction(
              publicKey,
              toPubkey,
              recentBlockhash,
              amount,
            );
            const res = await sendTransaction(transafe, connection);
            return JSON.stringify(res);
          }}
        />
        <ApiPayload
          title="signTransaction"
          description="签署交易"
          presupposeParams={params.signAndSendTransaction(publicKey?.toBase58() || '')}
          onExecute={async (request: string) => {
            const {
              toPubkey,
              amount,
            }: {
              toPubkey: string;
              amount: number;
            } = JSON.parse(request);
            const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            const transafe = createTransferTransaction(
              publicKey,
              toPubkey,
              recentBlockhash,
              amount,
            );
            const res = await signTransaction(transafe);
            return JSON.stringify(res);
          }}
        />
        <ApiPayload
          title="signVersionedTransaction"
          description="签署 Versioned 交易"
          presupposeParams={params.signAndSendTransaction(publicKey?.toBase58())}
          onExecute={async (request: string) => {
            const {
              toPubkey,
              amount,
            }: {
              toPubkey: string;
              amount: number;
            } = JSON.parse(request);
            const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            const transfer = createVersionedTransaction(
              publicKey,
              toPubkey,
              recentBlockhash,
              amount,
            );
            const res = await signTransaction(transfer);
            return JSON.stringify(res);
          }}
        />
        <ApiPayload
          title="signMultipleTransactions"
          description="签署多个交易"
          presupposeParams={params.signMultipleTransaction(publicKey?.toBase58() || '')}
          onExecute={async (request: string) => {
            const params: {
              toPubkey: string;
              amount: number;
            }[] = JSON.parse(request);
            const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            const trans = params.map((param) => {
              return createTransferTransaction(
                publicKey,
                param.toPubkey,
                recentBlockhash,
                param.amount,
              );
            });
            const res = await signAllTransactions(trans);
            return JSON.stringify(res);
          }}
        />
      </ApiGroup>

      <DappList dapps={dapps} />
    </>
  );
}

export default function App() {
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => 'https://node.onekey.so/sol', [network]);

  const wallets = useMemo(
    () => [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Example />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
