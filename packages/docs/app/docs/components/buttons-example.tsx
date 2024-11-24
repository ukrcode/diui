export default function ButtonsExample() {
  return (
    <div style={{display: "flex", gap: "1rem"}}>
      <button className="di-btn">Regular button</button>
      <button className="di-btn di-btn-primary">Primary</button>
      <button className="di-btn di-btn-primary" disabled>Primary Disabled</button>
      <button className="di-btn di-btn-outline">Outline</button>
      <button className="di-btn di-btn-outline" disabled>Outline Disabled</button>
    </div>
  );
}
