import { Inputs } from "../components/contactform";
import "./email.css";

export default function Email({ fullName }: Inputs) {
  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  );
}
