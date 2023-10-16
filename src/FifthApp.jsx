import WeatherWidget from './WeatherWidget'; // Componente de widget personalizado

export const FifthApp = () => {
  return (
    <div>
      <h2>Panel de control</h2>
      <WeatherWidget location="Ciudad" />
    </div>
  );
}
