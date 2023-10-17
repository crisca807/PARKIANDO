import  PropTypes  from 'prop-types';
export const CounterApp = ( {value } ) => {
  
  //console.log(props);

  return (
    <>

      <h1>CounterApp</h1>
      <p>{value}</p>

      <button onClick = { function() {console.log(+1) }}>
        +1
      </button>
      
    </>
  )
}

CounterApp.propTypes = {
value: PropTypes.number.isRequired
}