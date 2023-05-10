import Toggle from "../toggle/Toggle";

interface NavProps {
  particles: boolean;
  toggleParticles(): void;
}
function Navigation({ particles, toggleParticles }: NavProps) {
  return (
    <div>
      <Toggle on={particles} toggle={toggleParticles} />
    </div>
  );
}

export default Navigation;
