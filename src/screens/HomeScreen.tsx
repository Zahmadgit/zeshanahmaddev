import { useNavigate } from "react-router";

export default function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}
