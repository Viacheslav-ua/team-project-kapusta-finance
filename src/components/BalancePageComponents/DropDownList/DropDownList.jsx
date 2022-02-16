import style from "./DropDownList.module.css";

const DropDownList = ({ type, options, changerDescription }) => {
  return (
    <div className={style.DropDownContainer}>
      <div className={style.containerList}>
        <ul className={style.list}>
          {options
            .filter((el) => el.type === type)
            .map((elem) => (
              <li
                key={elem._id}
                className={style.item}
                onClick={() => {
                  changerDescription(elem.label);
                }}
              >
                {elem.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
