type Props = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="rounded-xl border border-slate-300 p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        {desc}
      </p>
    </div>
  );
}
