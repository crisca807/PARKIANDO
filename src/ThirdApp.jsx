export const ThirdApp = () => {
    return (
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
  
        <button type="submit">Enviar</button>
      </form>
    );
  }
  