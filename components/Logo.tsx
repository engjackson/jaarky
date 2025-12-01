// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image
        src="/img/logo-jaarky.svg"
        alt="Jaarky logo"
        width={size}
        height={size}
        priority
      />
      <span className="text-xl font-semibold text-jaarky-ink">
        Jaarky
      </span>
    </Link>
  );
}