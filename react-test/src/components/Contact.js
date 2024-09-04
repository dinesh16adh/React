const Contact =(props)=>{
  
    return(
    <>
    <div className="contact">
        {props.data.name}<br/>
        {props.data.number}<br/>
        {props.data.location}<br/>
        
      </div>  
      <hr/>
    </>
    );
}
export default Contact;