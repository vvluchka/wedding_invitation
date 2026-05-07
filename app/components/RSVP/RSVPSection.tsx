import { RSVPForm } from "./RSVPForm";

type Props = { webAppUrl: string };

export function RSVPSection({ webAppUrl }: Props) {
  return (
    <div className="pt-12 border-t border-[#e8d9c7]">
      <h2 className="text-2xl font-medium text-[#3f2e1e] mb-6 text-center">
        Підтвердіть, будь ласка, свою присутність
      </h2>
      <p className="text-[#6b5a45] mb-8 text-center max-w-md mx-auto">
        Будемо дуже раді бачити вас на нашому весіллі!
      </p>
      <RSVPForm webAppUrl={webAppUrl} />
    </div>
  );
}