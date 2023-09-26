export default function App() {
  const numeros = [];
  let i = 0;

  while (i <= 10) {
    numeros.push(<span>{i},</span>);
    i++;
  }
  return (
    <div> <span>{numeros}</span></div>
  );
}
