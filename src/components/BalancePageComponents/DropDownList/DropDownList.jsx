import style from "./DropDownList.module.css";
import categoryName from "../../../helpers/categoryList";
// const DropDownList = ({ type, options, changerDescription }) => {
//   return (
//     <div className={style.containerList}>
//       <ul className={style.list}>
//         {options
//           .filter((el) => el.type === type)
//           .map((elem) => (
//             <li
//               key={elem.value}
//               value={elem.value}
//               className={style.item}
//               onClick={() => {
//                 changerDescription(elem.label, elem.value);
//               }}
//             >
//               {elem.label}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

const DropDownList = ({ type, options, changerDescription }) => {
  return (
    <div className={style.DropDownContainer}>
      <div className={style.containerList}>
        <ul className={style.list}>
          {options
            .filter((el) => el.type === type)
            .map((elem) => (
              <li
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
