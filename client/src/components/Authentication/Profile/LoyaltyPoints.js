import useUserContext from "../../../hooks/useUserContext";

export default function LoyaltyPoints() {
  const { userData } = useUserContext();

  return (
    <div>
      Loyalty Points
      <div>{userData.loyaltyPoints || 0}</div>
    </div>
  );
}
