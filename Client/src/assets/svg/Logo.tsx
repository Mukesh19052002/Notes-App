const Logo = () => {
  const logoFontStyle = {
    fontWeight: "600",
    fontSize: "17px",
  };
  return (
    <div className="d-flex">
      <img
        style={{ width: "40px", height: "37px" }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfUlEQVR4nO2Zu0rEUBCGvyZb2Nmo+DiChZ22XrG1ERZtdq3zCj6PoFioiyg2+hqBZdnVI4EIwyFZNucSzy7zwWly+Wd+JpkkE1AURUmZDBgCL8AEMB6rAI6E9iUwbjh2UsUcVDk40QMePZO2153Q/1zwnAdXEzeBk29TAWOtshKtGQmBvk8pHciAKxH/2UVEXvPl5dQ1PeueaI0s4X9hfHJQA6lXIAemAbrTtNLq3EARuMXWoRUw2oX8MNpGWeEHWe7YRue1zaVpo0UKBvJlr0AXGDWAVsCZ7ZQ/aLLqm3u04LSjHAAkY8Bl2tFPyUDbaceta6BYBpqmHevAk9j3A1z4BIploG7asQG8ie3fwLlvoFgGbN1N4F1smwFnMQKFQupuAR9W8scxAoVE6n5ZyR/GChRL14gH1UHgONFGi3XJ7xMB2e6uA5qQyY+BPSIxdHjX/1v3wFqD7kz0+V0iklU/F1xN7DTongCvwGnM5KWJgcMvpnkVUBRFWSF+Aazm3FKAZtkGAAAAAElFTkSuQmCC"
      />
      <p className="ms-1 mt-1" style={logoFontStyle}>
        NoteIt
      </p>
    </div>
  );
};

export default Logo;
