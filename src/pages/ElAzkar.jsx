import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ElAzkar() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container className="" dir="rtl" lang="ar">
        <div className="text-front">
          <h2>حنقول 100 مره لكل ذكر الصبح و قبل المغرب</h2>
        </div>
        <div className="checkbox-taskes">
          <label className="checkbox">
            <input type="checkbox" />
            لا إلهَ إلاَّ اللَّه وحْدهُ لاَ شَرِيكَ لهُ، لَهُ المُلْكُ، ولَهُ
            الحمْدُ، وَهُو عَلَى كُلِّ شَيءٍ قَدِيرٌ
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ
            وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            أستغفرُ اللهَ الذي لا إلهَ إلا هو، وأتوبُ إليه
          </label>
        </div>
        <div
          className="count"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="count-1"
            style={{
              width: "300px",
              height: "100px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            لقد قمت بلضغط {count} مرة
          </div>
        </div>
        <div className="btn-group">
          <button className="link-btn" onClick={() => setCount(count + 1)}>
            اضغط
          </button>

          <button className="link-btn" onClick={() => setCount(0)}>
            انتهاء
          </button>
        </div>
        <div className="btn-bac">
          <button className="back-btn" onClick={goToHome}>
            الرجوع للصفحة الرئيسية
          </button>
        </div>
      </Container>
    </>
  );
}

export default ElAzkar;
