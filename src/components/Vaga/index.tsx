import styled from 'styled-components'
import { VagaType } from '../../types'

// ── Styled Components — Vaga ──
const VagaCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    border-color: #4caf50;
  }
`

const VagaCargo = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 8px;
`

const VagaDescricao = styled.p`
  font-size: 0.85rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 16px;
`

const VagaInfos = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const VagaTag = styled.span`
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 0.72rem;
  font-weight: 600;
`

const VagaFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`

const VagaSalario = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: #4caf50;
`

const BotaoCandidatar = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #388e3c;
  }
`

// ── Props ──
type VagaProps = {
  vaga: VagaType
}

// ── Componente ──
const Vaga = ({ vaga }: VagaProps) => {
  return (
    <VagaCard>
      <VagaCargo>{vaga.cargo}</VagaCargo>
      <VagaDescricao>{vaga.descricao}</VagaDescricao>
      <VagaInfos>
        <VagaTag>{vaga.nivel}</VagaTag>
        <VagaTag>{vaga.regime}</VagaTag>
      </VagaInfos>
      <VagaFooter>
        <VagaSalario>{vaga.salario}</VagaSalario>
        <BotaoCandidatar>Candidatar-se</BotaoCandidatar>
      </VagaFooter>
    </VagaCard>
  )
}

export default Vaga
