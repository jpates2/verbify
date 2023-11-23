import { useSelector } from 'react-redux';

export default function Header() {
  const buddyDetails = useSelector(state => state.buddy);
  const userDetails = useSelector(state => state.user);

  return (
    <section>
      <div>Profile</div>
      <div>{userDetails.username}</div>
      <div>{userDetails.fullName}</div>
      <div>{buddyDetails.buddyName}</div>
      <img src={buddyDetails.buddyImg} alt="buddy" />
    </section>
  )
}
