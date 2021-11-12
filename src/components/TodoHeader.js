import css from "../Styles/TodoHeader.module.css";
import { useEffect, useState } from "react";

export default function TodosHeader() {
  const [dat, setDat] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval(() => {
      setDat(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const refresh = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className={css.clear}>
        <i onClick={refresh} id="reset" className="fa fa-refresh"></i>
      </div>
      <p id="date" className={css.date}>
        {dat}
      </p>
      <img
        // className={[css["img-fluid"], css["cover-img"]].join(" ")}
        className={`${css["img-fluid"]} ${css["cover-img"]} `}
        src="/assets/weather.jpg"
        alt="Cover"
      />
    </header>
  );
}
