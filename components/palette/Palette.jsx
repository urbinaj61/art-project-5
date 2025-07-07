const Palette = ({ colors }) => {
  if (!Array.isArray(colors) || colors.length === 0) return null;

  return (
    <>
      <h3 className="art-palette-heading">Colours used in this art peice</h3>
      <section className="art-palette">
        {colors.map((colour) => (
          <div
            key={colour}
            className="art-colour"
            style={{ backgroundColor: colour }}
          ></div>
        ))}
      </section>
    </>
  );
};

export default Palette;
