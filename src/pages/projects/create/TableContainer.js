// MATERIAL ICON
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

export default function TableContainer({
  role,
  addMin,
  subMin,
  minNum,
  addMax,
  subMax,
  maxNum,
}) {
  return (
    <div className="table-container">
      <p>{role}</p>

      <div className="min-btn">
        <div className="wrapper">
          <span onClick={subMin}>
            <KeyboardArrowLeftIcon className="arrow-icon" />
          </span>
          <div className="number-container">{minNum}</div>
          <span onClick={addMin}>
            <KeyboardArrowRightIcon className="arrow-icon" />
          </span>
        </div>
      </div>

      <div className="max-btn">
        <div className="wrapper">
          <span onClick={subMax}>
            <KeyboardArrowLeftIcon className="arrow-icon" />
          </span>

          <div className="number-container">{maxNum}</div>

          <span onClick={addMax}>
            <KeyboardArrowRightIcon className="arrow-icon" />
          </span>
        </div>
        <div className="edit-roles-icons">
          <ModeEditOutlineOutlinedIcon className="edit-icon" />
          <HighlightOffRoundedIcon className="delete-icon" />
        </div>
      </div>
    </div>
  );
}
