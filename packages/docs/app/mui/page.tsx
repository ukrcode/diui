import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

export default function Page() {
  return (
    <section className="di-container">
      <h2>MUI components usage</h2>

      <Button variant="contained">Test Button</Button>

      <br />

      <Slider defaultValue={30} sx={{ width: 300, paddingTop: 10 }} />
    </section>
  );
}
