import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function ElDaawat() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Container dir="rtl" lang="ar">
      <Form dir="rtl" lang="ar">
        <h1 className="text-da3">يلا ندعي ربنا🤲</h1>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3 checkbox-taskes-d">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`اللهم اهدني فيمن هديت اللهم اشرح صدري لحبك اللهم ابك عيني من خشيتك ورفق قلبي لحبك وعلمني علما يوصلني اليك ويعرفني عليك اللهم اعني على ذكرك وشكرك وحسن عبادتك اللهم يا مقلب القلوب ثبت قلبي على دينك `}
            />

            <Form.Check
              type={type}
              label={`للهم حسن خلقي كما حسنت خلقي اللهم اهديني لحسن الاخلاق لا يهديك لاحسنها الا انت واصرف عنا سيئ الاخلاق لا يصرف سيئه الا انت ادعي ان ربنا يشفيك من عيبك باللطف والعافيه `}
              id={`disabled-default-${type}`}
            />

            <Form.Check
              type={type}
              label={`للهم وسع علينا في ارزاقنا حتى لا نمد ايدينا الا اليك وانا نتوكل بقلوبنا الا عليك اللهم صل علينا ارزاقنا بغير مهانه ولا مذل اللهم وسع علينا في ارزاقنا مع تمام الستر واللطف والعافيه `}
              id={`disabled-default-${type}`}
            />
            <Form.Check
              type={type}
              label={`اللهم اشفي لنا من الاوجاع والالام واشفي مقولنا من الحزن والمخابز والاوهام `}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
        <div className="btn-bac">
          <button className="back-btn" onClick={goToHome}>
            الرجوع للصفحة الرئيسية
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ElDaawat;
