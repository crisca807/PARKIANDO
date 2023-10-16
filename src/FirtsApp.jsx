export const FirstApp = () => {
    const items = ['Manzanas', 'Plátanos', 'Uvas'];
  
    return (
      <ol>
        {items.map((item, index) => (
          <li key={index}>Yo quiero {item}</li>
        ))}
      </ol>
    );
  }
  