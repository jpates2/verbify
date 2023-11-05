import PageHeader from "../layout/PageHeader";

export default function Signup() {
  const headerText = "Sign up now to track your progress and personalise your learning"

  return (
    <section id="signup">
      <PageHeader text={headerText}>Sign Up</PageHeader>
    </section>
  )
}
