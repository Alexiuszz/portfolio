
import { Handle, Switch } from "./Toggle.styles";

interface ToggleProps {
  on: boolean;
  toggle(): void;
}
function Toggle({ on, toggle }: ToggleProps) {
  return (
    <Switch
      data-ison={on}
      onClick={toggle}
      className={on ? "on" : ""}
    >
      <Handle layout transition={spring} />
    </Switch>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;
