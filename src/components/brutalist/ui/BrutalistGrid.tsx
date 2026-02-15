/**
 * Visible grid overlay - blueprint/architectural aesthetic
 * 1px lines every 100px creating rigid structure
 */
export default function BrutalistGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    />
  );
}
