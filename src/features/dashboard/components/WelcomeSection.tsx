interface Props {
  firstName: string;
}

export function WelcomeSection({ firstName }: Props) {
  return (
    <section className=" bg-blue-100 h-screen ">
      {/* <h2 className="text-2xl font-bold">سلام {firstName}</h2> */}
    </section>
  );
}
