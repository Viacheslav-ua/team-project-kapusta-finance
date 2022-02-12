import style from './Container.module.css';
import stylesBg from './StylesBg.module.css'


const ContainerReport = ({ children }) => {
 

  return (
   <div className = { stylesBg.mainBg}>
      <div className = { stylesBg.bottomFonReport}>
        <div className={style.container}>{children}</div> 
      </div>
    </div>
  );
};

export default ContainerReport;