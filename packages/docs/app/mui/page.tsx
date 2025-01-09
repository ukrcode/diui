import Button from "@mui/material/Button";
import SuccessSlider from "./components/SuccessSlider";

export default function Page() {
  return (
    <section className="di-container">
      <h2>MUI components usage</h2>

      <Button variant="contained">Test Button</Button>

      <br />

      <SuccessSlider successType="main" defaultValue={30} />
    </section>
  );
}
