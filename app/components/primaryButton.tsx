import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function PrimaryButton({ children }: Props) {
  return (
    <button className="group flex items-center gap-2 rounded-full border border-amber-400 px-6 py-3 text-sm uppercase tracking-[0.18em] text-amber-300 transition hover:bg-amber-400 hover:text-black">
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}