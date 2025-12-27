export const StyleForm = () => {
  return (
      <form className='contact-form'>      
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username" className='form-input'/>
        <br/>
        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" className='form-input' tabindex='1' />
      </form>    
  );
};                         