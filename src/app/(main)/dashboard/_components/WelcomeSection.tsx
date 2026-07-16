interface Props {
  firstName: string;
}

export function WelcomeSection({ firstName }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold">سلام {firstName}</h2>
    </section>
  );
}
