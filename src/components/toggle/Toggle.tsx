import { Handle, Switch } from "./Toggle.styles";

interface ToggleProps {
  on: boolean;
  toggle?(): void;
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

export const MenuSwitch = ({ on }: ToggleProps) => {
  return (
    <Switch
      data-ison={on}
      data-ismenu={true}
      animate={on ? { rotate: "180" } : { rotate: 0 }}
      transition={spring}
      className={on ? "on" : ""}
    >
      <Handle
        data-ismenu={true}
        data-ison={on}
        layout
        animate={on ? { rotate: "180" } : { rotate: 0 }}
        transition={spring}
      />
    </Switch>
  );
};

export default Toggle;
