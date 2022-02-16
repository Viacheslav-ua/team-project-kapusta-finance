import style from './Container.module.css';
import stylesBg from './StylesBg.module.css'


const Container = ({ children }) => {
 

  return (
   <div className = { stylesBg.mainBg}>
      <div className = { stylesBg.bottomFon}>
        <div className={style.container}>{children}</div>
      </div>
    </div>
  );
};

export default Container;