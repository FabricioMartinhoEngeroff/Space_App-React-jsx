import styled from "styled-components";
import EstilosGlobais from "./assets/componentes/EstilosGlobais";
import Cabecalho from "./assets/componentes/cabecalho";
import BarraLatera from "./assets/componentes/BarraLatera";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLatera/>
    </FundoGradiente>
  );
}

export default App;
