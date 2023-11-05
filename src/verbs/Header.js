import PageHeader from "../layout/PageHeader";

export default function Header() {
  const headerText = "Every tense, mood and conjugation for (almost) every verb"

  return (
    <section id="header">
      <PageHeader text={headerText}>Verb Library</PageHeader>
    </section>
  )
}
