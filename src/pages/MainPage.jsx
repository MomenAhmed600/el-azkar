import { Link } from "react-router-dom";

const mainPage = () => {
  return (
    <div dir="rtl" lang="ar">
      <h1 className="content1">يلا نستغل اليوم ونلم حسنات اليوم كله😉</h1>
      <div className="btn-group">
        <Link className="link" to="/ElAzkar">
          <button className="link-btn">اول حاجه الذكر</button>
        </Link>
        <Link className="link" to="/ElDaawat">
          <button className="link-btn">ثاني حاجه الدعوات</button>
        </Link>
      </div>
    </div>
  );
};

export default mainPage;
