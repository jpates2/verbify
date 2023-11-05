import PageHeader from "../layout/PageHeader";

export default function Header() {
  const headerText = "Start practising now!"

  return (
    <section id="flashcards">
      <PageHeader text={headerText}>Flashcards</PageHeader>
    </section>
  )
}
