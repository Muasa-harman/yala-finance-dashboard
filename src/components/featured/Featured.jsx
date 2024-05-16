import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Company from "../../Company/Company"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Trees</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
      <div className="counties">
         <div className='title'>
        <h4 className='lead'>County by Rank</h4>
        <span style={{color:"green",marginTop:"15px" }}>View More</span>
        <div className="count">
        <Company company={'Embu'} total={200000}/>
        <Company company={'Nairobi'} total={200000}/>
        <Company company={'Mombasa'} total={200000}/>
        <Company company={'Kisumu'} total={200000}/>
        <Company company={'Kajiado'} total={200000}/>
        <Company company={'Machakos'} total={200000}/>
        <Company company={'Makueni'} total={200000}/>
        <Company company={'Kericho'} total={200000}/>
        <Company company={'Trans-Nzoia'} total={200000}/>
        </div>
      </div>
         </div>
        </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
  );
};

export default Featured;
