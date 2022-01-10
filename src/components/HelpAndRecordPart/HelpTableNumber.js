import BestResultAndRulePart from "./BestResultAndRulePart";
import TableNumber from "./TableNumber";

function HelpTableNumberAndRecord({ bestResult }) {
  return (
    <div className="tableHelper">
      <TableNumber />
      <BestResultAndRulePart bestResult={bestResult} />
    </div>
  );
}

export default HelpTableNumberAndRecord;
