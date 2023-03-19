import React from 'react';
import { Link } from 'react-router-dom';

// console.log('link', Link)
//поправить название
function Entry({ title, children, btnText, linkText, onSubmit,isValid }) {
  return (
    <section className="login" aria-label={title}>
      <div className="login__container">
        <h3 className="login__title">{title}</h3>
        <form name="form" className="form" onSubmit={onSubmit} isValid={isValid}>
          {children}
          <button className="button button_type_entry" type="submit">
            {btnText}
          </button>
        </form>
      </div>
      <Link to="/signin" className="login__auth-link">
        {linkText}
      </Link>
    </section>
  );
}
export default Entry;
