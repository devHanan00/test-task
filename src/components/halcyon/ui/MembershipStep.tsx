type MembershipStepProps = {
  number: string;
  title: string;
  description: string;
};

export function MembershipStep({ number, title, description }: MembershipStepProps) {
  return (
    <div className="relative flex flex-col gap-4 border-l border-stone-light pl-6 md:pl-8">
      <span className="font-display text-display-md font-light text-sunset-orange/30">
        {number}
      </span>
      <h3 className="font-display text-heading-md font-normal text-harbor-navy">{title}</h3>
      <p className="font-body text-body-md text-harbor-navy/70">{description}</p>
    </div>
  );
}
