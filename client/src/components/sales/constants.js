import Emea from "./continents/Emea";
import NorthAmerica from "./continents/NorthAmerica";
import Russia from "./continents/Russia";
import Australia from "./continents/Australia";
export const selectCnt = {
  asia: (
    <div className="u-padding--2">
      <h2 className="header__text">Asia</h2>
      <h3>Singapore, Malaysia, Indonesia & Vietnam</h3>
      <p className="sales__text">
        Enerxia Pte. Ltd.9003 Tampines Street 93
        <br />
        #02-152, Tampines Industrial Park A
        <br />
        Singapore 528837
        <br />
        Phone: +65 9012 8630
        <br />
        Email: <a href="mailto:st@enerxia.com.sg">st@enerxia.com.sg</a>
      </p>
      <h3>Japan</h3>
      <p className="sales__text">
        IMC Ltd.
        <br />
        Shinjuku Royal Building 805
        <br />
        7-21-1 Nishishinjuku
        <br />
        Shinjuku-ku, Tokyo 160-0023 Japan
        <br />
        Phone: +81-3-6908-9363
        <br />
        Email: <a href="mailto:imc.info@im-c.co.jp">imc.info@im-c.co.jp</a>
        <br />
        Website:{" "}
        <a target="_blank" rel="noreferrer" href="https://www.im-c.co.jp/">
          www.im-c.co.jp
        </a>
      </p>
    </div>
  ),
  india: (
    <div className="u-padding--2">
      <h2 className="header__text">India</h2>
      <p className="sales__text">
        ICON Electromatic
        <br />
        HRBR Layout, I Block
        <br />
        Kalyan Nagar, Banaswadi
        <br />
        Bangalore 560 043
        <br />
        Email:{" "}
        <a href="mailto:sujithts@iconelectromatic.com">
          sujithts@iconelectromatic.com
        </a>
        <br />
        Website:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://iconelectromatic.yolasite.com/"
        >
          www.iconelectromatic.com
        </a>
      </p>
    </div>
  ),
  southafrica: (
    <div className="u-padding--2">
      <h2 className="header__text">South Africa</h2>
      <p className="sales__text">
        RF Design
        <br />
        P.O. Box 1449
        <br />
        Milnerton 7435
        <br />
        Milnerton 7435
        <br />
        Phone: +27 21 555 8400
        <br /> <br />
        RF Design
        <br />
        Gauteng Office
        <br />
        Unit 7, Block 3
        <br />
        Waterfall Terraces
        <br />
        Howick Park
        <br />
        Waterfall Park
        <br />
        Midrand - 1685
        <br />
        Phone: +27 11 695 2200
        <br /> <br />
        RF Design
        <br />
        Durban Office
        <br />
        Block B - Suite 2
        <br />
        Fish Eagle Park
        <br />
        Gate 4, 2 Durant Place
        <br />
        Mount Edgecombe
        <br />
        Durban - 4320
        <br />
        Phone: +27 31 502 4191
        <br />
        Email: <a href="mailto:sales@rfdesign.com">sales@rfdesign.com</a>
        <br />
        Website:{" "}
        <a target="_blank" rel="noreferrer" href="https://rf-design.co.za/">
          www.rfdesign.co.za
        </a>
      </p>
    </div>
  ),
  emea: <Emea />,
  northamerica: <NorthAmerica />,
  russiacis: <Russia />,
  australianewzealand: <Australia />
};

export const normalizeText = (text) => {
  return text.toLowerCase().replace(/\W/g, "");
};
