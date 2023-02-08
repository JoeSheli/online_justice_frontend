import { East } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ReactComponent as Person } from "../assets/person.svg";

function ReportFraud() {
  return (
    <div className="flex pt-10 justify-between w-full items-center">
      <div className="flex  gap-5 flex-col items-start max-w-[28rem]">
        <div className="font-[800] text-5xl flex flex-col gap-5">
          <div>Report to help </div>
          <div className="text-[#DB1D60]">Fight Fraud!</div>
        </div>
        <div>
          Protect your community by reporting fraud, scams, and bad business
          practices.
        </div>
        <Button
          variant="contained"
          style={{
            background: "#DB1D60",
            padding: "10px 40px",
            textTransform: "capitalize",
          }}
          className="flex items-center gap-4"
        >
          <span>Report Now</span>
          <East />
        </Button>
      </div>
      <Person />
    </div>
  );
}

export default ReportFraud;
