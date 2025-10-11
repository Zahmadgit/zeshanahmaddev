import chevrondo from "../../assets/terminal/chevrondown.svg";
import add from "../../assets/terminal/add.svg";
import close from "../../assets/terminal/close.svg";
import ellipsis from "../../assets/terminal/ellipsis.svg";
import splithorizontal from "../../assets/terminal/splithorizontal.svg";
import terminal from "../../assets/terminal/terminal.svg";
import trash from "../../assets/terminal/trash.svg";

export default function TerminalTab() {
  return (
    <div>
      <img src={chevrondo} />
      <img src={add} />
      <img src={close} />
      <img src={ellipsis} />
      <img src={splithorizontal} />
      <img src={terminal} />
      <img src={trash} />
    </div>
  );
}
