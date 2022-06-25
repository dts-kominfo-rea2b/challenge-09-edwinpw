// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import style from './ContactStyle.css';


const Contact = ({data}) => {
  return (
    <div className={style.box}>
      <img className={style.boximage} src={data.photo} alt={data.name} />
      <div className={style.boxcontent}>
        <h5 className={style.boxphone}>{data.phone}</h5>
        <div className={style.boxbody}>
          <h2 className={style.boxtitle}>{data.name}</h2>
          <p className={style.boxemail}>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

console.log(Contact[0]);

export default Contact;