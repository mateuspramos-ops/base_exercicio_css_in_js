import styled from 'styled-components'
import { VagaType } from '../../types'

// -- Styled Components - Vaga --
const VagaCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #4caf50;
  }
`

const VagaCargo = styled.h3`
  font-size: 1.1rem;
  color: #1f1f1f;
  font-weight: 700;
  margin-bottom: 8px;
`

const VagaDescricao = styled.p`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 8px;
`

const VagaInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`

const VagaNivel = styled.span`
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 0.8rem;
  font-weight: 600;
`

const VagaFooter = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`

const VagaSalarioLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4caf50;
`

const DetacandoAolicar = styled.button`
  background-color: #ffffff;
  color: #4caf50;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0fbf0;
  }
`

// -- Props --
type VagaProps = {
  vaga: VagaType
}

// -- Componente --
const Vaga = ({ vaga }: VagaProps) => {
  return (
    <VagaCard>
      <VagaCargo>{vaga.cargo}</VagaCargo>
      <VagaDescricao>{vaga.descricao}</VagaDescricao>
      <VagaInfo>
        <VagaNivel>{vaga.nivel}</VagaNivel>
        <VagaNivel>{vaga.regime}</VagaNivel>
      </VagaInfo>
      <VagaFooter>
        <VagaSalarioLabel>{vaga.salario}</VagaSalarioLabel>
        <DetacandoAolicar>Candidatar-se</DetacandoAolicar>
      </VagaFooter>
    </VagaCard>
  )
}

export default Vaga
