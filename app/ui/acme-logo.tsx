import Image from 'next/image';
import RedLogo from '@/app/ui/redLogo.png';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center leading-none`}
    >
      <Image
        src={RedLogo}
        alt="Acme Red Logo"
        className="h-12 w-12"
      />
    </div>
  );
}
